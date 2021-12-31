<template>
   <PageSection v-if="isAdmin">
      <AppButton @click="addNews" color="blue">Добавить новость</AppButton>
   </PageSection>

   <div v-for="(news, i) in newsList">
      {{i}} - {{news}}
   </div>

   <div v-if="newsList">
      <ArticleItem
          v-for="news in newsList"
          articleType="news"
          :id="news.id"
          :title="news.title"
          :text="news.text"
          :image="getMainImage(news)"
          :time="news.time"
      />
   </div>


   <!-- Modals -->
   <EditArticleModal ref="editModal" articleType="add-news" @update:article="get('news/list')"/>
</template>

<script>
import {computed, ref, watch} from 'vue'
import {isAdmin} from "../../../store";
import ArticleItem from "../../../components/ArticleItem.vue";
import AppButton from "../../../components/App/AppButton.vue";
import PageSection from "../../../components/Providers/PageSection.vue";
import EditArticleModal from "../modals/EditArticleModal.vue";
import useDatabase from "../../../composable/database";
export default {
   name: "News",
   components: {EditArticleModal, PageSection, AppButton, ArticleItem},

   setup() {
      const editModal = ref(null)
      const addNews = () => {
         editModal.value.open()
      }

      const {get, data: newsList} = useDatabase()
      get('news/list')

       const getMainImage = (news) => {
         const mainImage = news.images.find(image => image.isMain === true)
         const mainImageName = mainImage ? mainImage.name : news.images[0].name
         return `images/news/${news.id}/gallery/${mainImageName}`
      }


      return {
         isAdmin,
         editModal,
         addNews,

         get,
         newsList,
         getMainImage,
      }
   }
}
</script>

<style lang="scss" scoped>

</style>
