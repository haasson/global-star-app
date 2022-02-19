<template>
   <AppPage :topOffset="false">
      <HeadImage :src="image" pageName="Легковые автомобили"/>

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
import useItemsPerRow from "../../../../composable/itemsPerRow.js";
import useLoading from "../../../../composable/loading.js";

import image from "../../../../assets/images/solution/pages/transport/transport.jpg";
import AppPage from "../../../../components/App/AppPage.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import ImageWithMarkers from "../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../components/App/AppList.vue";
import RecommendedProducts from "../../../../components/Sections/RecommendedProducts.vue";
import SoftSection from "../../../../components/Sections/SoftSection.vue";

const imageWithPoints = {
   imagePath: 'solution/pages/transport/truck.png',
   points: [
      {left: 8.5, top: 37, text: 'Трекер (модуль слежения Смарт )'},
      {left: 24.5, top: 65, text: 'CAN-log'},
      {left: 28.5, top: 17, text: 'Датчик блокировки двигателя'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 2}},
      text: 'Учет и контроль расхода топлива через CAN-шину',
   },
   {
      icon: {name: 'diagnosticsSmall', shift: {top: -2, left: -5}},
      text: 'Контроль мест и времени стоянок',
   },
   {
      icon: {name: 'kanistra', width:78, shift: {top: -8, left: -7}},
      text: 'Выбор оптимального маршрута следования',
   },
   {
      icon: {name: 'document', shift: {top: 2, left: -11}},
      text: 'Снижение амортизационных расходов ТС',
   },
   {
      icon: {name: 'wheel', shift: {top: 2, left: 1}},
      text: 'Принудительная блокировка двигателя',
   },
   {
      icon: {name: 'speedometer', shift: {top: -7, left: -12}},
      text: 'Автоматическое формирование путевых листов',
   },
]

const soft = ['wialon', 'logistics', 'fleetrun', 'eco-driving']

export default {
   name: "Cars",
   components: {SoftSection, RecommendedProducts, AppList, ImageWithMarkers, TextBlock, HeadImage, AppPage},
   setup() {
      useLoading()
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({992: 3, 568: 2, default: 1})

      return {image, imageWithPoints, features, soft, itemsPerRowFeatures}
   }
}
</script>

<style scoped>

</style>
