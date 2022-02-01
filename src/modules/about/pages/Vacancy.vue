<template>
   <AppPage>
      <PageSection v-if="isAdmin">
         <AppButton @click="addVacancy" color="blue">Добавить вакансию</AppButton>
      </PageSection>

      <div v-if="vacancyList">
         <VacancyItem
             v-for="vacancy in vacancyList"
             :key="vacancy.id"
             articleType="vacancy"
             :id="vacancy.id"
             :title="vacancy.title"
             :text="vacancy.text"
             :isHidden="vacancy.isHidden"
             class="item"
             @editButtonClicked="showEditModal"
             @hideButtonClicked="hideVacancy"
         />
      </div>
   </AppPage>


   <!-- Modals -->
   <EditArticleModal
       ref="addModal"
       articleType="add-vacancy"
       @update:article="updateVacancy"
   />

   <EditArticleModal
       ref="editModal"
       articleType="edit-vacancy"
       :id="currentVacancy.id"
       :title="currentVacancy.title"
       :text="currentVacancy.text"
       @update:article="updateVacancy"
   />
</template>

<script>
import {isAdmin} from "../../../store";
import AppPage from "../../../components/App/AppPage.vue";
import PageSection from "../../../components/Providers/PageSection.vue";
import AppButton from "../../../components/App/AppButton.vue";
import VacancyItem from "../VacancyItem.vue";
import EditArticleModal from "../modals/EditArticleModal.vue";
import {ref, watch} from "vue";
import useDatabase from "../../../composable/database.js";

export default {
   name: "Vacancy",
   components: {EditArticleModal, VacancyItem, AppButton, PageSection, AppPage},

   setup() {
      const addModal = ref(null)
      const addVacancy = () => {
         addModal.value.open()
      }

      const {get, put, data: vacancyList} = useDatabase()
      console.log(vacancyList)
      get('vacancy/list')


      const currentVacancy = ref({})
      const editModal = ref(null)
      const showEditModal = (id) => {
         currentVacancy.value = vacancyList.value[id]
         editModal.value.open()
      }

      watch(vacancyList, () => {
         console.log(vacancyList.value)
      })


      const hideVacancy = (id) => {
         const visibleProp = `vacancy/list/${id}/isHidden`
         console.log(visibleProp)
         vacancyList.value[id].isHidden = !vacancyList.value[id].isHidden
         put({[visibleProp]: vacancyList.value[id].isHidden})
         // updateVacancy()
      }

      const updateVacancy = () => {
         console.log('update')
         get('vacancy/list')
      }


      return {
         isAdmin,

         addModal,
         addVacancy,

         editModal,
         showEditModal,

         vacancyList,

         currentVacancy,
         hideVacancy,
         updateVacancy,

      }
   }
}
</script>

<style scoped>

</style>
