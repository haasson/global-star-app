<template>
   <AppPage :topOffset="false" :bottomOffset="width <= 992">

      <HeadImage :src="image" pageName="БИК анализаторы кормов"/>

      <TextBlock>
         <p>
            Экспресс анализаторы кормов и зерна Dinamica Generale  - это анализ в течении 1 минуты
            в режиме реального времени.
         </p>
      </TextBlock>

      <AppTitle type="simple">AgriNir</AppTitle>

      <TextWithImage image="solution/pages/feed-analyzer/agrinir.png" imagePosition="left">
         <p>Портативный анализатор кормов и зерна в ближней инфракрасной области спектра (БИК-анализатор), который измеряет процентное содержание влажности (сухого вещества), крахмала, сырого протеина, КДК, НДК, золы и сырого жира в различных типах кормового сырья за несколько секунд.</p>
      </TextWithImage>

      <AppTitle type="simple" position="left">X-Nir</AppTitle>

      <TextWithImage image="solution/pages/feed-analyzer/xnir.png" imagePosition="right">
         <p>Ручной анализатор для кормов и зерна, измеряет за секунды массовую долю влаги (сухого
            вещества), крахмала, сырого протеина, клетчатки
            (КДК и НДК), золы и сырого жира в кормах и кормовом сырье.
            X-NIR позволяет контролировать рацион в режиме реального времени ежедневно.</p>
      </TextWithImage>

      <div>
         <AppTitle position="left">Особенности системы</AppTitle>
         <AppList
             type="feature"
             :gap="width > 992 ? 35 : 10"
             :items="features"
             :itemsPerRow="itemsPerRow"
             justify="flex-start"
             multiline
         />
      </div>

      <VideoSection :src="video" />

   </AppPage>
</template>

<script>
import useItemsPerRow from "../../../../composable/itemsPerRow.js";
import useWindowDimensions from "../../../../composable/windowDimensions.js";
import useLoading from "../../../../composable/loading.js";

import {features} from "../../data/agriculture/feed-analyzer/feed-analyzer.js";
import image from "../../../../assets/images/solution/pages/feed-analyzer/head-image.jpg";
import video from "../../../../assets/video/feed-analyzer.mp4";

import AppPage from "../../../../components/App/AppPage.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import AppTitle from "../../../../components/App/AppTitle.vue";
import TextWithImage from "../../../../components/Sections/TextWithImage.vue";
import AppList from "../../../../components/App/AppList.vue";
import VideoSection from "../../../../components/Sections/VideoSection.vue";


export default {
name: "FeedAnalyzer",
   components: {VideoSection, AppList, TextWithImage, AppTitle, TextBlock, HeadImage, AppPage},
   setup() {
      useLoading()
      const {itemsPerRow} = useItemsPerRow({568: 2, default: 1})
      const {width} = useWindowDimensions()


      return {image, video, features, itemsPerRow, width}
   }
}
</script>

<style scoped>

</style>
