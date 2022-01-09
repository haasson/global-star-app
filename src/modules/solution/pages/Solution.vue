<template>
   <AppPage>
      <Agriculture />
      <Transport />
      <Building />
   </AppPage>
</template>

<script>
import AppList from "../../../components/App/AppList.vue";
import {agricultureContent, transportContent, buildingContent} from '../composable/solution'
import Agriculture from "./Agriculture.vue";
import Transport from "./Transport.vue";
import Building from "./Building.vue";
import AppPage from "../../../components/App/AppPage.vue";
export default {
   name: "Solution",
   components: {AppPage, Building, Transport, Agriculture, AppList},
   setup() {

      return {agricultureContent, transportContent, buildingContent}
   }
}
</script>

<style lang="scss" scoped>

</style>
