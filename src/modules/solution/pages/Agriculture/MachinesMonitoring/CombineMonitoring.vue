<template>
   <TextBlock>
      <p>Мониторинг работы сельскохозяйственной техники на базе Wialon (Hecterra) – это эффективный способ анализа
         работы и принятия административных решений. </p>
   </TextBlock>

   <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

   <AppList
       type="feature" gap="5"
       :items="features"
       itemsPerRow="3"
       multiline
   />

   <div>
      <AppTitle position="left">Программное обеспечение</AppTitle>
      <AppList
          type="soft"
          gap="14"
          :items="soft"
          itemsPerRow="3"
          empty
      />
   </div>
</template>

<script>
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import AppList from "../../../../../components/App/AppList.vue";
import AppTitle from "../../../../../components/AppTitle.vue";
import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";

const imageWithPoints = {
   imagePath: 'solution/pages/machines-monitoring/combine/combine.png',
   points: [
      {left: 39, top: 17, text: 'Sensor1'},
      {left: 69, top: 28, text: 'Sensor2'},
      {left: 42, top: 43, text: 'Sensor3'},
      {left: 70, top: 48, text: 'Sensor4'},
      {left: 84, top: 47, text: 'Sensor5'},
      {left: 54, top: 79, text: 'Sensor6'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 2}},
      text: 'Мониторинг урожайности',
   },
   {
      icon: {name: 'control', shift: {top: -1, left: -11}},
      text: 'Контроль загрузки/выгрузки бункера',
   },
   {
      icon: {name: 'document', shift: {top: -5, left: 0}},
      text: 'Контроль расхода топлива',
   },
   {
      icon: {name: 'identify', shift: {top: 0, left: -12}},
      text: 'Идентификация водителей/учет рабочего времени',
   },
   {
      icon: {name: 'monitor', shift: {top: -8, left: 4}},
      text: 'Контроль скоростного режима',
   },
]
const soft = [
   {name: 'solution/soft/hecterra.png', text: 'Hererra'},
   {name: 'solution/soft/wialon.png', text: 'Wiallon'}
]
export default {
   name: "CombineMonitoring",
   components: {ImageWithMarkers, AppTitle, AppList, TextBlock},

   setup() {
      return {imageWithPoints, features, soft}
   }
}
</script>

<style lang="scss" scoped>

</style>
