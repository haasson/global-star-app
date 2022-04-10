<template>
   <AppPage :topOffset="false" :bottomOffset="width > 992">
      <HeadImage :src="image" class="head-image" />
      <AppList
          title='Gurtam'
          type='soft'
          :itemsPerRow="itemsPerRow"
          :items="programSolutions.gurtamPS"
          multiline
          class="list-w-bg"
      />

      <AppList
          title='DTM'
          type='soft'
          :itemsPerRow="2"
          :items="programSolutions.dtmPS"
          bgColor="orange"
          :bgType="width < 1100 ? '' : 'half'"
          class="dtm"
      />

      <AppList
          title='AgLeader'
          type='soft'
          :itemsPerRow="2"
          :items="programSolutions.agLeaderPS"
          bgColor="orange"
          :bgType="width < 1100 ? 'full' : 'half'"
          class="agleader"
      />
   </AppPage>
</template>

<script>
import appConfig from "../../../config/app.config.js";
import useItemsPerRow from "../../../composable/itemsPerRow.js";
import useWindowDimensions from "../../../composable/windowDimensions.js";
import useLoading from "../../../composable/loading.js";

import image from '../../../assets/images/program-solution/head-image.jpg'
import AppList from "../../../components/App/AppList.vue";
import AppPage from "../../../components/App/AppPage.vue";
import HeadImage from "../../../components/Sections/HeadImage.vue";


export default {
   name: "ProductSolutions",
   components: {HeadImage, AppPage, AppList},

   setup() {
      useLoading()
      const {width} = useWindowDimensions()

      const {programSolutions} = appConfig
      const {itemsPerRow} = useItemsPerRow({1100: 3, default: 2})

      return {image, programSolutions, itemsPerRow, width}
   }
}
</script>

<style lang="scss" scoped>
.head-image {
   margin-bottom: 0 !important;
}

.list-w-bg {
   padding: 40px 0 50px;
   background: linear-gradient(180deg,
       var(--orange) 0,
       var(--orange) calc(100% - 105px),
       transparent calc(100% - 105px),
       transparent 100%
   );
   @media(max-width: 1100px) {
      background: var(--orange);
   }
   @media(max-width: 568px) {
      padding-top: 20px;
   }
}

.app-list-block.with-bg{
   padding-top: 0;
   &.agleader {
      padding-top: 20px;
      padding-bottom: 35px
   }
   &.dtm {
      padding-top: 20px;
      @media(max-width: 1100px) {
         padding-top: 0;
      }
   }
}
</style>
