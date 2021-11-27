<template>
   <main>
      <div class="bg"></div>

      <AppSection
          v-for="(section, index) in pageContent"
          :section="section"
          :index="index"
      />

   </main>

   <AppModal ref="modal" :minWidth="900">
      <template #title>Редактирование</template>
      <template #content>
         <AppEditor @update:modelValue="saveData" class="fixed-editor" v-if="isAdmin" />
      </template>
   </AppModal>
</template>

<script>
import {defineComponent, defineAsyncComponent, watch, ref} from 'vue'
import {pageContent} from '../../store'



import AppEditor from "./AppEditor.vue";
import AppModal from "./AppModal.vue";
import AppSection from "./AppSection.vue";
import {useRouter} from "vue-router";

export default defineComponent({
   name: "AppPage",
   components: {AppSection, AppEditor, AppModal},

   setup(props) {
      const router = useRouter()
      watch(pageContent, () => {
         pageContent.value.forEach(component => component.is = defineAsyncComponent(() => import(`../${component.name}.vue`)))
      }, {immediate: true})


      const modal = ref(null)
      const openModal = async () => {
         return await modal.value.open()
      }

      const saveData = (data) => {
         console.log(data)
      }


      return {
         pageContent,

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
