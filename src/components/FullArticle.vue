<template>
   <PageSection v-if="isAdmin">
      <AppButtonsGroup>
         <AppButton @click="editArticle" color="blue">Редактировать</AppButton>
         <AppButton @click="removeArticle" color="blue">Удалить</AppButton>
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
       articleType="editNews"
       :title="article.title"
       :text="article.text"
       :images="article.images"
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
      const {get: getArticle, data: article} = useDatabase()
      const {get: getGallery, data: gallery, error} = useStorage()

      getArticle(`${props.articleType}/list/${route.params.id}`)

      watch(article, () => {
         const paths = article.value.images.map(image => {
            return `images/${props.articleType}/${route.params.id}/gallery/${image.name}`
         })
         getGallery(paths)
         description.value = descriptionToHTML(article.value.text)

         // Make object from array of images
         const images = {}
         article.value.images.forEach(img => images[img.name] = img)
         article.value.images = images
      })


      watch(gallery, () => {
         console.log(gallery.value)
      })

      const editModal = ref(null)

      const editArticle = () => {
         editModal.value.open()

      }

      const removeArticle = () => {

      }



      return {
         isAdmin,
         article,
         description,
         gallery,

         editModal,

         editArticle,
         removeArticle,
      }
   }
}
</script>

<style lang="scss" scoped>
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
   font-size: var(--subtitle-size);
}
</style>
