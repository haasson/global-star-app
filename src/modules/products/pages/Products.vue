<template>
   <PageSection v-if="isAdmin" class="add-button">
      <AppButton @click="addProduct" color="blue">Добавить продукт</AppButton>
   </PageSection>
   <Agriculture class="products-block"/>
   <Transport/>

   <!-- Modals -->
   <EditArticleModal
       ref="editModal"
       articleType="add-product"
       @update:products=""
   />

</template>

<script>
import {ref} from "vue";
import {isAdmin} from "../../../store";
import Agriculture from "./Agriculture.vue";
import Transport from "./Transport.vue";
import PageSection from "../../../components/Providers/PageSection.vue";
import AppButton from "../../../components/App/AppButton.vue";
import EditArticleModal from "../../about/modals/EditArticleModal.vue";


export default {
   name: "Products",
   components: {EditArticleModal, AppButton, PageSection, Transport, Agriculture},
   setup() {
      const editModal = ref(null)
      const addProduct = () => {
         editModal.value.open()
      }

      return {
         isAdmin,
         editModal,
         addProduct,
      }
   }
}
</script>

<style lang="scss" scoped>
.add-button {
   margin-top: 70px;
}
.products-block {
   padding-bottom: 0;
}

</style>
