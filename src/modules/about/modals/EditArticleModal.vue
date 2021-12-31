<template>
   <AppModal ref="modal" :minWidth="1000">
      <template #title>{{ articleType }}</template>
      <template #content>
         <form class="form">
            <AppInput class="title" label="Заголовок" v-model="data.title"/>

            <div class="editor-block">
               <label>Описание</label>
               <AppEditor v-model="data.text"/>
            </div>
            <!--            <span v-for="img in data.images">-->
            <!--          {{ img }}-->
            <!--        </span>-->
            <AppImageUpload
                class="upload-image"
                :images="data.images"
                @update:images="onUpdateImages"
            />
         </form>
      </template>
      <template #controls>
         <AppButtonsGroup class="controls">
            <AppButton @click="close" color="empty">Отмена</AppButton>
            <AppButton @click="saveData" color="blue">Сохранить</AppButton>
         </AppButtonsGroup>
      </template>
   </AppModal>
</template>

<script>
import {reactive, ref, watch} from "vue";
import AppModal from "../../../components/App/AppModal.vue";
import AppEditor from "../../../components/App/AppEditor.vue";
import AppButtonsGroup from "../../../components/App/AppButtonsGroup.vue";
import AppButton from "../../../components/App/AppButton.vue";
import AppInput from "../../../components/App/AppInput.vue";
import AppImageUpload from "../../../components/App/AppImageUpload.vue";
import AppIcon from "../../../components/App/AppIcon.vue";
import useStorage from "../../../composable/storage";
import useDatabase from "../../../composable/database";

export default {
   name: "EditArticleModal",
   components: {
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
         type: String,
         default: "",
      },
      images: {
         type: Object,
         default: () => ({}),
      },
   },
   setup(props, {emit}) {
      const entity = props.articleType.indexOf("news") !== -1 ? "news" : "projects";
      const modal = ref(null);
      const open = () => {
         getArticlesCount(`${entity}/count`);
         modal.value.open();
      };
      const close = () => {
         clearForm();
         modal.value.decline();
      };

      const data = reactive({title: ""});
      const {set: setImages, loading: imagesUpload, error: uploadError} = useStorage();

      const {get: getArticlesCount, data: articlesCount} = useDatabase();
      const {set: setArticle} = useDatabase();

      const onUpdateImages = (files) => {
         data.images = files
      };

      const saveData = async () => {
         const images = getImagesDataForDatabase();
         const filesArray = Object.keys(data.images)
             .map((imageName) => data.images[imageName])
             .filter(file => file.type)
             .sort((a, b) => (a.isMain === true ? 1 : -1))

         const articleID = props.id || articlesCount.value === undefined ? 1 : articlesCount.value + 1
         const articleToSave = {...data, id: `id${articleID}`, images, time: Date.now()}

         const storagePath = `images/${entity}/id${articleID}`

         await Promise.all([
            // Save data to database
            setArticle(`${entity}/count`, articleID),
            setArticle(`${entity}/list/id${articleID}`, articleToSave),
            // Save images to storage
            setImages(`${storagePath}/gallery`, filesArray),
         ]);

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
             data.title = props.title;
             data.text = props.text;
             data.images = props.images;
          },
          {immediate: true}
      );

      const clearForm = () => {
         data.title = "";
         data.text = "";
         data.images = {};
      };

      return {
         modal,
         open,
         close,

         data,
         onUpdateImages,
         saveData,
      };
   },
};
</script>

<style lang="scss" scoped>
.form {
   padding: 0 20px;
}

.title,
.editor-block,
.upload-image {
   margin-bottom: 20px;
}

.controls {
   justify-content: flex-end;
   padding: 20px;
}
</style>
