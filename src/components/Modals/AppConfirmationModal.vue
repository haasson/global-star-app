<template>
   <AppModal ref="modal" :minWidth="600">
      <template #title>Подтвердите действие</template>
      <template #content>
         <div class="content">Вы действительно хотите удалить {{ deleteMap[type] }}?</div>
      </template>
      <template #controls="slotProps">
         <AppButtonsGroup class="controls">
            <AppButton @click="modal.decline" color="empty">Отмена</AppButton>
            <AppButton @click="modal.confirm" color="blue">OK</AppButton>
         </AppButtonsGroup>
      </template>
   </AppModal>
</template>

<script>
import AppModal from "./AppModal.vue";
import AppButtonsGroup from "../App/AppButtonsGroup.vue";
import AppButton from "../App/AppButton.vue";
import {ref} from "vue";

export default {
   name: "AppConfirmationModal",
   components: {AppButton, AppButtonsGroup, AppModal},
   props: {
      type: {
         type: String,
         default: ''
      }
   },

   setup() {
      // Modal
      const modal = ref(null);
      const open = async () => {
         return await modal.value.open();
      };

      const deleteMap = {
         'product': 'продукт',
         'news': 'новость',
         'projects': 'проект',
         'vacancy': 'вакансию',
      }

      return {modal, open, deleteMap}
   }
}
</script>

<style lang="scss" scoped>
.content {
   padding: 20px;
}
.controls {
   justify-content: center;
   padding: 10px;
}
</style>
