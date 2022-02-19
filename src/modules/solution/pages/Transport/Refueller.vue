<template>
   <AppPage :topOffset="false">
      <HeadImage :src="image"
                 pageName="Топливозаправщики"/>

      <TextBlock>
         <p>Решения на базе программных продуктов Wialon позволяют оптимизировать работу автомобильного парка вашей
            компании. Использование программных решений в сфере логистики, коммунальных услуг, сельского хозяйства,
            строительства позволяет сэкономить до 50% на содержание техники и окупить затраты на покупку системы менее
            чем за 6 месяцев.</p>
      </TextBlock>

      <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

      <AppList
          type="feature"
          :gap="width > 992 ? 25 : 10"
          :items="features"
          :itemsPerRow="itemsPerRowFeatures"
          multiline
          justify="flex-start"
      />

      <RecommendedProducts />

      <SoftSection :items="soft" titlePosition="left"/>
   </AppPage>
</template>

<script>

import image from "../../../../assets/images/solution/pages/transport/transport.jpg";
import AppPage from "../../../../components/App/AppPage.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import ImageWithMarkers from "../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../components/App/AppList.vue";
import RecommendedProducts from "../../../../components/Sections/RecommendedProducts.vue";
import SoftSection from "../../../../components/Sections/SoftSection.vue";
import useItemsPerRow from "../../../../composable/itemsPerRow.js";


const imageWithPoints = {
   imagePath: 'solution/pages/transport/truck.png',
   points: [
      {left: 8.5, top: 37, text: 'Трекер (модуль слежения Галилео)'},
      {left: 24.5, top: 65, text: 'Датчик уровня топлива Италон'},
      {left: 28.5, top: 17, text: 'Датчики открытия люков'},
      {left: 37.5, top: 44, text: 'Датчик оборотов счетчика ППО'},
      {left: 76, top: 60, text: 'Считыватель карт водителей'},
      {left: 94.5, top: 31, text: 'Отсечной клапан'},
      {left: 79, top: 31, text: 'Блок управления выливом'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 2}},
      text: 'Учет и контроль расхода топлива',
   },
   {
      icon: {name: 'diagnosticsSmall', shift: {top: -2, left: -5}},
      text: 'Контроль мест и времени стоянок',
   },
   {
      icon: {name: 'kanistra', width:78, shift: {top: -8, left: -7}},
      text: 'Снижение амортизационных расходов ТС',
   },
   {
      icon: {name: 'document', shift: {top: 2, left: -11}},
      text: 'Контроль времени, объема и места выдачи топлива',
   },
   {
      icon: {name: 'wheel', shift: {top: 2, left: 1}},
      text: 'Привязка выданного объема топлива к водителю или технике',
   },
]

const soft = ['wialon', 'fleetrun']

export default {
   name: "Refueller",
   components: {SoftSection, RecommendedProducts, AppList, ImageWithMarkers, TextBlock, HeadImage, AppPage},
   setup() {
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({992: 3, 568: 2, default: 1})

      return {image, imageWithPoints, features, soft, itemsPerRowFeatures}
   }
}

</script>

<style scoped>

</style>
