<template>
   <AppPage :topOffset="false">
      <HeadImage
          :src="image"
          class="image"
          title="SureForce"
          titleType="simple"
          pageName="Sure Force"
      />

      <TextBlock>
         <p>Система SureForceTM Предназначена для автоматического поддержания глубины
            заделки независимо от полевых условий. Гидравлические цилиндры гарантируют
            необходимое прижимное усилие в каждой строчке, если посевная секция
            сталкивается с уплотнением грунта (следы, обсев, глинистая почва). Гидроцилиндры
            автоматически и мгновенно реагируют, обеспечивая глубину посева на том же
            значении, на которое настроен агрегат.</p>
      </TextBlock>

      <TextWithImage image="solution/pages/accurate-planter/sure-force.png" imagePosition="left">
         <p class="list-title">Особенности:</p>
         <ul class="unordered-list">
            <li>Стабильная глубина заделки вне зависимости от плотности почвы</li>
            <li>Повышение всхожести</li>
            <li>Дружные сильные всходы</li>
            <li>Прибавка урожайности на 10—20%</li>
         </ul>
      </TextWithImage>

      <VideoSection :src="video" />

      <div>
         <AppTitle mobileBg="orange">Дисплей</AppTitle>
         <TextWithImage image="solution/pages/accurate-planter/planter.png">
            <p class="list-title">Особенности:</p>
            <ul class="unordered-list">
               <li>Стабильная глубина заделки вне зависимости от плотности почвы</li>
               <li>Повышение всхожести</li>
               <li>Прибавка урожайности на 10—20%</li>
            </ul>
         </TextWithImage>
      </div>

      <SoftSection :items="soft" titlePosition="left" />

   </AppPage>
</template>

<script>
import image from "../../../../../assets/images/solution/pages/accurate-planter/head-image.jpg";
import video from "../../../../../assets/video/sure-force.mp4";

import AppPage from "../../../../../components/App/AppPage.vue";
import HeadImage from "../../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";
import AppTitle from "../../../../../components/App/AppTitle.vue";
import VideoSection from "../../../../../components/Sections/VideoSection.vue";

const soft = ['finiti', 'sms']

export default {
   name: "SureForce",
   components: {VideoSection, AppTitle, SoftSection, TextWithImage, TextBlock, HeadImage, AppPage},
   setup() {
      return {image, video, soft}
   }
}
</script>

<style scoped>

</style>
