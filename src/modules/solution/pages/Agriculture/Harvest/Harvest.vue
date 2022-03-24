<template>
   <AppPage :topOffset="false">
      <HeadImage
          :src="image"
          class="image"
          pageName="Уборка урожая"
      />

      <AppTabs :tabs="tabs"/>

      <RouterView/>
   </AppPage>
</template>

<script>
import image from "../../../../../assets/images/solution/pages/harvest/head-image.jpg";
import AppPage from "../../../../../components/App/AppPage.vue";
import HeadImage from "../../../../../components/Sections/HeadImage.vue";
import AppTabs from "../../../../../components/App/AppTabs.vue";
import {useRouter} from "vue-router";

const basePath = '/solution/agriculture/harvest'
const tabs = [
   {name: 'AgLeader', path: `${basePath}/agleader`},
   {name: 'Dinamica Generale', path: `${basePath}/dinamica`},
   {name: 'Бункеры перегрузчики', path: `${basePath}/bunkers`},
]
export default {
name: "Harvest",
   components: {AppTabs, HeadImage, AppPage},
   setup() {
      const router = useRouter()
      if (router.currentRoute.value.fullPath === basePath) {
         router.replace(`${basePath}/agleader`)
      }

      return {image, tabs}
   }
}
</script>

<style lang="scss" scoped>
.page > * {
   margin-bottom: 70px;
}
.image {
   margin-bottom: 0 !important;
}
</style>
