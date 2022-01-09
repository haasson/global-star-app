<template>
   <AppPage noOffset>
      <HeadImage
          :src="image"
          class="image"
          title="Делайте больше, уставайте меньше"
          titleType="simple"
      />

      <TextBlock>
         <p>Автоматическое вождение сельско-хозяйственной техники решает множество задач стоящих перед аграриями, а также позволяет сэкономить значительную часть средств на всех этапах работ. Наши решения разработаны для автоматизации рулевого управления тракторов, комбайнов и самоходных сельскохозяйственных машин и подходят более чем на 600 различных моделей
            с/х техники. </p>
      </TextBlock>

      <div>
         <AppTitle position="left">Система автоматического вождения позволяет</AppTitle>
         <TextWithImage image="solution/pages/autodrive/autodrive-features.png" imagePosition="left">
            <ul>
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
          itemsPerRow="3"
          title="Посев без использования системы автоматического вождения"
          titleSize="sm"
          bgColor="blue"
          bgType="half"
      />

      <HeadImage
          :src="imageAccurate"
          class="image"
          title="Необходимая точность для вашей культуры"
          titlePosition="left"
          titleType="simple"
      />

      <AppList
          type="empty"
          gap="5"
          :items="accurateImages"
          itemsPerRow="3"
          title="Сервисы коррекции позволяют работать с нужной точностью в любое время года"
          titleSize="sm"
      />

      <AppList
          type="simple"
          gap="14"
          :items="variants"
          itemsPerRow="3"
          title="Варианты решений"
          bgColor="blue"
          bgType="half"
      />


   </AppPage>
</template>

<script>
import image from "../../../../assets/images/solution/pages/autodrive/autodrive.jpg";
import imageAccurate from "../../../../assets/images/solution/pages/autodrive/accurate.jpg";
import HeadImage from "../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import AppPage from "../../../../components/App/AppPage.vue";
import AppTitle from "../../../../components/AppTitle.vue";
import TextWithImage from "../../../../components/Sections/TextWithImage.vue";
import AppList from "../../../../components/App/AppList.vue";

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
   {name: 'solution/pages/autodrive/variant1.png', title: 'Подруливающее устройство'},
   {name: 'solution/pages/autodrive/variant2.png', title: 'Гидравлический автопилот'},
   {name: 'solution/pages/autodrive/variant3.png', title: 'Электрический автопилот'},
]
export default {
name: "AutoDrive",
   components: {AppList, TextWithImage, AppTitle, AppPage, TextBlock, HeadImage},
   setup() {
      return {image, imageAccurate, examples, accurateImages, variants}
   }
}
</script>

<style lang="scss" scoped>

ul {
   list-style: disc;
   margin-left: 30px;
}
</style>
