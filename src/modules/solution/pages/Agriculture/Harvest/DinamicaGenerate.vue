<template>

   <TextBlock>
      <p>Инфракрасный анализатор кормов NIR компании Dinamica Generale устанавливается на любой кормоуборочный комбайн и в режиме реального времени позволяет оценить качество зеленой массы, а также принять необходимые административные решения.</p>
   </TextBlock>

   <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

   <AppList
       type="simple"
       gap="12"
       :items="systemItems"
       :itemsPerRow="itemsPerRowSystem"
       :isSlider="itemsPerRowSystem < 5"
       :imageHeight="110"
       title="Состав системы"
       bgColor="orange"
       :bgType="itemsPerRowSystem < 5 ? 'full' : 'half'"
   />

   <div>
      <AppTitle position="left">Особенности системы</AppTitle>
      <AppList
          type="feature" gap="25"
          :items="features"
          :itemsPerRow="itemsPerRowFeatures"
          multiline
      />
   </div>

   <AppAlert class="alert-small" size="small">* Для более подробного ознакомления с данным решением, рекомендуем вам воспользоваться полной версией сайта.</AppAlert>

   <SoftSection :items="soft" />

   <AppAlert>Цена комплекта от 22873€</AppAlert>

</template>

<script>
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../../components/App/AppList.vue";
import AppTitle from "../../../../../components/AppTitle.vue";
import AppAlert from "../../../../../components/App/AppAlert.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";
import useItemsPerRow from "../../../../../composable/itemsPerRow.js";

const basePath = 'solution/pages/harvest/'
const imageWithPoints = {
   imagePath: `${basePath}/combine.png`,
   points: [
      {left: 40, top: 29, text: 'Дисплей Nir On Board'},
      {left: 79, top: 37, text: 'БИК анализатор Evo NIR'},
      {left: 43, top: 55, text: 'Модем'},
      {left: 48, top: 54, text: 'GPS антенна'},
   ]
}

const systemItems = [
   {name: `${basePath}/dinamica-generale/system-item1.png`, text: 'Дисплей Nir On Board'},
   {name: `${basePath}/dinamica-generale/system-item2.png`, text: 'БИК анализатор Evo NIR'},
   {name: `${basePath}/dinamica-generale/system-item3.png`, text: 'Модем'},
   {name: `${basePath}/dinamica-generale/system-item4.png`, text: 'GPS антенна'},
]

const features = [
   {
      icon: {name: 'flower', shift: {top: 4, left: -13}},
      text: 'Определение химических показателей зеленной массы (влажность, крахмал, протеин, зола, клетчатка, сырой жир)',
   },
   {
      icon: {name: 'scheme', shift: {top: -5, left: 3}},
      text: 'Внесение консервантов в зависимости от качества зеленной массы',
   },
   {
      icon: {name: 'cardsAndPen', shift: {top: -11, left: 3}},
      text: 'Управление размером резки в зависимости от содержания сухого вещества в зеленной массе',
   },
]
const soft = ['field-trace']

export default {
   name: "DinamicaGenerate",
   components: {SoftSection, AppAlert, AppTitle, AppList, ImageWithMarkers, TextBlock},

   setup() {
      const {itemsPerRow: itemsPerRowSystem} = useItemsPerRow({992: 4, 768: 3, 568: 2, default: 1})
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

</style>
