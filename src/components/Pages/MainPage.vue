<template>
   <AppPage>
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
import AppTitle from "../AppTitle.vue";
import TextWithImage from "../Sections/TextWithImage.vue";
import AppButton from "../App/AppButton.vue";
import AppPage from "../App/AppPage.vue";

export default {
   name: "MainPage",
   components: {AppPage, AppButton, TextWithImage, AppTitle},

   setup() {
      return {}
   }
}
</script>
