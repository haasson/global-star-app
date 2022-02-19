<template>
   <AppPage :topOffset="false">
      <HeadImage :src="image"
                 pageName="Бортовая система взвешивания Pegasus-2"/>

      <div>
         <AppTitle position="left" :mobileBg="true">Бортовая система взвешивания Pegagus-2 позволяет</AppTitle>
         <TextWithImage image="no-image.png" imagePosition="left">
            <ul class="unordered-list">
               <li>Контролировать производительность машин, снижает затраты на эксплуатацию</li>
               <li>Избежать штрафов за перегруз;</li>
               <li>Экономить время и деньги;</li>
               <li>Улучшить анализ внутренних процессов  предприятия и вывести его на лучший уровень эффективности.</li>
            </ul>
         </TextWithImage>
      </div>

      <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

      <SoftSection :items="soft" titlePosition="left" />

      <AppAlert>Цена 2060€</AppAlert>
   </AppPage>
</template>

<script>
import useLoading from "../../../../composable/loading.js";

import image from "../../../../assets/images/no-image.png";
import AppPage from "../../../../components/App/AppPage.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import AppTitle from "../../../../components/App/AppTitle.vue";
import TextWithImage from "../../../../components/Sections/TextWithImage.vue";
import ImageWithMarkers from "../../../../components/Sections/ImageWithMarkers.vue";
import SoftSection from "../../../../components/Sections/SoftSection.vue";
import AppAlert from "../../../../components/App/AppAlert.vue";

const imageWithPoints = {
   imagePath: 'no-image.png',
   points: [
      {left: 48, top: 28, text: 'Sensor1'},
      {left: 63, top: 62.5, text: 'Sensor2'},
      {left: 64.5, top: 48, text: 'Sensor3'},
      {left: 70, top: 68, text: 'Sensor4'},
      {left: 90.5, top: 59, text: 'Sensor5'},
   ]
}
const soft = ['fleetrun', 'wialon']

export default {
   name: "Weighting-system",
   components: {AppAlert, SoftSection, ImageWithMarkers, TextWithImage, AppTitle, HeadImage, AppPage},
   setup() {
      useLoading()
      return {image, imageWithPoints, soft}
   }
}
</script>

<style scoped>

</style>
