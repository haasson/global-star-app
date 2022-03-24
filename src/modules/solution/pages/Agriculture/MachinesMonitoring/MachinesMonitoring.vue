<template>
   <AppPage :topOffset="false">
      <HeadImage
          :src="image"
          class="image"
          pageName="Мониторинг с/х техники"
      />

      <AppTabs :tabs="tabs"/>

      <RouterView/>
   </AppPage>
</template>

<script>
import image from "../../../../../assets/images/solution/pages/machines-monitoring/head-image.jpg";

import AppPage from "../../../../../components/App/AppPage.vue";
import HeadImage from "../../../../../components/Sections/HeadImage.vue";
import AppTabs from "../../../../../components/App/AppTabs.vue";
import {useRouter} from "vue-router";

const basePath = '/solution/agriculture/machines-monitoring'
const tabs = [
   {name: 'Комбайн', path: `${basePath}/combine`},
   {name: 'Трактор', path: `${basePath}/tractor`},
   {name: 'Топливозаправщик', path: `${basePath}/refueller`},
   {name: 'Грузовик', path: `${basePath}/truck`},
   {name: 'Самоходный опрыскиватель', path: `${basePath}/sprayer`},
]
export default {
   name: "MachinesMonitoring",
   components: {AppTabs, HeadImage, AppPage},
   setup() {
      const router = useRouter()
      if (router.currentRoute.value.fullPath === basePath) {
         router.replace(`${basePath}/combine`)
      }
      return {image, tabs}
   }
}
</script>

<style lang="scss" scoped>

.image {
   margin-bottom: 0 !important;
}
</style>
