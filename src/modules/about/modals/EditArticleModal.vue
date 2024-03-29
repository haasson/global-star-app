<template>
   <AppModal ref="modal" :minWidth="1000">
      <template #title>{{ titleMap[articleType] }}</template>
      <template #content>
         <form class="form">
            <div v-if="articleType === 'add-product'" class="select-wrap">
               <AppSelect
                  label="Раздел"
                  :options="sectionOptions"
                  v-model="section"
               />
               <AppSelect
                   label="Категория"
                   :options="categoryOptions"
                   v-model="category"
               />
            </div>
            <AppInput class="title" label="Название" v-model="data.title"/>

            <div class="editor-block">
               <label>Описание</label>
               <AppEditor v-model="data.text"/>
            </div>

            <AppInput v-if="isProductPage" type="number" class="price" label="Цена" v-model.number="data.price"/>
            <AppInput v-if="isProductPage" textarea label="Ключевые слова для поиска" v-model.trim="data.keywords"/>

            <AppImageUpload
                v-if="entity !== 'vacancy'"
                class="upload-image"
                :images="data.images"
                :multiple="!isProductPage"
                @update:images="onUpdateImages"
            />
         </form>
      </template>
      <template #controls>
         <AppButtonsGroup class="controls">
            <AppButton @click="close" color="empty">Отмена</AppButton>
            <AppButton @click="saveData" color="blue" :disabled="isButtonDisabled">Сохранить</AppButton>
         </AppButtonsGroup>
      </template>
   </AppModal>
</template>

<script>
import {computed, reactive, ref, watch} from "vue";
import AppModal from "../../../components/Modals/AppModal.vue";
import AppEditor from "../../../components/App/AppEditor.vue";
import AppButtonsGroup from "../../../components/App/AppButtonsGroup.vue";
import AppButton from "../../../components/App/AppButton.vue";
import AppInput from "../../../components/App/AppInput.vue";
import AppImageUpload from "../../../components/App/AppImageUpload.vue";
import AppIcon from "../../../components/App/AppIcon.vue";
import useStorage from "../../../composable/storage";
import useDatabase from "../../../composable/database";
import useProductCategory from "../composable/productCategory.js";
import AppSelect from "../../../components/App/AppSelect.vue";

export default {
   name: "EditArticleModal",
   components: {
      AppSelect,
      AppIcon,
      AppImageUpload,
      AppInput,
      AppButton,
      AppButtonsGroup,
      AppEditor,
      AppModal,
   },
   props: {
      articleType: {
         type: String,
         required: true,
      },
      id: {
         type: String,
         default: "",
      },
      title: {
         type: String,
         default: "",
      },
      text: {
         type: Object,
      },
      price: {
         type: Number,
      },
      keywords: {
         type: String,
      },
      images: {
         type: Object,
         default: () => ({}),
      },
   },
   setup(props, {emit}) {
      const titleMap = {
         'add-vacancy': 'Добавить вакансию',
         'edit-vacancy': 'Редактировать вакансию',
         'add-projects': 'Добавить проект',
         'edit-projects': 'Редактировать проект',
         'add-news': 'Добавить новость',
         'edit-news': 'Редактировать новость',
         'add-product': 'Добавить продукт',
         'edit-product': 'Редактировать продукт',
      }
      const entity = props.articleType.split('-')[1];
      const isProductPage = entity === 'product'

      // Modal
      const modal = ref(null);
      const open = () => {
         if (!isProductPage) {
            getLastID(`${entity}/lastID`);
            getArticlesCount(`${entity}/count`);
         }
         modal.value.open();
      };
      const close = () => {
         clearForm();
         modal.value.confirm();
      };

      let dbPath = entity

      const data = reactive({title: ""});
      const {set: setImages, loading: imagesUpload, error: uploadError} = useStorage();

      const {get: getArticlesCount, data: articlesCount} = useDatabase();
      const {get: getLastID, data: lastID} = useDatabase();

      const {set: setArticle} = useDatabase();


      // For product editing
      const {section, sectionOptions, category, categoryOptions, categoryDbPath} = useProductCategory(props.articleType)
      watch(categoryDbPath, () => {
         if (!categoryDbPath.value) return
         dbPath = `catalog/${section.value}/${category.value}`
         getLastID(`${dbPath}/lastID`);
         getArticlesCount(`${entity}/count`);
      }, {immediate: true})
      if (section) {
         dbPath = `catalog/${section.value}/${category.value}`
      }

      const onUpdateImages = (files) => {
         data.images = files
      };


      const saveData = async () => {
         const images = getImagesDataForDatabase();
         const filesArray = Object.keys(data.images)
             .map((imageName) => data.images[imageName])
             .filter(file => file.type)
             .sort((a, b) => (a.isMain === true ? 1 : -1))

         const articleID = props.id ? +(props.id.slice(2)) : (lastID.value === undefined ? 1 : lastID.value + 1)
         const articleToSave = {...data, id: `id${articleID}`, images, time: Date.now()}

         let storagePath = `images/${dbPath}/id${articleID}`

         const promises = [
            // Save data to database
            setArticle(`${dbPath}/list/id${articleID}`, articleToSave),
         ]
         // If creating new record
         if (!props.id) {
            promises.push(setArticle(`${dbPath}/lastID`, articleID))
            promises.push(setArticle(`${dbPath}/count`, articlesCount.value ? articlesCount.value + 1 : 1))
         }
         // Save images to storage if it is necessary
         if (entity !== 'vacancy') {
            setImages(`${storagePath}/gallery`, filesArray)
         }
         await Promise.all(promises);

         close();
         emit("update:article");
      };

      const getImagesDataForDatabase = () => {
         return Object.keys(data.images)
             .map((imageName) => {
                const imgData = {...data.images[imageName]};
                imgData.name = imageName;
                imgData.size = data.images[imageName].size;
                imgData.src = data.images[imageName].src;
                delete imgData.src;
                return imgData;
             })
             .sort((a, b) => (a.isMain === true ? 1 : -1));
      };

      watch(props, () => {
             data.title = data.title || props.title;
             data.text = data.text || props.text;
             data.price = data.price || props.price || null;
             data.keywords = data.keywords || props.keywords || '';
             data.images = data.images || props.images;
          },
          {immediate: true}
      );

      const isButtonDisabled = computed(() => {
         const hasTitle = data.title
         const hasImages = Object.keys(data.images || {}).length
         if (!hasTitle || (!hasImages && entity !== 'vacancy')) return true
         return false
      })

      const clearForm = () => {
         data.title = "";
         data.text = "";
         data.price = "";
         data.images = null;
      };

      return {
         titleMap,
         entity,
         modal,
         open,
         close,

         data,
         onUpdateImages,
         saveData,

         section,
         sectionOptions,
         category,
         categoryOptions,

         isProductPage,
         isButtonDisabled,
      };
   },
};
</script>

<style lang="scss" scoped>
.form {
   padding: 0 20px;
   & > * {
      margin-bottom: 20px;
   }
}

.select-wrap {
    display: flex;
   & > * {
      margin-right: 40px;
   }
 }

.price {
   max-width: 150px;
}

.controls {
   justify-content: flex-end;
   padding: 20px;
}
</style>
