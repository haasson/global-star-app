<template>
   <AppPage :topOffset="false" class="hydraulic-autopilot-page">
      <HeadImage
          :src="image"
          class="image"
          pageName="Гидравлический автопилот"
      />

      <TextBlock>
         <p>Подруливающее устройство SteadySteer подходит для автоматизации рулевого управления тракторов, комбайнов и самоходных сельскохозяйственных машин. Индивидуальные монтажные комплекты разработаны для 600 моделей техники,
            а запатентованная AgLeader Technology оригинальная схема крепления мотора позволяет за секунды переносить электрический мотор с техники на технику.
         </p>
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

      <AppTitle type="simple" position="left">Гидрораспределитель</AppTitle>

      <TextWithImage image="solution/pages/autodrive/hydro-block.png" imagePosition="left">
         <p class="list-title">Совместим с:</p>
         <ul class="unordered-list">
           <li>Тракторы: 2 WD , 4 WD, гусеничные</li>
           <li>Самоходные зерно и кормоуборочные комбайны, опрыскиватели, машины для внесения удобрений</li>
           <li>Гидравлика закрытого и открытого типа</li>
         </ul>
      </TextWithImage>

      <AppTitle type="simple">SteerCommand Z2</AppTitle>

      <TextWithImage image="solution/pages/autodrive/steer-command.png">
         <p class="list-title">Особенности:</p>
         <ul class="unordered-list">
            <li>Интеграция более чем с 600 моделями техники без конструктивных изменений</li>
            <li>Полная реализация потенциала точности приемника</li>
            <li>9-ти осевая компенсация неровностей</li>
         </ul>
      </TextWithImage>

      <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

      <VideoSection :src="video" />

      <div>
         <AppTitle position="left">Платные сигналы</AppTitle>
         <AppList
             type="signal"
             :gap="30"
             :items="signals"
             :itemsPerRow="itemsPerRowSignals"
             multiline
         />
      </div>


      <AppAlert>Цена комплекта от 13500$</AppAlert>

   </AppPage>
</template>

<script>
import useItemsPerRow from "../../../../../composable/itemsPerRow.js";
import useLoading from "../../../../../composable/loading.js";

import {imageWithPoints, systemItems, signals} from "../../../data/agriculture/auto-drive/hydraulic-autopilot.js";
import image from "../../../../../assets/images/solution/pages/autodrive/head-image.jpg";
import video from "../../../../../assets/video/h-autopilot.mp4";

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
   name: "HydraulicAutopilot",
   components: {
      VideoSection,
      AppAlert, AppTitle, TextWithImage, AppList, ImageWithMarkers, TextBlock, HeadImage, AppPage},
   setup() {
      useLoading()
      const {itemsPerRow: itemsPerRowSystem} = useItemsPerRow({1200: 5, 992: 4, 768: 3, 480: 2, default: 1})
      const {itemsPerRow: itemsPerRowSignals} = useItemsPerRow({568: 2, default: 1})

      return {
         image,
         video,

         imageWithPoints,
         systemItems,
         signals,

         itemsPerRowSystem,
         itemsPerRowSignals,

      }
   }
}
</script>

<style lang="scss">
.hydraulic-autopilot-page {
   .list-title {
      margin-bottom: 10px;
   }

   @media(max-width: 992px) {
      .system {
         padding-bottom: 10px;
         .swiper-pagination-bullets {
            bottom: 0;
         }
      }
   }
}

</style>
