<template>
   <AppPage :topOffset="false">
      <HeadImage
          :src="image"
          objectPosition="bottom"
          pageName="Бортовая система взвешивания Pegasus-2"
      />

      <TextBlock>
         <p>Бортовая система взвешивания для телескопических и колесных погрузчиков, которая производит взвешивание в динамике с накоплением данных.</p>
      </TextBlock>

      <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

      <AppList
          type="simple"
          :gap="12"
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

      <AppGallery :slides="slides"/>

      <SoftSection :items="soft" titlePosition="left"/>

      <AppAlert>Цена 2060€</AppAlert>
   </AppPage>
</template>

<script>
import useLoading from "../../../../composable/loading.js";
import useItemsPerRow from "../../../../composable/itemsPerRow.js";

import {imageWithPoints, systemItems, features, slides, soft} from "../../data/building/weighting-system.js";
import image from "../../../../assets/images/solution/pages/weighting-system/head-image.jpg";

import AppPage from "../../../../components/App/AppPage.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import AppTitle from "../../../../components/App/AppTitle.vue";
import TextWithImage from "../../../../components/Sections/TextWithImage.vue";
import ImageWithMarkers from "../../../../components/Sections/ImageWithMarkers.vue";
import SoftSection from "../../../../components/Sections/SoftSection.vue";
import AppAlert from "../../../../components/App/AppAlert.vue";
import AppList from "../../../../components/App/AppList.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import AppGallery from "../../../../components/App/AppGallery.vue";


export default {
   name: "Weighting-system",
   components: {
      AppGallery,
      TextBlock, AppList, AppAlert, SoftSection, ImageWithMarkers, TextWithImage, AppTitle, HeadImage, AppPage},
   setup() {
      useLoading()

      const {itemsPerRow: itemsPerRowSystem} = useItemsPerRow({1200: 5, 992: 4, 768: 3, 480: 2, default: 1})
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({992: 2, default: 1})

      return {
         image,
         imageWithPoints,
         systemItems,
         features,
         slides,
         soft,

         itemsPerRowSystem,
         itemsPerRowFeatures,
      }
   }
}
</script>

<style scoped>

</style>
