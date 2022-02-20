<template>

   <TextBlock>
      <p>Весовые системы на бункеры - перегрузчики доказали свою эффективность при  определении урожайности поля, а также контроле транспортировки зерновых культур от поля до склада. Погрешность измерения составляет менее 1% с партии. Все проводимые измерения доступны на бумажном или в цифровом формате.</p>
   </TextBlock>

   <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

   <AppList
       type="simple"
       :gap="12"
       :items="systemItems1"
       :itemsPerRow="itemsPerRowSystem1"
       :isSlider="itemsPerRowSystem1 < 2"
       :imageHeight="280"
       title="Состав системы №1"
       :bgColor="itemsPerRowSystem1 < 5 ? 'blue' : 'orange'"
       :bgType="itemsPerRowSystem1 < 2 ? 'full' : 'half'"
   />

   <div>
      <AppTitle position="left">Особенности системы</AppTitle>
      <AppList
          type="feature"
          :gap="width > 992 ? 25 : 10"
          :items="features1"
          :itemsPerRow="itemsPerRowFeatures1"
          multiline
      />
   </div>

   <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

   <AppList
       type="simple"
       :gap="12"
       :items="systemItems2"
       :itemsPerRow="itemsPerRowSystem2"
       :isSlider="itemsPerRowSystem1 < 3"
       :imageHeight="220"
       title="Состав системы №2"
       :bgColor="itemsPerRowSystem1 < 5 ? 'blue' : 'orange'"
       :bgType="itemsPerRowSystem1 < 3 ? 'full' : 'half'"
   />

   <div>
      <AppTitle position="left">Особенности системы</AppTitle>
      <AppList
          type="feature"
          :gap="width > 992 ? 25 : 10"
          :items="features2"
          :itemsPerRow="itemsPerRowFeatures2"
          multiline
      />
   </div>

   <SoftSection :items="soft" />

   <AppAlert>Цена комплекта от 1200€</AppAlert>

</template>

<script>
import useItemsPerRow from "../../../../../composable/itemsPerRow.js";
import useLoading from "../../../../../composable/loading.js";
import useWindowDimensions from "../../../../../composable/windowDimensions.js";

import {imageWithPoints, systemItems1, systemItems2, features1, features2, soft} from "../../../data/agriculture/harvest/bunker-reloader.js";

import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../../components/App/AppList.vue";
import AppTitle from "../../../../../components/App/AppTitle.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";
import AppAlert from "../../../../../components/App/AppAlert.vue";


export default {
   name: "BunkerReloader",
   components: {AppAlert, SoftSection, AppTitle, AppList, ImageWithMarkers, TextBlock},
   setup() {
      const {width} = useWindowDimensions()
      useLoading()

      const {itemsPerRow: itemsPerRowSystem1} = useItemsPerRow({568: 2, default: 1})
      const {itemsPerRow: itemsPerRowFeatures1} = useItemsPerRow({568: 2, default: 1})
      const {itemsPerRow: itemsPerRowSystem2} = useItemsPerRow({768: 3, 568: 2, default: 1})
      const {itemsPerRow: itemsPerRowFeatures2} = useItemsPerRow({568: 2, default: 1})


      return {
         width,

         imageWithPoints,
         systemItems1,
         features1,
         systemItems2,
         features2,
         soft,

         itemsPerRowSystem1,
         itemsPerRowFeatures1,
         itemsPerRowSystem2,
         itemsPerRowFeatures2
      }
   }
}
</script>

<style lang="scss" scoped>

</style>
