<template>
   <AppPage>
      <AppList
          :type="'solution'"
          :items="buildingContent"
          :itemsPerRow="itemsPerRow"
          :title="'Решения для строительства'"
          class="list-w-bg"
          :multiline="itemsPerRow < 3"
      />
   </AppPage>
</template>

<script>
import {computed} from "vue";
import useWindowDimensions from "../../../composable/windowDimensions.js";
import useLoading from "../../../composable/loading.js";
import {buildingContent} from '../composable/solution'

import AppList from "../../../components/App/AppList.vue";
import AppPage from "../../../components/App/AppPage.vue";

export default {
   name: "Building",
   components: {AppPage, AppList},
   setup() {
      useLoading()

      const {width} = useWindowDimensions()
      const itemsPerRow = computed(() => {
         if (width.value > 1200) return 3
         if (width.value <= 1200 && width.value > 640) return 2
         return 1
      })

      return {buildingContent, itemsPerRow}
   }
}
</script>

<style lang="scss" scoped>
.list-w-bg {
   background: linear-gradient(180deg,
       transparent 0%,
       transparent 235px,
       var(--orange) 235px,
       var(--orange) 565px,
       transparent 565px,
       transparent 100%
   );
   padding-bottom: 90px;
   @media(max-width: 1200px) {
      padding-bottom: 0;
   }
   @media(max-width: 768px) {
      background: none;
   }
}
</style>
