<template>
   <AppPage>
      <AppList
          :type="'solution'"
          :items="agricultureContent"
          :itemsPerRow="itemsPerRow"
          :title="'Решения для сельского хозяйства'"
          class="list-w-bg"
          multiline
      />
   </AppPage>
</template>

<script>
import useItemsPerRow from "../../../composable/itemsPerRow.js";
import useLoading from "../../../composable/loading.js";
import {agricultureContent} from '../composable/solution'

import AppList from "../../../components/App/AppList.vue";
import AppPage from "../../../components/App/AppPage.vue";

export default {
   name: "Agriculture",
   components: {AppPage, AppList},
   setup() {
      useLoading()

      const listSettings = {1200: 3, 640: 2, default: 1}
      const {itemsPerRow} = useItemsPerRow(listSettings)

      return {agricultureContent, itemsPerRow}
   }
}
</script>

<style lang="scss" scoped>
.list-w-bg {
   background: linear-gradient(180deg,
       transparent 0%,
       transparent 235px,
       var(--orange) 235px,
       var(--orange) 545px,
       transparent 545px,
       transparent 100%
   );
   @media(max-width: 768px) {
      background: none;
   }
}
</style>
