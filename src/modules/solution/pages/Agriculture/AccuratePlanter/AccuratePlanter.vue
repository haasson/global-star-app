<template>
   <AppPage :topOffset="false">
      <HeadImage
          :src="image"
          class="image"
          pageName="Точный высев"
      />

      <TextBlock>
         <p>Правильное расположение семян спасает от взаимного угнетения растений и рационально использует площади. Просевы и двойники, нарушение нормы высева и глубины заделки невозможно исправить. Неконтролируемый сев приводит к 20% потерям ресурсов, снижается потенциал урожайности гибридов.</p>
      </TextBlock>

      <div>
         <AppTitle position="left">Решение подходит на сеялки</AppTitle>
         <TextWithImage image="solution/pages/accurate-planter/planter.png">
            <ul class="unordered-list">
               <li>Case IH 1200</li>
               <li>Harvest International Laser Pro 1</li>
               <li>John Deere ME2/ME2+/XP</li>
               <li>John Deere ME2/ME2+/XP Pro Shaft</li>
               <li>John Deere ME XP Pro/ME XP Pro Shaft</li>
               <li>John Deere ME5/ME5 Pro Shaft</li>
               <li>Kinze 3000/4900 Monosem Wide Linkage</li>
               <li>White 8000 Mechanical/Electric Drive</li>
               <li>White 8000 Mechanical/Electric Drive</li>

            </ul>
         </TextWithImage>
      </div>

      <AppList
          type="simple"
          :gap="14"
          :items="variants"
          :itemsPerRow="itemsPerRow"
          :isSlider="itemsPerRow === 1"
          title="Варианты решений"
          :bgColor="itemsPerRow === 1 ? 'blue' : 'orange'"
          :bgType="itemsPerRow === 1 ? 'full' : 'half'"
      />

     <SoftSection :items="soft" titlePosition="left" />


   </AppPage>
</template>

<script>
import useItemsPerRow from "../../../../../composable/itemsPerRow.js";
import useLoading from "../../../../../composable/loading.js";
import image from "../../../../../assets/images/solution/pages/accurate-planter/head-image.jpg";

import HeadImage from "../../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import AppPage from "../../../../../components/App/AppPage.vue";
import AppTitle from "../../../../../components/App/AppTitle.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import AppList from "../../../../../components/App/AppList.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";

const variants = [
   {name: 'solution/pages/accurate-planter/variant1.png', title: 'SureSpeed', link: "/solution/agriculture/accurate-planter/sure-speed"},
   {name: 'solution/pages/accurate-planter/variant2.png', title: 'SureDrive', link: "/solution/agriculture/accurate-planter/sure-drive"},
   {name: 'solution/pages/accurate-planter/variant3.png', title: 'SureForce', link: "/solution/agriculture/accurate-planter/sure-force"},
]
const soft = ['finiti', 'sms']

export default {
name: "AccuratePlanter",
   components: {SoftSection, AppList, TextWithImage, AppTitle, AppPage, TextBlock, HeadImage},
   setup() {
      useLoading()
      const {itemsPerRow} = useItemsPerRow({768: 3, default: 1})

      return {image, variants, soft, itemsPerRow}
   }
}
</script>

<style lang="scss" scoped>

</style>
