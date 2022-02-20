<template>
   <AppPage :topOffset="false">
      <HeadImage :src="image"
                 pageName="Мониторинг спехтехники"/>

      <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

      <AppTitle position="left">Особенности системы</AppTitle>
      <AppList
          type="feature"
          :gap="width > 992 ? 25 : 10"
          :items="features"
          :itemsPerRow="itemsPerRowFeatures"
          multiline
          justify="flex-start"
      />

      <SoftSection :items="soft" titlePosition="left" />

      <AppAlert>Цена комплекта от 18900 рублей</AppAlert>

   </AppPage>
</template>

<script>
import useItemsPerRow from "../../../../composable/itemsPerRow.js";
import useLoading from "../../../../composable/loading.js";
import useWindowDimensions from "../../../../composable/windowDimensions.js";

import {imageWithPoints, features, soft} from "../../data/building/monitoring.js";
import image from "../../../../assets/images/solution/pages/3d-system/head-image.jpg";

import AppPage from "../../../../components/App/AppPage.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import ImageWithMarkers from "../../../../components/Sections/ImageWithMarkers.vue";
import AppTitle from "../../../../components/App/AppTitle.vue";
import AppList from "../../../../components/App/AppList.vue";
import SoftSection from "../../../../components/Sections/SoftSection.vue";
import AppAlert from "../../../../components/App/AppAlert.vue";


export default {
   name: "Monitoring",
   components: {AppAlert, SoftSection, AppList, AppTitle, ImageWithMarkers, HeadImage, AppPage},

   setup() {
      const {width} = useWindowDimensions()
      useLoading()
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({568: 2, default: 1})

      return {width, image, imageWithPoints, features, itemsPerRowFeatures, soft}
   }
}
</script>

<style scoped>

</style>
