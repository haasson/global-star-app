<template>
   <AppPage :topOffset="false">
      <HeadImage :src="image"
                 pageName="3D система для экскаватора"/>

      <TextBlock>
         <p>Система используется для дорог, трасс, дамб, обширных земляных работ.
            <br>При сооружении отвалов, карьеров, подготовке стройплощадок, проведении подземных коммуникации, углублении дна.</p>
      </TextBlock>

      <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

      <AppTitle position="left">Особенности системы</AppTitle>
      <AppList
          type="feature"
          :gap="width > 992 ? 25 : 10"
          :items="features"
          :itemsPerRow="itemsPerRowFeatures"
          multiline
          justify="flex-start"
      />

      <AppGallery :slides="slides"/>

      <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

      <SoftSection :items="soft" titlePosition="left" />

      <AppAlert>Цена комплекта от 19000$</AppAlert>
   </AppPage>
</template>

<script>
import useItemsPerRow from "../../../../composable/itemsPerRow.js";
import useLoading from "../../../../composable/loading.js";

import image from "../../../../assets/images/solution/pages/3d-system/head-image.jpg";
import AppPage from "../../../../components/App/AppPage.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import ImageWithMarkers from "../../../../components/Sections/ImageWithMarkers.vue";
import AppTitle from "../../../../components/App/AppTitle.vue";
import AppList from "../../../../components/App/AppList.vue";
import AppGallery from "../../../../components/App/AppGallery.vue";
import AppAlert from "../../../../components/App/AppAlert.vue";
import SoftSection from "../../../../components/Sections/SoftSection.vue";

const imageWithPoints = {
   imagePath: 'solution/pages/3d-system/excavator.png',
   points: [
      // {left: 8, top: 31, text: 'Sensor1'},
      // {left: 25, top: 81.5, text: 'Sensor2'},
      {left: 48, top: 28, text: 'Датчик положения стрелы'},
      {left: 63, top: 62.5, text: 'WiFi камера в&nbsp;кабину'},
      {left: 64.5, top: 48, text: 'Навигационный контролер'},
      {left: 70, top: 68, text: 'Считыватель карточек водителя'},
      {left: 90.5, top: 59, text: 'Датчик уровня топлива'},
   ]
}

const features = [
   {
      icon: {name: 'ruler', shift: {top: -12, left: -6}},
      text: 'Работа с фиксированным уклоном',
   },
   {
      icon: {name: 'monitor', shift: {top: -5, left: 4}},
      text: 'Обмен информации между оборудованием и офисом',
   },
   {
      icon: {name: 'controller', shift: {top: -12, left: 5}},
      text: 'Контроль глубины выемки грунта',
   },
   {
      icon: {name: 'rulerandpen', width:78, shift: {top: -8, left: -8}},
      text: 'Точность работы до 1 см',
   },
   {
      icon: {name: 'level', width:78, shift: {top: -1, left: -11}},
      text: 'Выравнивание местности',
   },
   {
      icon: {name: 'map', shift: {top: 2, left: -13}},
      text: 'Загрузка 3d карт из сторонних приложений (AutoCAD)',
   },
]

const slides = [
   '../../assets/images/solution/pages/3d-system/1.jpg',
   '../../assets/images/solution/pages/3d-system/2.jpg',
   '../../assets/images/solution/pages/3d-system/3.jpg',
   '../../assets/images/solution/pages/3d-system/2.jpg',
   '../../assets/images/solution/pages/3d-system/3.jpg',
]

const soft = ['fleetrun', 'wialon']

export default {
   name: "3d-system",
   components: {SoftSection, AppAlert, AppGallery, AppList, AppTitle, ImageWithMarkers, TextBlock, HeadImage, AppPage},
   setup() {
      useLoading()
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({568: 2, default: 1})

      return {image, imageWithPoints, features, slides, soft, itemsPerRowFeatures}
   }
}
</script>

<style lang="scss" scoped>

</style>
