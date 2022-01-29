<template>
   <AppPage noOffset>
      <HeadImage
          :src="image"
          class="image"
      />

      <TextBlock>
         <p>Подруливающее устройство SteadySteer подходит для автоматизации рулевого управления тракторов, комбайнов и самоходных сельскохозяйственных машин. Индивидуальные монтажные комплекты разработаны для 600 моделей техники,
            а запатентованная AgLeader Technology оригинальная схема крепления мотора позволяет за секунды переносить электрический мотор с техники на технику.
         </p>
      </TextBlock>

      <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>

      <AppList
          type="simple"
          gap="12"
          :items="systemItems"
          itemsPerRow="4"
          :imageHeight="180"
          title="Состав системы"
          bgColor="orange"
          bgType="half"
      />

      <AppTitle type="simple" position="left">SteadySteer</AppTitle>

      <TextWithImage image="solution/pages/autodrive/steady-steer.png" imagePosition="left">
         <p class="list-title">Особенности:</p>
         <ul>
            <li>Мотор с высоким крутящим моментом: справится с любой рулевой колонкой</li>
            <li>Перестановка с техники на технику за секунды</li>
            <li>Быстрый отклик и высокая точность</li>
            <li>Устанавливается практически на любую сельскохозяйственную технику</li>
         </ul>
      </TextWithImage>

      <AppTitle type="simple">SteerCommand Z2</AppTitle>

      <TextWithImage image="solution/pages/autodrive/steer-command.png">
         <p class="list-title">Особенности:</p>
         <ul>
            <li>Интеграция более чем с 600 моделями техники без конструктивных изменений</li>
            <li>Полная реализация потенциала точности приемника</li>
            <li>9-ти осевая компенсация неровностей</li>
         </ul>
      </TextWithImage>

      <div>
         <AppTitle position="left">Платные сигналы</AppTitle>
         <AppList
             type="signal" gap="30"
             :items="signals"
             itemsPerRow="4"
             multiline
         />
      </div>


      <AppAlert>Цена комплекта от 9300€</AppAlert>

   </AppPage>
</template>

<script>
import image from "../../../../../assets/images/solution/pages/autodrive/autodrive.jpg";
import AppPage from "../../../../../components/App/AppPage.vue";
import HeadImage from "../../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";
import AppList from "../../../../../components/App/AppList.vue";
import AppTitle from "../../../../../components/AppTitle.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import AppAlert from "../../../../../components/App/AppAlert.vue";

const imageWithPoints = {
   imagePath: 'solution/pages/autodrive/tractor-blu.png',
   points: [
      {left: 48, top: 2.5, text: 'Sensor1'},
      {left: 54, top: 23, text: 'Sensor2'},
      {left: 58.5, top: 33, text: 'Sensor3'},
      {left: 65.5, top: 27, text: 'Sensor4'},
   ]
}

const systemItems = [
   {name: `solution/pages/autodrive/system-item1.png`, text: 'Дисплей InCommand 800G'},
   {name: `solution/pages/autodrive/system-item2.png`, text: 'Навигационный приемник AgLeader 7500'},
   {name: `solution/pages/autodrive/system-item3.png`, text: 'Электромотор SteadySteer'},
   {name: `solution/pages/autodrive/system-item4.png`, text: 'Навигационный контроллер SteerCommand Z2'},
]

const signals = [
   {title: 'Terrastar L', period: '1 год', price: '650$'},
   {title: 'Terrastar C Pro', period: '3 месяца', price: '1320$'},
]

export default {
   name: "SteeringDevice",
   components: {AppAlert, AppTitle, TextWithImage, AppList, ImageWithMarkers, TextBlock, HeadImage, AppPage},
   setup() {
      return {image, imageWithPoints, systemItems, signals}
   }
}
</script>

<style lang="scss" scoped>
.list-title {
   margin-bottom: 10px;
}
ul {
   list-style: disc;
   margin-left: 30px;
}
</style>
