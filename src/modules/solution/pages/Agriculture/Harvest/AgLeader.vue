<template>
   <TextBlock>
      <p>Мониторинг урожайности необходим для выявления неравномерности урожая
         в пределах поля, что позволяет определить причину снижения урожайности
         в отдельных его частях. Линейка систем картографирования урожайности AgLeader славится точностью измерений и
         надежностью.</p>
   </TextBlock>

   <TextWithImage
       image="solution/pages/harvest/yield-map.png"
       imagePosition="left"
   >
      <p class="list-title">Карта урожайности отвечает на вопросы:</p>
      <ul class="unordered-list">
         <li>Какие участки поля принесли больше всего?</li>
         <li>Какие участки дали меньше всего?</li>
         <li>Почему?</li>
      </ul>
   </TextWithImage>

   <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

   <AppList
       type="simple"
       :gap="12"
       :items="systemItems"
       :itemsPerRow="itemsPerRowSystem"
       :isSlider="itemsPerRowSystem < 5"
       :imageHeight="110"
       title="Состав системы"
       :bgColor="itemsPerRowSystem < 5 ? 'blue' : 'orange'"
       :bgType="itemsPerRowSystem < 5 ? 'full' : 'half'"
       class="system-section"
   />

   <div class="feature-section">
      <AppTitle position="left">Особенности системы</AppTitle>
      <AppList
          type="feature"
          :gap="width > 992 ? 25 : 10"
          :items="features"
          :itemsPerRow="itemsPerRowFeatures"
          multiline
      />
   </div>

   <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

   <SoftSection :items="soft" class="soft-section" />

   <AppAlert class="alert-section">Цена комплекта от 5600$</AppAlert>

</template>

<script>
import useWindowDimensions from "../../../../../composable/windowDimensions.js";
import useItemsPerRow from "../../../../../composable/itemsPerRow.js";
import useLoading from "../../../../../composable/loading.js";

import {imageWithPoints, systemItems, features, soft} from "../../../data/agriculture/harvest/agleader.js";

import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import AppTitle from "../../../../../components/App/AppTitle.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../../components/App/AppList.vue";
import AppAlert from "../../../../../components/App/AppAlert.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";


export default {
   name: "AgLeader",
   components: {SoftSection, AppAlert, AppList, ImageWithMarkers, TextWithImage, AppTitle, TextBlock},

   setup() {
      useLoading()
      const {width} = useWindowDimensions()

      const {itemsPerRow: itemsPerRowSystem} = useItemsPerRow({992: 5, 768: 3, 568: 2, default: 1})
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({992: 3, 568: 2, default: 1})

      return {
         width,

         imageWithPoints,
         systemItems,
         features,
         soft,

         itemsPerRowSystem,
         itemsPerRowFeatures,

      }
   }
}
</script>

<style lang="scss" scoped>
.list-title {
   margin-bottom: 10px;
}

@media(max-width: 992px) {
   .alert-section,
   .soft-section {
      order: 2;
   }
   .system-section {
      order: 1;
   }
}
</style>
