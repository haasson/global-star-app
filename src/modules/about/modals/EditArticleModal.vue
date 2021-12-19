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

            <span v-for="img in data.images">
               {{img.isMain}}
            </span>
            <AppImageUpload class="upload-image" v-model="data.images"/>

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
   components: {AppIcon, AppImageUpload, AppInput, AppButton, AppButtonsGroup, AppEditor, AppModal},
   props: {
      articleType: {
         type: String,
         required: true
      },
      title: {
         type: String,
         default: ''
      },
      text: {
         type: String,
         default: ''
      },
      images: {
         type: Object,
         default: {}
      },
   },
   setup(props, {emit}) {
      const entity = props.articleType.indexOf('News') !== -1 ? 'news' : 'projects'
      const modal = ref(null)
      const open = () => {
         getNewsCount('news/count')
         modal.value.open()
      }
      const close = () => {
         clearForm()
         modal.value.decline()
      }


      const data = reactive({title: ''})
      const {set: setImages, loading: imagesUpload, error: uploadError} = useStorage()

      const {get: getNewsCount, data: newsCount} = useDatabase()
      const {set: setNews} = useDatabase()

      const saveData = async () => {
         const images = getImagesDataForDatabase()
         const filesArray = Object.keys(data.images).map(imageName => data.images[imageName]).sort((a,b) => a.isMain === true ? 1 : -1)

         const newsID = newsCount.value === undefined ? 0 : newsCount.value + 1
         const newsToSave = {...data, id: newsID, images, time: Date.now()}

         const storagePath = `images/${entity}/${newsID}`
         await Promise.all([
            // Save data to database
            setNews(`${entity}/count`, newsID),
            setNews(`${entity}/list/${newsID}`, newsToSave),
            // Save images to storage
            setImages(`${storagePath}/gallery`, filesArray)
         ])

         close()
         emit('update:article')
      }

      const getImagesDataForDatabase = () => {
         return Object.keys(data.images).map(imageName => {
            const imgData = {...data.images[imageName]}
            imgData.name = imageName
            imgData.size = data.images[imageName].size
            delete imgData.src
            return imgData
         }).sort((a,b) => a.isMain === true ? 1 : -1)
      }

      watch(props, () => {
         console.log('here', props)
         data.title = props.title
         data.text = props.text
         data.images = props.images
      }, {immediate: true})

      const clearForm = () => {
         console.log('here')
         data.title = ''
         data.text = ''
         data.images = {}
      }


      return {
         modal,
         open,
         close,

         data,
         saveData,
      }
   }
}
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
