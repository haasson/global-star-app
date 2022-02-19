<template>
   <AppPage :topOffset="false">
      <HeadImage :src="image"
                 pageName="Контроль кормления КРС"/>

      <TextBlock>
         <p class="first">
            Внедрение системы контроля приготовления и раздачи
         рациона даст возможность скормить животному именно
         тот рацион, который был задан специалистом по кормлению. А в конечном итоге вы сможете увеличить надой молока.
         </p>
         <p>
            Суть технологии состоит в загрузке и перемешивании
         различных составляющих ОСР или ПКС (полнорационной кормовой смеси) именно в тех количествах, которые
         заданы зоотехником. Соотношение компонентов рассчитывается зоотехником в соответствии с питательными
         потребностями конкретной категории животных.
         </p>
      </TextBlock>

      <AppList
          type="feature"
          :gap="width > 992 ? 30 : 10"
          :items="features"
          :itemsPerRow="itemsPerRowFeatures"
          multiline
      />

      <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

      <div v-if="width > 568"  class="dtm">
         <img class="image" src="../../../../assets/images/solution/pages/feed-control/image-dtm.jpg" alt="">
      </div>

      <AppList
          type="simple"
          gap="12"
          :items="systemItems"
          :itemsPerRow="itemsPerRowSystem"
          :isSlider="itemsPerRowSystem < 4"
          :imageHeight="110"
          title="Состав системы"
          :bgColor="itemsPerRowSystem < 4 ? 'blue' : 'orange'"
          :bgType="itemsPerRowSystem < 4 ? 'full' : 'half'"
      />

      <AppTitle v-if="width <= 992">Работа системы</AppTitle>

      <AppList
          type="video"
          gap="10"
          :items="videoItems"
          :itemsPerRow="itemsPerRowVideo"
          :isSlider="itemsPerRowVideo < 4"
          :bgColor="itemsPerRowVideo < 3 ? '' : 'blue'"
          bgType="full"
      />

      <SoftSection :items="soft" titlePosition="left" />

      <AppAlert>Цена комплекта от 3990€</AppAlert>
   </AppPage>
</template>

<script>
import image from "../../../../assets/images/solution/pages/feed-control/head-image.jpg";

import AppPage from "../../../../components/App/AppPage.vue";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import AppList from "../../../../components/App/AppList.vue";
import AppTitle from "../../../../components/App/AppTitle.vue";
import SoftSection from "../../../../components/Sections/SoftSection.vue";
import AppAlert from "../../../../components/App/AppAlert.vue";
import useItemsPerRow from "../../../../composable/itemsPerRow.js";
import useWindowDimensions from "../../../../composable/windowDimensions.js";
import AppModal from "../../../../components/Modals/AppModal.vue";
import VideoSection from "../../../../components/Sections/VideoSection.vue";

const basePath = 'solution/pages/feed-control/'
const features = [
   {
      icon: {name: 'wallet', shift: {top: -9, left: -5}},
      text: 'Экономия на кормах',
   },
   {
      icon: {name: 'identify', shift: {top: 3, left: 2}},
      text: 'Контроль за работой механизатора',
   },
   {
      icon: {name: 'water', shift: {top: 9, left: -6}},
      text: 'Увеличение надоев',
   },
   {
      icon: {name: 'signeddocs', shift: {top: -4, left: 4}},
      text: 'Учет кормов',
   },
]
const systemItems = [
   {name: `${basePath}/system-item1.png`, text: 'Весовой микрокомпьютер DG600'},
   {name: `${basePath}/system-item2.png`, text: 'Пульт дистанционного управления'},
   {name: `${basePath}/system-item3.png`, text: 'Дублирующее табло'},
   {name: `${basePath}/system-item4.png`, text: 'Комплект ПО DTM'},
]
const videoItems = [
   {src: 'feed1.mp4', poster: 'solution/cards/posters/feed1.jpg'},
   {src: 'feed2.mp4', poster: 'solution/cards/posters/feed2.jpg'},
   {src: 'feed3.mp4', poster: 'solution/cards/posters/feed3.jpg'},
]
const soft = ['dtm', 'dtm-advanced']

export default {
name: "FeedControl",
   components: {VideoSection, AppModal, AppAlert, SoftSection, AppTitle, AppList, TextBlock, HeadImage, AppPage},
   setup() {
      const {width} = useWindowDimensions()
      const {itemsPerRow: itemsPerRowSystem} = useItemsPerRow({992: 4, 768: 3, 568: 2, default: 1})
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({992: 4, 568: 2, default: 1})
      const {itemsPerRow: itemsPerRowVideo} = useItemsPerRow({992: 3, 568: 2, default: 1})


      return {
         image,
         features,
         systemItems,
         videoItems,
         soft,

         width,
         itemsPerRowFeatures,
         itemsPerRowSystem,
         itemsPerRowVideo,
      }
   }
}
</script>

<style lang="scss" scoped>
.first {
   margin-bottom: 20px;
}
.image{
   margin: 0 auto;
   box-shadow: var(--image-shadow);
}
</style>
