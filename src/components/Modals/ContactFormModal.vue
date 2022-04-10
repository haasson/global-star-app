<template>
   <AppModal ref="modal" bg="blue">
      <template #content>
         <div class="content">
            <ContactForm @changeStatus="onChangeStatus"/>
         </div>
      </template>

      <template #controls="slotProps" v-if="['done', 'error'].includes(status)">
         <AppButtonsGroup class="controls">
            <AppButton @click="slotProps.confirm()" color="orange">ОК</AppButton>
         </AppButtonsGroup>
      </template>
   </AppModal>
</template>

<script>
import {ref} from "vue";

import AppModal from "./AppModal.vue";
import ContactForm from "../App/ContactForm.vue";
import AppButtonsGroup from "../App/AppButtonsGroup.vue";
import AppButton from "../App/AppButton.vue";


export default {
   name: "ContactFormModal",
   components: {AppButton, AppButtonsGroup, ContactForm, AppModal},
   setup() {
      const modal = ref(null)
      const open = async () => modal.value.open()

      const status = ref('new')
      const onChangeStatus = (newStatus) => status.value = newStatus

      return {
         open,
         modal,

         status,
         onChangeStatus,
      }
   }
}
</script>


<style lang="scss" scoped>
.content {
   padding: 15px 85px;
   @media(max-width: 768px) {
      padding: 10px 25px;
   }
   @media(max-width: 480px) {
      padding: 10px 0;
   }
}
.controls {
   display: flex;
   justify-content: center;
   padding: 25px 0;
}
</style>
