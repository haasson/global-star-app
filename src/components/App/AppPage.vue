<template>
   <div class="app-page" :class="{'no-offset': noOffset}">
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
   &:not(.no-offset) {
      padding-top: 70px;
   }
}

.app-page > *:not(:last-child) {
   margin-bottom: 70px;
}
</style>
