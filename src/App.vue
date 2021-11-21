<template>
   <div id="modals" />
   <AppHeader />

   <AppPage />

   <AppFooter />

</template>

<script>
import {ref} from 'vue'

import AppHeader from "./components/App/AppHeader.vue";
import AppFooter from "./components/App/AppFooter.vue";
import AppPage from "./components/App/AppPage.vue";

export default {
   components: {AppPage, AppFooter, AppHeader},

   setup() {
      const modal = ref(null)
      const openModal = async () => {
         return await modal.value.open()
      }

      return {openModal, modal}
   }
}
</script>

<style lang="scss">
#app {
   display: flex;
   flex-direction: column;
   min-height: 100vh;
}

</style>


