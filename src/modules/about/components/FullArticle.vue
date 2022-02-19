<template>
   <AppPage>
      <PageSection v-if="isAdmin">
         <AppButtonsGroup v-if="article">
            <AppButton @click="editArticle" color="blue">Редактировать</AppButton>
            <AppButton @click="hideArticle" color="blue">{{ article.isHidden ? 'Показать' : 'Скрыть' }}</AppButton>
            <AppButton @click="deleteArticle" color="blue">Удалить</AppButton>
            <div v-if="article.isHidden" class="hidden-warning">Новость скрыта от пользователей</div>
         </AppButtonsGroup>
      </PageSection>

      <PageSection>
         <div v-if="article" class="inner">
            <h3>{{ article.title }}</h3>
            <p v-if="articleType === 'news'" class="date">{{ formattedDate }}</p>
            <div class="text" v-html="description"></div>

            <AppGallery v-if="gallery" class="gallery" :slides="gallery" :fromStorage="true"/>
         </div>
      </PageSection>
   </AppPage>

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

   <AppConfirmationModal ref="confirmModal" :type="articleType" />

</template>

<script>
import {computed, watch, ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue'
import {isAdmin} from "../../../store";

import useDatabase from "../../../composable/database.js";
import {useRoute, useRouter} from "vue-router";
import useStorage from "../../../composable/storage.js";
import {descriptionToHTML} from "../../../helpers/interface.js";

import PageSection from "../../../components/Providers/PageSection.vue";
import AppGallery from "../../../components/App/AppGallery.vue";
import AppButton from "../../../components/App/AppButton.vue";
import AppButtonsGroup from "../../../components/App/AppButtonsGroup.vue";
import EditArticleModal from "../modals/EditArticleModal.vue";
import AppPage from "../../../components/App/AppPage.vue";
import AppConfirmationModal from "../../../components/Modals/AppConfirmationModal.vue";
import router from "../../../router";
import dayjs from "dayjs";

export default {
   name: "FullArticle",
   components: {
      AppConfirmationModal,
      AppPage, EditArticleModal, AppButtonsGroup, AppButton, AppGallery, PageSection, Swiper, SwiperSlide},
   props: {
      articleType: {
         type: String,
         required: true
      }
   },

   setup(props) {
      const description = ref()
      const router = useRouter()
      const route = useRoute()
      const articleLink = `${props.articleType}/list/${route.params.id}`

      const {get: getArticle, put: putArticle, del: delArticle, data: article} = useDatabase()
      const {put: setCount, get: getCount} = useDatabase()
      const {get: getImage, data: image} = useStorage()


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
      const confirmModal = ref(null)

      const editArticle = () => editModal.value.open()
      const hideArticle = async () => {
         const visibleProp = [articleLink] + '/isHidden'
         await putArticle({[visibleProp]: !article.value.isHidden})
         updateArticle()
      }
      const deleteArticle = async () => {
         const res = await confirmModal.value.open()

         if (res) {
            const countUrl = `${props.articleType}/count`
            const count = await getCount(countUrl)

            await setCount({[countUrl]: count - 1})
            await delArticle(articleLink)

            router.replace(`/about/${props.articleType}`)
         }
      }

      const updateArticle = () => getArticle(articleLink)

      const formattedDate = computed(() => {
         return dayjs(props.time).format('DD.MM.YYYY')
      })


      return {
         isAdmin,
         article,
         description,
         gallery,

         editModal,
         confirmModal,

         editArticle,
         hideArticle,
         deleteArticle,

         updateArticle,

         formattedDate
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

@media (max-width: 568px) {
   .inner{
      display: flex;
      flex-direction: column;
      h3 {
         text-align: center;
         margin-bottom: 24px;
         order: -2;
      }
   }
   .gallery{
      order: -1;
      margin-bottom: 12px;
   }
}
</style>
