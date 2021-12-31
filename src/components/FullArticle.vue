<template>
   <PageSection v-if="isAdmin">
      <AppButtonsGroup v-if="article">
         <AppButton @click="editArticle" color="blue">Редактировать</AppButton>
         <AppButton @click="hideArticle" color="blue">{{article.isHidden ? 'Показать' : 'Скрыть'}}</AppButton>
         <div v-if="article.isHidden" class="hidden-warning">Новость скрыта от пользователей</div>
      </AppButtonsGroup>
   </PageSection>

   <PageSection>
      <div v-if="article" class="inner">
         <h3>{{article.title}}</h3>
         <p class="date">{{article.date}}</p>
         <div class="text" v-html="description"></div>

         <AppGallery v-if="gallery" :slides="gallery" :fromStorage="true" />
      </div>
   </PageSection>

   <!-- Modals -->
   <EditArticleModal
       v-if="article"
       ref="editModal"
       :articleType="`edit-${articleType}`"
       :id="article.id"
       :title="article.title"
       :text="article.text"
       :images="article.images"
       @update:article="updateArticle"
   />

</template>

<script>
import {computed, watch, ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue'
import {isAdmin} from "../store";

import useDatabase from "../composable/database";
import {useRoute} from "vue-router";
import useStorage from "../composable/storage";
import {descriptionToHTML} from "../helpers/interface";

import PageSection from "./Providers/PageSection.vue";
import AppGallery from "./App/AppGallery.vue";
import AppButton from "./App/AppButton.vue";
import AppButtonsGroup from "./App/AppButtonsGroup.vue";
import EditArticleModal from "../modules/about/modals/EditArticleModal.vue";

export default {
   name: "FullArticle",
   components: {EditArticleModal, AppButtonsGroup, AppButton, AppGallery, PageSection, Swiper, SwiperSlide},
   props: {
      articleType: {
         type: String,
         required: true
      }
   },

   setup(props) {
      const description = ref()
      const route = useRoute()
      const articleLink = `${props.articleType}/list/${route.params.id}`

      const {get: getArticle, put: putArticle, data: article} = useDatabase()
      const {get: getImage, data: image, error} = useStorage()


      getArticle(articleLink)

      watch(article, () => {
         if (!article.value) return
         // Get all images
         const paths = article.value.images.map(image => {
            return `images/${props.articleType}/${route.params.id}/gallery/${image.name}`
         })
         paths.forEach(path => getImage(path))

         description.value = descriptionToHTML(article.value.text)

         // Make object from array of images
         const images = {}
         article.value.images.forEach(img => images[img.name] = img)
         article.value.images = images
      })


      const gallery = ref()
      watch(image, () => {
         if (!image.value) return

         const {fileName, src} = image.value
         article.value.images[fileName].src = src
         article.value.images = {...article.value.images}

         gallery.value = Object.values(article.value.images)
             .map(image => image.src)
             .sort((a, b) => (a.isMain === true ? 1 : -1))
      })

      const editModal = ref(null)

      const editArticle = () =>  editModal.value.open()
      const hideArticle = async () => {
         const visibleProp = [articleLink] + '/isHidden'
         await putArticle({[visibleProp] : !article.value.isHidden})
         updateArticle()
      }

      const updateArticle = () => getArticle(articleLink)



      return {
         isAdmin,
         article,
         description,
         gallery,

         editModal,

         editArticle,
         hideArticle,

         updateArticle,
      }
   }
}
</script>

<style lang="scss" scoped>
.hidden-warning {
   font-size: var(--subtitle-size);
}

h3 {
   font-size: var(--title-size);
   font-weight: 500;
   margin-bottom: 5px;
}

.date {
   margin-bottom: 10px;
   font-size: var(--subtitle-size);
   color: var(--dark-orange)
}

.text {
   margin-bottom: 30px;
   font-size: var(--subtitle-size);
}
</style>
