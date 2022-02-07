<template>
   <div class="app-page" :class="{'no-offset': noOffset}">
      <AppLoader v-if="globalLoading"/>
      <div class="app-bg"></div>
      <slot />
   </div>

<!--   <AppModal ref="modal" :minWidth="900">-->
<!--      <template #title>Редактирование</template>-->
<!--      <template #content>-->
<!--         <AppEditor @update:modelValue="saveData" class="fixed-editor" v-if="isAdmin" />-->
<!--      </template>-->
<!--   </AppModal>-->
</template>

<script>
import {defineComponent, defineAsyncComponent, watch, ref} from 'vue'
import {globalLoading} from '../../store'


import AppEditor from "./AppEditor.vue";
import AppModal from "./AppModal.vue";
import AppSection from "./AppSection.vue";
import AppLoader from "./AppLoader.vue";

export default defineComponent({
   name: "AppPage",
   components: {AppLoader, AppSection, AppEditor, AppModal},
   props: {
      noOffset: {
         type: Boolean,
         default: false
      }
   },

   setup(props) {
      const modal = ref(null)
      const openModal = async () => {
         return await modal.value.open()
      }

      return {
         globalLoading,

         openModal,
         modal,
      }
   }
})
</script>

<style lang="scss">
.app-bg {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: -1;
   height: 100vh;
   background: linear-gradient(315deg, #ececec 0%, #ececec 550px, #ffffff 550px, #fff calc(100% - 520px), #ececec calc(100% - 520px), #ececec 100%);
}
.app-page {
   padding-bottom: 100px;
   @media(max-width: 992px) {
      padding-bottom: 70px;
   }
   @media(max-width: 768px) {
      padding-bottom: 60px;
   }
   @media(max-width: 568px) {
      padding-bottom: 40px;
   }
   @media(max-width: 480px) {
      padding-bottom: 24px;
   }
   &:not(.no-offset) {
      padding-top: 70px;
      @media(max-width: 992px) {
         padding-top: 50px;
      }
      @media(max-width: 768px) {
         padding-top: 40px;
      }
      @media(max-width: 568px) {
         padding-top: 30px;
      }
      @media(max-width: 480px) {
         padding-top: 24px;
      }
   }
}

.app-page > *:not(:last-child) {
   margin-bottom: 70px;
   @media(max-width: 992px) {
      margin-bottom: 50px;
   }
   @media(max-width: 768px) {
      margin-bottom: 35px;
   }
   @media(max-width: 420px) {
      margin-bottom: 25px;
   }
}
</style>
