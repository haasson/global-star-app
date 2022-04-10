<template>
   <AppPage :topOffset="false" class="electric-autopilot-page">
      <HeadImage
          :src="image"
          class="image"
          pageName="Электрический автопилот"
      />

      <TextBlock>
         <p>Комплект автопилота FJDynamics поддерживает различные типы машин, включая тракторы, опрыскиватели и комбайны. Система способна работать в любую погоду, с водо- и пыленепроницаемостью ≥ IP65. Точность системы составляет до ± 2,5 см. Точность остается неизменной даже при высокой скорости.</p>
      </TextBlock>

      <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

      <AppList
          type="simple"
          :gap="itemsPerRowSystem < systemItems.length ? 0 : 15"
          :items="systemItems"
          :itemsPerRow="itemsPerRowSystem"
          :isSlider="itemsPerRowSystem < systemItems.length"
          :imageHeight="180"
          title="Состав системы"
          :bgColor="itemsPerRowSystem < 4 ? 'blue' : 'orange'"
          :bgType="itemsPerRowSystem < 4 ? 'full' : 'half'"
          class="system"
      />

      <div>
         <AppTitle position="left">Особенности системы</AppTitle>
         <AppList
             type="feature"
             :gap="width > 992 ? 35 : 10"
             :items="features"
             :itemsPerRow="itemsPerRowFeatures"
             justify="flex-start"
             multiline
         />
      </div>

      <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

      <VideoSection :src="video" />

      <div>
         <AppTitle position="left">Платные сигналы</AppTitle>
         <AppList
             type="signal"
             :gap="20"
             :items="signals"
             :itemsPerRow="itemsPerRowSignals"
             multiline
         />
      </div>


      <AppAlert>Цена комплекта от 650000₽</AppAlert>

   </AppPage>
</template>

<script>
import useItemsPerRow from "../../../../../composable/itemsPerRow.js";
import useLoading from "../../../../../composable/loading.js";

import {imageWithPoints, systemItems, features, signals} from "../../../data/agriculture/auto-drive/electric-autopilot.js";
import image from "../../../../../assets/images/solution/pages/autodrive/head-image.jpg";
import video from "../../../../../assets/video/e-autopilot.mp4";

import AppPage from "../../../../../components/App/AppPage.vue";
import HeadImage from "../../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../../components/App/AppList.vue";
import AppTitle from "../../../../../components/App/AppTitle.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import AppAlert from "../../../../../components/App/AppAlert.vue";
import VideoSection from "../../../../../components/Sections/VideoSection.vue";

export default {
   name: "ElectricAutopilot",
   components: {
      VideoSection,
      AppAlert, AppTitle, TextWithImage, AppList, ImageWithMarkers, TextBlock, HeadImage, AppPage},
   setup() {
      useLoading()
      const {itemsPerRow: itemsPerRowSystem} = useItemsPerRow({992: 4, 768: 3, 480: 2, default: 1})
      const {itemsPerRow: itemsPerRowSignals} = useItemsPerRow({568: 2, default: 1})
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({992: 4, 568: 2, default: 1})

      return {
         image,
         video,

         imageWithPoints,
         systemItems,
         features,
         signals,

         itemsPerRowSystem,
         itemsPerRowSignals,
         itemsPerRowFeatures,

      }
   }
}
</script>

<style lang="scss">
.electric-autopilot-page {
   .list-title {
      margin-bottom: 10px;
   }

   @media(max-width: 992px) {
      .system {
         padding-bottom: 10px;
         //.swiper-slide {
         //   padding-bottom: 25px;
         //}
         .swiper-pagination-bullets {
            bottom: 0;
         }
      }
   }
}

</style>
