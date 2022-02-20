<template>
   <AppPage :topOffset="false">
   <HeadImage
       :src="image"
       class="image"
       pageName="Управление расходом и внесением"
   />

      <AppTabs :tabs="tabs"/>

      <RouterView/>
   </AppPage>
</template>

<script>
import {useRouter} from "vue-router";
import image from "../../../../../assets/images/solution/pages/flow-management/head-image.jpg";

import PageSection from "../../../../../components/Providers/PageSection.vue";
import MenuItem from "../../../../../components/App/MenuItem.vue";
import AppTabs from "../../../../../components/App/AppTabs.vue";
import HeadImage from "../../../../../components/Sections/HeadImage.vue";
import AppPage from "../../../../../components/App/AppPage.vue";

const basePath = '/solution/agriculture/flow-management'
const tabs = [
   {name: 'Внесение сухих материалов', path: `${basePath}/dry`},
   {name: 'Внесение жидких материалов', path: `${basePath}/wet`},
]
export default {
   name: "FlowManagement",
   components: {AppPage, HeadImage, AppTabs, MenuItem, PageSection},

   setup() {
      const router = useRouter()
      if (router.currentRoute.value.fullPath === basePath) {
         router.replace(`${basePath}/dry`)
      }
      return {tabs, image}
   }
}
</script>

<style lang="scss" scoped>

.image {
   margin-bottom: 0;
}
</style>
