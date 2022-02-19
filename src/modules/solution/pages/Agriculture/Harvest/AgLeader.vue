<template>
   <TextBlock>
      <p>Мониторинг урожайности необходим для выявления неравномерности урожая
         в пределах поля, что позволяет определить причину снижения урожайности
         в отдельных его частях. Линейка систем картографирования урожайности AgLeader славится точностью измерений и
         надежностью.</p>
   </TextBlock>

   <TextWithImage
       image="solution/pages/harvest/yield-map.png"
       imagePosition="left"
   >
      <p class="list-title">Карта урожайности отвечает на вопросы:</p>
      <ul class="unordered-list">
         <li>Какие участки поля принесли больше всего?</li>
         <li>Какие участки дали меньше всего?</li>
         <li>Почему?</li>
      </ul>
   </TextWithImage>

   <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

   <AppList
       type="simple"
       gap="12"
       :items="systemItems"
       :itemsPerRow="itemsPerRowSystem"
       :isSlider="itemsPerRowSystem < 5"
       :imageHeight="110"
       title="Состав системы"
       :bgColor="itemsPerRowSystem < 5 ? 'blue' : 'orange'"
       :bgType="itemsPerRowSystem < 5 ? 'full' : 'half'"
       class="system-section"
   />

   <div class="feature-section">
      <AppTitle position="left">Особенности системы</AppTitle>
      <AppList
          type="feature"
          :gap="width > 992 ? 25 : 10"
          :items="features"
          :itemsPerRow="itemsPerRowFeatures"
          multiline
      />
   </div>

   <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

   <SoftSection :items="soft" class="soft-section" />

   <AppAlert class="alert-section">Цена комплекта от 5600$</AppAlert>

</template>

<script>
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import AppTitle from "../../../../../components/App/AppTitle.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../../components/App/AppList.vue";
import AppAlert from "../../../../../components/App/AppAlert.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";
import useItemsPerRow from "../../../../../composable/itemsPerRow.js";

const basePath = 'solution/pages/harvest/'
const imageWithPoints = {
   imagePath: `${basePath}/combine.png`,
   points: [
      {left: 39, top: 17, text: 'Тензодатчик'},
      {left: 79, top: 26, text: 'Навигационный приемник AgLeader 7500'},
      {left: 42, top: 43, text: 'Монитор InCommand 800/1200'},
      {left: 80, top: 50, text: 'Модуль измерения влажности'},
      {left: 59, top: 58, text: 'Датчик положения жатки'},
   ]
}
const systemItems = [
   {name: `${basePath}/agleader/system-item1.png`, text: 'Дисплей InCommand 800/1200'},
   {name: `${basePath}/agleader/system-item2.png`, text: 'Навигационный приемник AgLeader 7500'},
   {name: `${basePath}/agleader/system-item3.jpg`, text: 'Тензо датчик'},
   {name: `${basePath}/agleader/system-item4.jpg`, text: 'Модуль измерения влажности'},
   {name: `${basePath}/agleader/system-item5.jpg`, text: 'Датчик положения жатки'},
]
const features = [
   {
      icon: {name: 'signedDocs', shift: {top: 4, left: -14}},
      text: 'Сбор данных о параметрах зерновой массы в реальном времени ',
   },
   {
      icon: {name: 'catalog', shift: {top: -8, left: 3}},
      text: 'Детализированные отчеты о намолоте',
   },
   {
      icon: {name: 'scheme', shift: {top: -6, left: 0}},
      text: 'Принятие решений о сортировке товарных партий зерна по влажности на ходу ',
   },
   {
      icon: {name: 'control', shift: {top: -1, left: -11}},
      text: 'Документирование ошибок управления посевом',
   },
   {
      icon: {name: 'cardsAndPen', shift: {top: -14, left: 3}},
      text: 'Оптимизация производительности и логистики уборочного процесса',
   },
   {
      icon: {name: 'gearAndTool', shift: {top: -9, left: 3}},
      text: 'Информация о переполнении и выгрузке бункера',
   },
]
const soft = ['finiti', 'sms']

export default {
   name: "AgLeader",
   components: {SoftSection, AppAlert, AppList, ImageWithMarkers, TextWithImage, AppTitle, TextBlock},

   setup() {
      const {itemsPerRow: itemsPerRowSystem} = useItemsPerRow({992: 5, 768: 3, 568: 2, default: 1})
      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({992: 3, 568: 2, default: 1})

      return {
         imageWithPoints,
         systemItems,
         features,
         soft,

         itemsPerRowSystem,
         itemsPerRowFeatures,

      }
   }
}
</script>

<style lang="scss" scoped>
.list-title {
   margin-bottom: 10px;
}

@media(max-width: 992px) {
   .alert-section,
   .soft-section {
      order: 2;
   }
   .system-section {
      order: 1;
   }
}
</style>
