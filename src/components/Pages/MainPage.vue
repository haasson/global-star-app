<template>
   <AppPage :topOffset="false" class="main-page">
      <HeadImage
          :src="image"
          class="image"
          titleType="simple"
      />

      <AppList
          type="simple"
          gap="12"
          :items="solutionItems"
          :itemsPerRow="itemsPerRow"
          :isSlider="itemsPerRow < 3"
          title="Выберите готовое решение"
          bgColor="orange"
          :bgType="itemsPerRow < 3 ? 'full' : 'half'"
      />

      <div>
         <AppTitle position="left">Тестирование оборудования</AppTitle>

         <TextWithImage
             image="main/equipment.png"
             :button="{color: 'blue', text: 'Оставить заявку'}"
         >
            <p>Заполните форму и мы свяжемся с Вами, чтобы подобрать оборудование для пробной установки на Вашу технику. На всем протяжении периода тестирования наш технический отдел будет сопровождать Вас. Уже на пробном периоде тестирования большинство компаний ощущают экономический эффект от внедрения наших решений.</p>
         </TextWithImage>
      </div>


      <div>
         <AppTitle>Программные решения</AppTitle>

         <TextWithImage
             imagePosition="left"
             image="main/program-solutions.png"
             :button="{color: 'blue', text: 'Программные решения', to: 'program-solution'}"
         >
            <p>
               Здесь будет какой-то текст, описывающий, что такое программные решения, возможно для чего они нужны, и как они помогут бизнесу.
            </p>
            <p>
               Чтобы прочитать подробнее можно кликнуть на этот блок, либо сделать ссылку читать далее...
            </p>
            <p>
               Так же можно сделать кнопку “перейти к программным решениям”
            </p>
         </TextWithImage>
      </div>
   </AppPage>
</template>

<script>
import image from "../../assets/images/solution/pages/navigation/navigation.jpg";

import AppTitle from "../App/AppTitle.vue";
import TextWithImage from "../Sections/TextWithImage.vue";
import AppButton from "../App/AppButton.vue";
import AppPage from "../App/AppPage.vue";
import HeadImage from "../Sections/HeadImage.vue";
import AppList from "../App/AppList.vue";
import useItemsPerRow from "../../composable/itemsPerRow.js";


export default {
   name: "MainPage",
   components: {AppList, HeadImage, AppPage, AppButton, TextWithImage, AppTitle},

   setup() {
      const {itemsPerRow} = useItemsPerRow({992: 3, 568: 2, default: 1})
      const solutionItems = [
         {name: 'main/tractor.svg', text: 'Для сельского хозяйства', link: '/solution/agriculture'},
         {name: 'main/truck.svg', text: 'Для транспорта', link: '/solution/transport'},
         {name: 'main/excavator.svg', text: 'Для строительства', link: '/solution/building'},
      ]

      return {image, itemsPerRow, solutionItems}
   }
}
</script>

<style lang="scss">
.main-page {
   div.image {
      margin-bottom: 0;
   }
   .list.simple {
      .card {
         .text {
            order: -1;
            margin: 0 0 30px 0;
         }
         .image-wrap {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            box-shadow: 0px 0px 20px -6px black;
         }
         .image {
            max-width: 75px;
         }
      }
   }
}

</style>
