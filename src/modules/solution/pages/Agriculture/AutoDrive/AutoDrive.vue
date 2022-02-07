<template>
   <AppPage noOffset class="auto-drive-page">
      <HeadImage
          :src="image"
          class="image"
          title="Делайте больше, уставайте меньше"
          titleType="simple"
          pageName="Автоматическое вождение"
      />

      <TextBlock>
         <p>Автоматическое вождение сельско-хозяйственной техники решает множество задач стоящих перед аграриями, а также позволяет сэкономить значительную часть средств на всех этапах работ. Наши решения разработаны для автоматизации рулевого управления тракторов, комбайнов и самоходных сельскохозяйственных машин и подходят более чем на 600 различных моделей
            с/х техники. </p>
      </TextBlock>

      <div>
         <AppTitle position="left" :mobileBg="true">Система автоматического вождения позволяет</AppTitle>
         <TextWithImage image="solution/pages/autodrive/autodrive-features.png" imagePosition="left">
            <ul class="unordered-list">
               <li>Работать в условиях тумана, ночью, повышенной запыленности;</li>
               <li>Экономить посевной материал, ГСМ, средства химической защиты;</li>
               <li>Минимизирует усталость механизатора;</li>
               <li>Сокращает потери при внесении удобрений;</li>
               <li>Увеличивает урожай.</li>
            </ul>
         </TextWithImage>
      </div>

      <AppList
          type="empty"
          gap="5"
          :items="examples"
          :itemsPerRow="itemsPerRowFlow"
          :isSlider="itemsPerRowFlow === 1"
          title="Посев без использования системы автоматического вождения"
          titleSize="sm"
          :bgColor="width > 568 ? 'blue' : ''"
          bgType="half"
      />

      <HeadImage
          :src="imageAccurate"
          class="image secondary"
          title="Необходимая точность для вашей культуры"
          titlePosition="left"
          titleType="simple"
      />

      <AppList
          type="empty"
          gap="5"
          :items="accurateImages"
          :itemsPerRow="itemsPerRowAccurate"
          title="Сервисы коррекции позволяют работать с нужной точностью в любое время года"
          titleSize="sm"
      />

      <AppList
          type="simple"
          gap="14"
          :items="variants"
          :itemsPerRow="itemsPerRowVariants"
          :isSlider="width <= 700"
          title="Варианты решений"
          bgColor="blue"
          :bgType="width <= 700 ? 'full' : 'half'"
          class="variants-list"
      />


   </AppPage>
</template>

<script>
import image from "../../../../../assets/images/solution/pages/autodrive/autodrive.jpg";
import imageAccurate from "../../../../../assets/images/solution/pages/autodrive/accurate.jpg";
import HeadImage from "../../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import AppPage from "../../../../../components/App/AppPage.vue";
import AppTitle from "../../../../../components/AppTitle.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import AppList from "../../../../../components/App/AppList.vue";
import useWindowDimensions from "../../../../../composable/windowDimensions.js";
import useItemsPerRow from "../../../../../composable/itemsPerRow.js";

const examples = [
    {name: 'solution/pages/autodrive/example1.jpg'},
    {name: 'solution/pages/autodrive/example2.jpg'},
    {name: 'solution/pages/autodrive/example3.jpg'},
]
const accurateImages = [
   {name: 'solution/pages/autodrive/accurate-item1.png'},
   {name: 'solution/pages/autodrive/accurate-item2.png'},
   {name: 'solution/pages/autodrive/accurate-item3.png'},
]
const variants = [
   {name: 'solution/pages/autodrive/variant1.png', title: 'Подруливающее устройство', link: '/solution/agriculture/auto-drive/steering-device'},
   {name: 'solution/pages/autodrive/variant2.png', title: 'Гидравлический автопилот'},
   {name: 'solution/pages/autodrive/variant3.png', title: 'Электрический автопилот'},
]

export default {
name: "AutoDrive",
   components: {AppList, TextWithImage, AppTitle, AppPage, TextBlock, HeadImage},
   setup() {
      const {width} = useWindowDimensions()

      const {itemsPerRow: itemsPerRowFlow} = useItemsPerRow({568: 3, default: 1})
      const {itemsPerRow: itemsPerRowAccurate} = useItemsPerRow({480: 3, default: 1})
      const {itemsPerRow: itemsPerRowVariants} = useItemsPerRow({700: 3, default: 1})


      return {
         width,
         itemsPerRowFlow,
         itemsPerRowAccurate,
         itemsPerRowVariants,

         image,
         imageAccurate,
         examples,
         accurateImages,
         variants
      }
   }
}
</script>

<style lang="scss">
.auto-drive-page {
   @media(max-width: 700px) {
      .variants-list {
         padding-bottom: 10px;
      }
   }

   @media(max-width: 480px) {
      .image {
         &.secondary {
            display: none;
         }
      }
   }
}


</style>
