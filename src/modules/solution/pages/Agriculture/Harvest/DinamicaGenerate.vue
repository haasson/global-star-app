<template>

   <TextBlock>
      <p>Инфракрасный анализатор кормов NIR компании Dinamica Generale устанавливается на любой кормоуборочный комбайн и в режиме реального времени позволяет оценить качество зеленой массы, а также принять необходимые административные решения.</p>
   </TextBlock>

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
   />

   <div>
      <AppTitle position="left">Особенности системы</AppTitle>
      <AppList
          type="feature"
          :gap="width > 992 ? 25 : 10"
          :items="features"
          :itemsPerRow="itemsPerRowFeatures"
          justify="flex-start"
          multiline
      />
   </div>

   <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

   <SoftSection :items="soft" />

   <AppAlert>Цена комплекта от 22873€</AppAlert>

</template>

<script>
import useItemsPerRow from "../../../../../composable/itemsPerRow.js";
import useLoading from "../../../../../composable/loading.js";
import useWindowDimensions from "../../../../../composable/windowDimensions.js";

import {imageWithPoints, systemItems, features, soft} from "../../../data/agriculture/harvest/dinamica-generate.js";

import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../../components/App/AppList.vue";
import AppTitle from "../../../../../components/App/AppTitle.vue";
import AppAlert from "../../../../../components/App/AppAlert.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";


export default {
   name: "DinamicaGenerate",
   components: {SoftSection, AppAlert, AppTitle, AppList, ImageWithMarkers, TextBlock},

   setup() {
      const {width} = useWindowDimensions()
      useLoading()

      const {itemsPerRow: itemsPerRowSystem} = useItemsPerRow({992: 4, 768: 3, 568: 2, default: 1})
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

</style>
