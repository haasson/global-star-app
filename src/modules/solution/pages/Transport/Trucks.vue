<template>
   <AppPage :topOffset="false">
      <HeadImage :src="image"
                 pageName="Транспортные перевозки"/>

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

      <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

      <RecommendedProducts />

      <SoftSection :items="soft" titlePosition="left"/>
   </AppPage>

</template>

<script>
import useItemsPerRow from "../../../../composable/itemsPerRow.js";
import useLoading from "../../../../composable/loading.js";

import image from "../../../../assets/images/solution/pages/transport/transport.jpg";
import AppPage from "../../../../components/App/AppPage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import ImageWithMarkers from "../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../components/App/AppList.vue";
import AppTitle from "../../../../components/App/AppTitle.vue";
import SoftSection from "../../../../components/Sections/SoftSection.vue";
import RecommendedProducts from "../../../../components/Sections/RecommendedProducts.vue";
import AppAlert from "../../../../components/App/AppAlert.vue";

const imageWithPoints = {
   imagePath: 'solution/pages/transport/truck.png',
   points: [
      {left: 8.5, top: 37, text: 'Фото-видео камера в кузов автомобиля'},
      {left: 24.5, top: 65, text: 'Датчик уровня топлива Италон'},
      {left: 28.5, top: 17, text: 'Трекер (модуль слежения Смарт)'},
      {left: 37.5, top: 44, text: 'Датчик температуры в рефрижераторе'},
      {left: 76, top: 60, text: 'Датчики давления в шинах'},
      {left: 94.5, top: 31, text: 'Датчик открытия дверей'},
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
   components: {
      AppAlert,
      RecommendedProducts, SoftSection, AppTitle, AppList, ImageWithMarkers, HeadImage, TextBlock, AppPage},
   setup() {
      useLoading()
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({992: 3, 568: 2, default: 1})

      return {image, imageWithPoints, features, soft, itemsPerRowFeatures}
   }
}
</script>

<style lang="scss" scoped>


</style>
