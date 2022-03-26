<template>
   <AppPage :topOffset="false" :bottomOffset="width > 992" class="main-page">
      <Swiper
          :slidesPerView="1"
          :pagination="{clickable: true}"
          :loop="true"
          :autoplay="{delay: 4000}"
          :speed="300"
          :initialSlide="1"
          :modules="modules"
          class="head-slider"
      >
         <SwiperSlide v-for="slide in slides" class="slide">
            <img :src="slide.component" alt="" class="image">
            <div class="slide-text" v-html="slide.text"></div>
         </SwiperSlide>
      </Swiper>

      <AppList
          type="simple"
          :gap="12"
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
             class="test-equipment"
             @onClick="openContactForm"
         >
            <p>Заполните форму и мы свяжемся с Вами, чтобы подобрать оборудование для пробной установки на Вашу технику.
               На всем протяжении периода тестирования наш технический отдел будет сопровождать Вас. Уже на пробном
               периоде тестирования большинство компаний ощущают экономический эффект от внедрения наших решений.</p>
         </TextWithImage>
      </div>


      <div :class="{'orange-block': width <= 992}">
         <AppTitle>Программные решения</AppTitle>

         <TextWithImage
             imagePosition="left"
             image="main/program-solutions.png"
             :button="{color: 'blue', text: 'Программные решения', to: 'program-solution'}"
         >
            <p>
               Здесь будет какой-то текст, описывающий, что такое программные решения, возможно для чего они нужны, и
               как они помогут бизнесу.
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
import {onMounted, ref} from "vue";
import {Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'
import useItemsPerRow from "../../composable/itemsPerRow.js";
import useWindowDimensions from "../../composable/windowDimensions.js";
import useModal from "../../composable/modal.js";
import useLoading from "../../composable/loading.js";
import useLocalImage from "../../composable/localImage.js";

import AppTitle from "../App/AppTitle.vue";
import TextWithImage from "../Sections/TextWithImage.vue";
import AppButton from "../App/AppButton.vue";
import AppPage from "../App/AppPage.vue";
import AppList from "../App/AppList.vue";


const slidesData = [
   {src: 'main/slider/1.jpg', text: 'Автоматическое вождение <br> высочайшего уровня'},
   {src: 'main/slider/2.jpg', text: 'Системы контроля <br> кормления КРС'},
   {src: 'main/slider/3.jpg', text: 'Курсоуказатели'},
   {src: 'main/slider/4.jpg', text: 'Мониторинг спецтехники'},
]

export default {
   name: "MainPage",
   components: {Swiper, SwiperSlide, AppList, AppPage, AppButton, TextWithImage, AppTitle},

   setup() {
      useLoading()
      const {width} = useWindowDimensions()

      const {itemsPerRow} = useItemsPerRow({992: 3, 568: 2, default: 1})
      const solutionItems = [
         {name: 'main/tractor.svg', text: 'Для сельского хозяйства', link: '/solution/agriculture'},
         {name: 'main/truck.svg', text: 'Для транспорта', link: '/solution/transport'},
         {name: 'main/excavator.svg', text: 'Для строительства', link: '/solution/building'},
      ]

      const {open: openContactForm} = useModal('contact')


      const slides = ref([])
      onMounted(() => {
         slidesData.forEach(slide => {
            const {imageSrc} = useLocalImage(slide.src)
            slides.value.push({component: imageSrc.value, text: slide.text})
         })
      })

      const modules = [Autoplay]

      return {width, slides, itemsPerRow, solutionItems, openContactForm, modules}
   }
}
</script>

<style lang="scss">
.main-page {
   .head-slider {
      max-width: 100%;
      margin-bottom: 0 !important;

      .slide {
         position: relative;
      }

      .image {
         width: 100%;
         height: 100%;
         max-height: 60vh;
         min-height: 180px;
         object-fit: cover;
         filter: brightness(.65);
      }

      .slide-text {
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%, -50%);
         width: 100%;
         padding: 20px;
         color: var(--white);
         font-size: 48px;
         line-height: 1.15;
         font-weight: 600;
         text-align: center;
         @media(max-width: 992px) {
            font-size: 36px;
         }
         @media(max-width: 768px) {
            font-size: 28px;
         }
         @media(max-width: 568px) {
            font-size: 22px;
         }
         @media(max-width: 568px) {
            font-size: 16px;
         }
      }
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
            box-shadow: 0 0 20px -6px black;
         }

         .image {
            max-width: 75px;
         }
      }
   }

   .orange-block {
      padding: 24px 0;
      background: var(--orange);
   }

   @media(max-width: 992px) {
      .test-equipment {
         margin: 0;

         .images {
            display: none;

         }
      }
   }
}

</style>
