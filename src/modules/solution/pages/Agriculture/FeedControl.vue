<template>
   <AppPage noOffset>
      <HeadImage :src="image"/>

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
          type="feature" gap="30"
          :items="features"
          itemsPerRow="4"
          multiline
      />

      <div class="dtm">
         <img class="image" src="../../../../assets/images/solution/pages/feed-control/image-dtm.jpg" alt="">
      </div>

      <AppList
          type="simple"
          gap="12"
          :items="systemItems"
          itemsPerRow="4"
          :imageHeight="110"
          title="Состав системы"
          bgColor="orange"
          bgType="half"
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
import AppTitle from "../../../../components/AppTitle.vue";
import SoftSection from "../../../../components/Sections/SoftSection.vue";
import AppAlert from "../../../../components/App/AppAlert.vue";

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
const soft = ['dtm', 'dtm-advanced']
export default {
name: "FeedControl",
   components: {AppAlert, SoftSection, AppTitle, AppList, TextBlock, HeadImage, AppPage},
   setup() {

      return {image, features, systemItems, soft}
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
