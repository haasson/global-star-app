<template>

   <TextBlock>
      <p>Весовые системы на бункеры - перегрузчики доказали свою эффективность при  определении урожайности поля, а также контроле транспортировки зерновых культур от поля до склада. Погрешность измерения составляет менее 1% с партии. Все проводимые измерения доступны на бумажном или в цифровом формате.</p>
   </TextBlock>

   <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

   <AppList
       type="simple"
       :gap="12"
       :items="systemItems1"
       :itemsPerRow="itemsPerRowSystem1"
       :isSlider="itemsPerRowSystem1 < 2"
       :imageHeight="280"
       title="Состав системы №1"
       :bgColor="itemsPerRowSystem1 < 5 ? 'blue' : 'orange'"
       :bgType="itemsPerRowSystem1 < 2 ? 'full' : 'half'"
   />

   <div>
      <AppTitle position="left">Особенности системы</AppTitle>
      <AppList
          type="feature"
          :gap="width > 992 ? 25 : 10"
          :items="features1"
          :itemsPerRow="itemsPerRowFeatures1"
          multiline
      />
   </div>

   <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

   <AppList
       type="simple"
       :gap="12"
       :items="systemItems2"
       :itemsPerRow="itemsPerRowSystem2"
       :isSlider="itemsPerRowSystem1 < 3"
       :imageHeight="220"
       title="Состав системы №2"
       :bgColor="itemsPerRowSystem1 < 5 ? 'blue' : 'orange'"
       :bgType="itemsPerRowSystem1 < 3 ? 'full' : 'half'"
   />

   <div>
      <AppTitle position="left">Особенности системы</AppTitle>
      <AppList
          type="feature"
          :gap="width > 992 ? 25 : 10"
          :items="features2"
          :itemsPerRow="itemsPerRowFeatures2"
          multiline
      />
   </div>

   <SoftSection :items="soft" />

   <AppAlert>Цена комплекта от 1200€</AppAlert>

</template>

<script>
import useItemsPerRow from "../../../../../composable/itemsPerRow.js";
import useLoading from "../../../../../composable/loading.js";
import useWindowDimensions from "../../../../../composable/windowDimensions.js";

import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../../components/App/AppList.vue";
import AppTitle from "../../../../../components/App/AppTitle.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";
import AppAlert from "../../../../../components/App/AppAlert.vue";

const basePath = 'solution/pages/harvest/'
const imageWithPoints = {
   imagePath: `${basePath}/tractor.png`,
   points: [
      {left: 23, top: 25, text: 'Облачный сервис Field Scale'},
      {left: 26, top: 21, text: 'Коммутационный контролер KALI'},
      {left: 26.5, top: 31, text: 'Сенсорный дисплей'},
      {left: 30, top: 31, text: 'Чековый принтер'},
      {left: 76, top: 55, text: 'Терминал DG 400'},
   ]
}
const systemItems1 = [
   {name: `${basePath}/bunkers-reloader/system-item1.png`, text: 'Терминал DG 400'},
   {name: `${basePath}/bunkers-reloader/system-item2.png`, text: 'Чековый принтер'},
]

const features1 = [
   {
      icon: {name: 'screw', shift: {top: 4, left: 5}},
      text: 'Фиксирование загрузки, выгрузки и общий вес в прицепе',
   },
   {
      icon: {name: 'computersmall', shift: {top: 9, left: 3}},
      text: 'Вывод информации о загрузках и выгрузках на чековый принтер',
   },
]

const systemItems2 = [
   {name: `${basePath}/bunkers-reloader/system-item3.png`, text: 'Облачный сервис Field Trace'},
   {name: `${basePath}/bunkers-reloader/system-item4.png`, text: 'Коммутационный контролер KALI'},
   {name: `${basePath}/bunkers-reloader/system-item5.png`, text: 'Сенсорный дисплей'},
]

const features2 = [
   {
      icon: {name: 'identify', shift: {top: 4, left: -14}},
      text: 'Сбор данных о параметрах зерновой массы в реальном времени ',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 3}},
      text: 'Детализированные отчеты о намолоте',
   },
   {
      icon: {name: 'tractor', shift: {top: -6, left: 0}},
      text: 'Принятие решений о сортировке товарных партий зерна по влажности на ходу ',
   },
   {
      icon: {name: 'apple', shift: {top: -1, left: -11}},
      text: 'Документирование ошибок управления посевом',
   },
   {
      icon: {name: 'identify', shift: {top: -14, left: 3}},
      text: 'Оптимизация производительности и логистики уборочного процесса',
   },
   {
      icon: {name: 'computersmall', shift: {top: 5, left: 3}},
      text: 'Информация о переполнении и выгрузке бункера',
   },
]

const soft = ['field-trace']

export default {
   name: "BunkerReloader",
   components: {AppAlert, SoftSection, AppTitle, AppList, ImageWithMarkers, TextBlock},
   setup() {
      const {width} = useWindowDimensions()
      useLoading()

      const {itemsPerRow: itemsPerRowSystem1} = useItemsPerRow({568: 2, default: 1})
      const {itemsPerRow: itemsPerRowFeatures1} = useItemsPerRow({568: 2, default: 1})
      const {itemsPerRow: itemsPerRowSystem2} = useItemsPerRow({768: 3, 568: 2, default: 1})
      const {itemsPerRow: itemsPerRowFeatures2} = useItemsPerRow({568: 2, default: 1})


      return {
         width,

         imageWithPoints,
         systemItems1,
         features1,
         systemItems2,
         features2,
         soft,

         itemsPerRowSystem1,
         itemsPerRowFeatures1,
         itemsPerRowSystem2,
         itemsPerRowFeatures2
      }
   }
}
</script>

<style lang="scss" scoped>

</style>
