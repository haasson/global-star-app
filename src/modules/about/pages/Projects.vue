<template>
   <AppPage>
      <PageSection v-if="isAdmin">
         <AppButton @click="addProject" color="blue">Добавить проект</AppButton>
      </PageSection>

      <div v-if="projectsList">
         <ArticleItem
             v-for="project in projectsList"
             articleType="projects"
             :id="project.id"
             :title="project.title"
             :text="project.text"
             :image="getMainImage(project)"
             :time="project.time"
             :isHidden="project.isHidden"
             class="item"
         />
      </div>
   </AppPage>


   <!-- Modals -->
   <EditArticleModal ref="editModal" articleType="add-projects" @update:article="get('projects/list')"/>
</template>

<script>
import {computed, ref, watch} from 'vue'
import {isAdmin} from "../../../store";
import ArticleItem from "../../../components/ArticleItem.vue";
import AppButton from "../../../components/App/AppButton.vue";
import PageSection from "../../../components/Providers/PageSection.vue";
import EditArticleModal from "../modals/EditArticleModal.vue";
import useDatabase from "../../../composable/database";
import AppPage from "../../../components/App/AppPage.vue";

export default {
   name: "Projects",
   components: {AppPage, EditArticleModal, PageSection, AppButton, ArticleItem},

   setup() {
      const editModal = ref(null)
      const addProject = () => {
         editModal.value.open()
      }

      const {get, data: projectsList} = useDatabase()
      get('projects/list')

      const getMainImage = (project) => {
         const mainImage = project.images.find(image => image.isMain === true)
         const mainImageName = mainImage ? mainImage.name : project.images[0].name
         return `images/projects/${project.id}/gallery/${mainImageName}`
      }

      return {
         isAdmin,
         editModal,
         addProject,

         get,
         projectsList,
         getMainImage,
      }
   }
}
</script>

<style lang="scss" scoped>
.item:not(:last-child) {
   margin-bottom: 40px;
}
</style>
