<template>
   <AppPage>
      <AppList
          :type="'solution'"
          :items="transportContent"
          :itemsPerRow="itemsPerRow"
          :title="'Решения для транспорта'"
          class="list-w-bg"
          :multiline="itemsPerRow < 3"
      />
   </AppPage>
</template>

<script>
import {transportContent} from '../composable/solution'
import AppList from "../../../components/App/AppList.vue";
import AppPage from "../../../components/App/AppPage.vue";
import useWindowDimensions from "../../../composable/windowDimensions.js";
import {computed} from "vue";


export default {
   name: "Transport",
   components: {AppPage, AppList},
   setup() {
      const {width} = useWindowDimensions()
      const itemsPerRow = computed(() => {
         if (width.value > 1200) return 3
         if (width.value <= 1200 && width.value > 640) return 2
         return 1
      })

      return {transportContent, itemsPerRow}
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
   @media(max-width: 768px) {
      background: none;
   }
}

</style>
