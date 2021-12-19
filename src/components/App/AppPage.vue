<template>
   <AppLoader v-if="globalLoading"/>
   <slot />

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

   setup(props) {
      const modal = ref(null)
      const openModal = async () => {
         return await modal.value.open()
      }

      const saveData = (data) => {
         console.log(data)
      }


      return {
         globalLoading,

         openModal,
         modal,
         saveData,
      }
   }
})
</script>

<style lang="scss" scoped>
main {
   position: relative;
   flex-grow: 1;
}
.bg {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: -1;
   height: 100vh;
   background: linear-gradient(315deg, #ececec 0%, #ececec 400px, #ffffff 400px, #fff calc(100% - 400px), #ececec calc(100% - 400px), #ececec 100%);

}
section {
   margin-top: 60px;
}
</style>
