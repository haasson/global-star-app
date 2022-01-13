<template>
   <AppPage noOffset>
      <HeadImage :src="image" />

      <TextBlock>
         <p>Решения на базе программных продуктов Wialon позволяют оптимизировать работу автомобильного парка вашей
            компании. Использование программных решений в сфере логистики, коммунальных услуг, сельского хозяйства,
            строительства позволяет сэкономить до 50% на содержание техники и окупить затраты на покупку системы менее
            чем за 6 месяцев.</p>
      </TextBlock>

      <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

      <AppList
          type="feature" gap="25"
          :items="features"
          itemsPerRow="3"
          multiline
          justify="flex-start"
      />

      <SoftSection :items="soft" titlePosition="left"/>
   </AppPage>

</template>

<script>
import image from "../../../../assets/images/solution/pages/transport/transport.jpg";
import AppPage from "../../../../components/App/AppPage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import ImageWithMarkers from "../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../components/App/AppList.vue";
import AppTitle from "../../../../components/AppTitle.vue";
import SoftSection from "../../../../components/Sections/SoftSection.vue";

const imageWithPoints = {
   imagePath: 'solution/pages/transport/truck.png',
   points: [
      {left: 8.5, top: 37, text: 'Sensor1'},
      {left: 24.5, top: 65, text: 'Sensor2'},
      {left: 28.5, top: 17, text: 'Sensor3'},
      {left: 37.5, top: 44, text: 'Sensor4'},
      {left: 76, top: 60, text: 'Sensor5'},
      {left: 94.5, top: 31, text: 'Sensor6'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 2}},
      text: 'Контроль мест и времени стоянок',
   },
   {
      icon: {name: 'diagnosticsSmall', shift: {top: -2, left: -5}},
      text: 'Снижение амортизационных расходов ТС',
   },
   {
      icon: {name: 'kanistra', width:78, shift: {top: -8, left: -7}},
      text: 'Учет и контроль расхода топлива',
   },
   {
      icon: {name: 'document', shift: {top: 2, left: -11}},
      text: 'Выбор оптимального маршрута следования',
   },
   {
      icon: {name: 'wheel', shift: {top: 2, left: 1}},
      text: 'Контроль давления в шинах',
   },
   {
      icon: {name: 'temperature', shift: {top: 4, left: -9}},
      text: 'Температурный контроль груза',
   },
   {
      icon: {name: 'speedometer', shift: {top: -7, left: -12}},
      text: 'Весовой контроль',
   },
]

const soft = ['wialon', 'logistics', 'fleetrun', 'eco-driving']

export default {
   name: "Trucks",
   components: {SoftSection, AppTitle, AppList, ImageWithMarkers, HeadImage, TextBlock, AppPage},
   setup() {
      return {image, imageWithPoints, features, soft}
   }
}
</script>

<style lang="scss" scoped>


</style>
