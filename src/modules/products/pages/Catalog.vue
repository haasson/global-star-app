<template>
   <AppPage>
      <RouterView />
   </AppPage>
</template>

<script>

import AppPage from "../../../components/App/AppPage.vue";
import {useRoute} from "vue-router";
export default {
   name: "Catalog",
   components: {AppPage},

   setup() {
      console.log('in catalog')
      const route = useRoute()
      console.log(route)
   }
}
</script>

<style scoped>

</style>
c
