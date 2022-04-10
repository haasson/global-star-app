<template>
   <AppPage :topOffset="false">
      <HeadImage :src="image"
                 pageName="Топливозаправщики"/>

      <TextBlock>
         <p>Решения на базе программных продуктов Wialon позволяют оптимизировать работу автомобильного парка вашей
            компании. Использование программных решений в сфере логистики, коммунальных услуг, сельского хозяйства,
            строительства позволяет сэкономить до 50% на содержание техники и окупить затраты на покупку системы менее
            чем за 6 месяцев.</p>
      </TextBlock>

      <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

      <AppList
          type="feature"
          :gap="width > 992 ? 25 : 10"
          :items="features"
          :itemsPerRow="itemsPerRowFeatures"
          multiline
          justify="flex-start"
      />

      <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

      <RecommendedProducts />

      <SoftSection :items="soft" titlePosition="left"/>
   </AppPage>
</template>

<script>

import useItemsPerRow from "../../../../composable/itemsPerRow.js";
import useLoading from "../../../../composable/loading.js";
import useWindowDimensions from "../../../../composable/windowDimensions.js";

import {imageWithPoints, features, soft} from "../../data/transport/refueller.js";
import image from "../../../../assets/images/solution/pages/transport/transport.jpg";

import AppPage from "../../../../components/App/AppPage.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import ImageWithMarkers from "../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../components/App/AppList.vue";
import RecommendedProducts from "../../../../components/Sections/RecommendedProducts.vue";
import SoftSection from "../../../../components/Sections/SoftSection.vue";
import AppAlert from "../../../../components/App/AppAlert.vue";


export default {
   name: "Refueller",
   components: {AppAlert, SoftSection, RecommendedProducts, AppList, ImageWithMarkers, TextBlock, HeadImage, AppPage},
   setup() {
      const {width} = useWindowDimensions()
      useLoading()
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({992: 3, 568: 2, default: 1})

      return {width, image, imageWithPoints, features, soft, itemsPerRowFeatures}
   }
}

</script>

<style scoped>

</style>
