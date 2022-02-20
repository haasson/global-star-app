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
import useLoading from "../../../composable/loading.js";
import useItemsPerRow from "../../../composable/itemsPerRow.js";

import {transportContent} from '../composable/solution'
import AppList from "../../../components/App/AppList.vue";
import AppPage from "../../../components/App/AppPage.vue";

export default {
   name: "Transport",
   components: {AppPage, AppList},
   setup() {
      useLoading()
      const {itemsPerRow} = useItemsPerRow({1200: 3, 640: 2, default: 1})

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
   @media(max-width: 1200px) {
      padding-bottom: 0;
   }
   @media(max-width: 768px) {
      background: none;
   }
}

</style>
