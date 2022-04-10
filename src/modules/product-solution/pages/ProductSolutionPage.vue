<template>
   <AppPage class="program-solution-page" :bottomOffset="false">
      <AppTitle position="left">{{ title }}</AppTitle>

      <TextWithImage :image="about.img" imagePosition="left">
         <h3 class="title" v-html="about.title" />
         <p class="text" v-html="about.text" />
      </TextWithImage>

      <AppList
          type="feature"
          :gap="width > 992 ? 50 : 20"
          :items="features"
          :itemsPerRow="itemsPerRowFeatures"
          multiline
      />

      <div v-for="(instance, index) in systemItems">
         <AppTitle
             v-if="instance.title"
             type="simple"
             :position="index % 2 === 0 ? 'right' : 'left'"
         >
            {{instance.title}}
         </AppTitle>

         <PageSection
             v-if="instance.description"
             :class="['description', {right: index % 2}]"
         >
            <b v-html="instance.description.subtitle" />
            <p v-html="instance.description.text" />
         </PageSection>

         <AppList
             type="simple"
             :gap="itemsPerRowSystem < instance.items.length ? 0 : 15"
             :items="instance.items"
             :itemsPerRow="itemsPerRowSystem"
             :isSlider="itemsPerRowSystem < 4"
             :imageHeight="110"
             :title="instance.listTitle || 'Как работает система?'"
             :bgColor="itemsPerRowSystem < 4 ? '' : 'orange'"
             :bgType="itemsPerRowSystem < 4 ? 'full' : 'half'"
         />
      </div>


      <div class="form-wrap">
         <ContactForm short title="Заполните заявку для начала работы с системой" />
      </div>
   </AppPage>
</template>

<script>
import data from '../data'

import {useRoute} from "vue-router";
import useItemsPerRow from "../../../composable/itemsPerRow.js";
import useWindowDimensions from "../../../composable/windowDimensions.js";
import useLoading from "../../../composable/loading.js";
import {toCamelCase} from "../../../helpers/interface.js";

import AppPage from "../../../components/App/AppPage.vue";
import AppTitle from "../../../components/App/AppTitle.vue";
import TextWithImage from "../../../components/Sections/TextWithImage.vue";
import AppList from "../../../components/App/AppList.vue";
import ContactForm from "../../../components/App/ContactForm.vue";
import PageSection from "../../../components/Providers/PageSection.vue";



export default {
   name: "ProductSolutionPage",
   components: {PageSection, ContactForm, AppList, TextWithImage, AppTitle, AppPage},

   setup() {
      useLoading()
      const {width} = useWindowDimensions()
      const route = useRoute()

      const {title, about, features, featuresBreakPoints, systemItems} = data[toCamelCase(route.params.name)]

      const {itemsPerRow: itemsPerRowFeatures} = useItemsPerRow(featuresBreakPoints || {768: 2, default: 1})
      const {itemsPerRow: itemsPerRowSystem} = useItemsPerRow({992: 4, 768: 3, 568: 2, default: 1})

      return {
         width,

         title,
         about,
         features,
         systemItems,

         itemsPerRowFeatures,
         itemsPerRowSystem,
      }
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
   .description {
      max-width: 730px;
      margin: 20px 0 40px;
      line-height: 1.15;
      &.right {
         margin-left: auto;
         text-align: right;
      }

      b {
         display: block;
         margin-bottom: 5px;
         font-size: var(--article-text-size);
      }
      p {
         font-size: var(--subtitle-size);
      }
   }

   .form-wrap {
      display: flex;
      justify-content: center;
      padding: 20px 10px 100px;
      background: var(--blue);
      color: var(--white);
      @media(max-width: 992px) {
         padding-bottom: 40px;
      }
      @media(max-width: 480px) {
         padding-bottom: 20px;
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
