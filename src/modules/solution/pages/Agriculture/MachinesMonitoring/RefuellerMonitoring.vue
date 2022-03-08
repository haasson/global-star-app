<template>
   <TextBlock>
      <p>Мониторинг работы сельскохозяйственной техники на базе Wialon (Hecterra) – это эффективный способ анализа
         работы и принятия административных решений. </p>
   </TextBlock>

   <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

   <AppList
       type="feature"
       :gap="width > 992 ? 30 : 10"
       :items="features"
       :itemsPerRow="itemsPerRow"
       justify="flex-start"
       multiline
   />

   <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

   <RecommendedProducts />

   <SoftSection :items="soft" titlePosition="left" />
</template>

<script>
import useLoading from "../../../../../composable/loading.js";
import useWindowDimensions from "../../../../../composable/windowDimensions.js";
import useItemsPerRow from "../../../../../composable/itemsPerRow.js";
import {features, imageWithPoints, soft} from "../../../data/agriculture/machines-monitoring/refueller-monitoring.js";

import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import AppList from "../../../../../components/App/AppList.vue";
import AppAlert from "../../../../../components/App/AppAlert.vue";
import RecommendedProducts from "../../../../../components/Sections/RecommendedProducts.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";


export default {
   name: "RefuellerMonitoring",
   components: {SoftSection, RecommendedProducts, AppAlert, AppList, TextBlock, ImageWithMarkers},
   setup() {
      useLoading()
      const {width} = useWindowDimensions()
      const {itemsPerRow} = useItemsPerRow({992: 3, 568: 2, default: 1})

      return {width, imageWithPoints, features, soft, itemsPerRow}
   }
}
</script>

<style scoped>

</style>
