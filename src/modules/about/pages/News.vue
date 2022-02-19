<template>
   <AppPage>
      <PageSection v-if="isAdmin">
         <AppButton @click="addNews" color="blue">Добавить новость</AppButton>
      </PageSection>

      <div v-if="filteredList">
         <ArticleItem
             v-for="news in filteredList"
             articleType="news"
             :id="news.id"
             :title="news.title"
             :text="news.text"
             :image="getMainImage(news)"
             :time="news.time"
             :isHidden="news.isHidden"
             class="item"
         />

         <AppPagination
             :totalItems="Object.keys(newsList).length"
             @update:pagination="updatePage"
         />
      </div>

   </AppPage>


   <!-- Modals -->
   <EditArticleModal ref="editModal" articleType="add-news" @update:article="get('news/list')"/>
</template>

<script>
import {ref} from 'vue'
import {isAdmin} from "../../../store";

import useDatabase from "../../../composable/database";
import usePagination from "../../../composable/pagination.js";

import ArticleItem from "../components/ArticleItem.vue";
import AppButton from "../../../components/App/AppButton.vue";
import PageSection from "../../../components/Providers/PageSection.vue";
import AppPage from "../../../components/App/AppPage.vue";
import AppPagination from "../../../components/App/AppPagination.vue";
import EditArticleModal from "../modals/EditArticleModal.vue";


export default {
   name: "News",
   components: {AppPagination, AppPage, EditArticleModal, PageSection, AppButton, ArticleItem},

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


      const {updatePage, filteredList} = usePagination(newsList)


      return {
         isAdmin,
         editModal,
         addNews,

         get,
         newsList,
         getMainImage,

         updatePage,
         filteredList,
      }
   }
}
</script>

<style lang="scss" scoped>
.item:not(:last-child) {
   margin-bottom: 40px;
}
</style>
