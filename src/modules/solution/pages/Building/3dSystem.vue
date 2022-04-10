<template>
   <AppPage :topOffset="false">
      <HeadImage :src="image"
                 pageName="3D система для экскаватора"/>

      <TextBlock>
         <p>Система используется для дорог, трасс, дамб, обширных земляных работ.
            <br>При сооружении отвалов, карьеров, подготовке стройплощадок, проведении подземных коммуникации, углублении дна.</p>
      </TextBlock>

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

      <AppGallery :slides="slides"/>

      <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

      <AppAlert>Цена комплекта от 19000$</AppAlert>
   </AppPage>
</template>

<script>
import useItemsPerRow from "../../../../composable/itemsPerRow.js";
import useLoading from "../../../../composable/loading.js";
import useWindowDimensions from "../../../../composable/windowDimensions.js";

import {imageWithPoints, features, slides, soft} from "../../data/building/3dSystem.js";
import image from "../../../../assets/images/solution/pages/3d-system/head-image.jpg";

import AppPage from "../../../../components/App/AppPage.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import ImageWithMarkers from "../../../../components/Sections/ImageWithMarkers.vue";
import AppTitle from "../../../../components/App/AppTitle.vue";
import AppList from "../../../../components/App/AppList.vue";
import AppGallery from "../../../../components/App/AppGallery.vue";
import AppAlert from "../../../../components/App/AppAlert.vue";


export default {
   name: "3d-system",
   components: {AppAlert, AppGallery, AppList, AppTitle, ImageWithMarkers, TextBlock, HeadImage, AppPage},
   setup() {
      const {width} = useWindowDimensions()
      useLoading()
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({568: 2, default: 1})

      return {width, image, imageWithPoints, features, slides, soft, itemsPerRowFeatures}
   }
}
</script>

<style lang="scss" scoped>

</style>
