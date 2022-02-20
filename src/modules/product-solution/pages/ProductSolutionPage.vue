<template>
   <AppPage class="program-solution-page">
      <AppTitle position="left">{{ namePS }}</AppTitle>

      <TextWithImage image="program-solution/laptop.png" imagePosition="left">
         <h3 class="title">Система мониторинга в сельском хозяйстве</h3>
         <p class="text">
            Это простое, но эффективное решение для GPS мониторинга агросектора, позволяющее отслеживать полевые работы на основе телематических данных. Продукт снабжает работников и руководителей сельхозпредприятий прозрачными данными о полях, посевах и их обработках. Эффективно планируйте и оптимизируйте процессы в сельском хозяйстве с актуальной информацией обработки полей.
         </p>
      </TextWithImage>

      <AppList
          type="feature"
          :gap="width > 992 ? 50 : 20"
          :items="features"
          :itemsPerRow="itemsPerRowFeatures"
          multiline
      />

      <AppList
          type="simple"
          :gap="12"
          :items="systemItems"
          :itemsPerRow="itemsPerRowSystem"
          :isSlider="itemsPerRowSystem < 4"
          :imageHeight="110"
          title="Как работает система?"
          :bgColor="itemsPerRowSystem < 4 ? '' : 'orange'"
          :bgType="itemsPerRowSystem < 4 ? 'full' : 'half'"
      />

   </AppPage>
</template>

<script>
import appConfig from "../../../config/app.config.js";
import {features, systemItems} from '../data/product-solution-page.js'

import {useRoute} from "vue-router";
import useItemsPerRow from "../../../composable/itemsPerRow.js";
import useWindowDimensions from "../../../composable/windowDimensions.js";
import useLoading from "../../../composable/loading.js";

import AppPage from "../../../components/App/AppPage.vue";
import AppTitle from "../../../components/App/AppTitle.vue";
import TextWithImage from "../../../components/Sections/TextWithImage.vue";
import AppList from "../../../components/App/AppList.vue";



export default {
   name: "ProductSolutionPage",
   components: {AppList, TextWithImage, AppTitle, AppPage},

   setup() {
      useLoading()
      const {width} = useWindowDimensions()
      const route = useRoute()

      const namePS = appConfig.programSolutions.allPS.find(el => el.name === route.params.name).title

      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow({768: 2, default: 1})
      const {itemsPerRow: itemsPerRowSystem} = useItemsPerRow({992: 4, 768: 3, 568: 2, default: 1})

      return {namePS, features, systemItems, itemsPerRowFeatures, itemsPerRowSystem, width}
   }
}
</script>

<style lang="scss">
.program-solution-page {
   .title {
      margin-bottom: 8px;
      font-size: var(--article-text-size);
      font-weight: 600;
   }
   .text {
      font-size: var(--subtitle-size);
   }
   .list.simple {
      //.swiper-slide {
      //   padding: 0 0 25px;
      //}
      .card {
         padding-bottom: 50px;
      }
      .image-wrap {
         width: 65px;
         height: 65px;
         margin-bottom: 30px;
         border: 5px solid var(--orange)
      }
      .image {
         position: absolute;
         left: -12px;
         bottom: -7px;
         transform: scale(1.2);
      }
      .text {
         text-align: left;
         font-weight: 300;
         font-size: var(--text-size);
      }
   }
}

@media(max-width: 568px) {
   .program-solution-page {
      .list.simple {
         .card {
            padding: 32px 16px 70px 16px;
         }
         .text {
            font-size: 16px;
         }
      }
   }
}

</style>
