<template>
   <AppPage noOffset>

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
             type="feature" gap="35"
             :items="features"
             :itemsPerRow="itemsPerRow"
             justify="flex-start"
             multiline
         />
      </div>

   </AppPage>
</template>

<script>
import image from "../../../../assets/images/solution/pages/feed-analyzer/head-image.jpg";

import AppPage from "../../../../components/App/AppPage.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import AppTitle from "../../../../components/AppTitle.vue";
import TextWithImage from "../../../../components/Sections/TextWithImage.vue";
import AppList from "../../../../components/App/AppList.vue";
import useItemsPerRow from "../../../../composable/itemsPerRow.js";

const features = [
   {
      icon: {name: 'bag', shift: {top: 5, left: -3}},
      text: 'Доступны для анализа градуировки 52 видов кормов и зерна\n',
   },
   {
      icon: {name: 'flask', shift: {top: 11, left: 10}},
      text: 'Определение показателей при открытии силосной ямы',
   },
   {
      icon: {name: 'apple', shift: {top: -3, left: 8}},
      text: 'Для экспресс анализа в поле, перед уборкой',
   },
   {
      icon: {name: 'flower', shift: {top: 5, left: 0}},
      text: 'Определяет влажность, крахмал, клетчатку, золу, сырой жир, протеин',
   },
   {
      icon: {name: 'hand', shift: {top: -18, left: -6}},
      text: 'Определения качества сырья от поставщиков',
   },
]

export default {
name: "FeedAnalyzer",
   components: {AppList, TextWithImage, AppTitle, TextBlock, HeadImage, AppPage},
   setup() {
      const {itemsPerRow} = useItemsPerRow({568: 2, default: 1})


      return {image, features, itemsPerRow}
   }
}
</script>

<style scoped>

</style>
