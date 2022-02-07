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
             @deleteButtonClicked="deleteVacancy"
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

   <AppConfirmationModal ref="confirmModal" type="vacancy" />
</template>

<script>
import {ref, watch} from "vue";
import {useRouter} from "vue-router";
import useDatabase from "../../../composable/database.js";
import {isAdmin} from "../../../store";

import AppPage from "../../../components/App/AppPage.vue";
import PageSection from "../../../components/Providers/PageSection.vue";
import AppButton from "../../../components/App/AppButton.vue";
import VacancyItem from "../VacancyItem.vue";
import EditArticleModal from "../modals/EditArticleModal.vue";
import AppConfirmationModal from "../../../components/App/AppConfirmationModal.vue";


export default {
   name: "Vacancy",
   components: {AppConfirmationModal, EditArticleModal, VacancyItem, AppButton, PageSection, AppPage},

   setup() {
      const router = useRouter()

      const addModal = ref(null)
      const addVacancy = () => {
         addModal.value.open()
      }

      const {get, put, del, data: vacancyList} = useDatabase()
      const {put: setCount, get: getCount} = useDatabase()
      get('vacancy/list')


      const currentVacancy = ref({})
      const editModal = ref(null)
      const showEditModal = (id) => {
         currentVacancy.value = vacancyList.value[id]
         editModal.value.open()
      }

      const hideVacancy = (id) => {
         const visibleProp = `vacancy/list/${id}/isHidden`
         vacancyList.value[id].isHidden = !vacancyList.value[id].isHidden
         put({[visibleProp]: vacancyList.value[id].isHidden})
         // updateVacancy()
      }

      const confirmModal = ref(null)
      const deleteVacancy= async (id) => {
         const res = await confirmModal.value.open()

         if (res) {
            const countUrl = `vacancy/count`
            const count = await getCount(countUrl)

            await del(`vacancy/list/${id}`)
            await setCount({[countUrl]: count - 1})

            delete vacancyList.value[id]
         }
      }

      const updateVacancy = () => {
         get('vacancy/list')
      }


      return {
         isAdmin,

         addModal,
         addVacancy,

         editModal,
         showEditModal,

         vacancyList,

         confirmModal,

         currentVacancy,
         hideVacancy,
         deleteVacancy,

         updateVacancy,

      }
   }
}
</script>

<style scoped>

</style>
