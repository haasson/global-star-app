<template>
   <AppPage :topOffset="false">
      <HeadImage
          :src="image"
          class="image"
          title="SureSpeed"
          titleType="simple"
          pageName="Sure Speed"
      />

      <TextBlock>
         <p>Высевающий аппарат SureSpeed® с конвейерной подачей семян сочетает в себе
            преимущества электрического привода SureDrive и скоростные характеристики.
            Обеспечивает посев в срок в сжатых агротехнических условиях. Используйте ОДНУ
            сеялку и трактор вместо ДВУХ и без инвестиций в мощный трактор под широкий
            захват.</p>
      </TextBlock>

      <TextWithImage image="solution/pages/accurate-planter/sure-speed.png" imagePosition="left">
         <p class="list-title">Особенности:</p>
         <ul class="unordered-list">
            <li>Автоматическое отключение секций</li>
            <li>Расширенный мониторинг высева</li>
            <li>Дифференцированный посев (с переменной нормой)</li>
            <li>Компенсация нормы на разворотах и обсевах</li>
            <li>Увеличение скорости посева на 100%</li>
         </ul>
      </TextWithImage>

      <VideoSection :src="video" />

      <div>
         <AppTitle mobileBg>Дисплей</AppTitle>
         <TextWithImage image="solution/pages/accurate-planter/planter.png">
            <p class="list-title">Особенности:</p>
            <ul class="unordered-list">
               <li>Скорость посева до 20 км/ч</li>
               <li>Точность, сингуляция 99%</li>
               <li>Транспортер из кевлара</li>
            </ul>
         </TextWithImage>
      </div>

      <SoftSection :items="soft" titlePosition="left" />

   </AppPage>
</template>

<script>
import useLoading from "../../../../../composable/loading.js";

import {soft} from "../../../data/agriculture/accurate-planter/sure-speed.js";
import image from "../../../../../assets/images/solution/pages/accurate-planter/head-image.jpg";
import video from "../../../../../assets/video/sure-speed.mp4";

import AppPage from "../../../../../components/App/AppPage.vue";
import HeadImage from "../../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";
import AppTitle from "../../../../../components/App/AppTitle.vue";
import VideoSection from "../../../../../components/Sections/VideoSection.vue";

export default {
   name: "SureSpeed",
   components: {VideoSection, AppTitle, SoftSection, TextWithImage, TextBlock, HeadImage, AppPage},
   setup() {
      useLoading()
      return {image, video, soft}
   }
}
</script>

<style scoped>

</style>
