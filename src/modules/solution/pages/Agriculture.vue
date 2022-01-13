<template>
   <AppPage>
      <AppList
          :type="'solution'"
          :items="agricultureContent"
          :itemsPerRow="3"
          :title="'Решения для сельского хозяйства'"
          class="list-w-bg"
          multiline
      />
   </AppPage>
</template>

<script>
import {agricultureContent} from '../composable/solution'
import AppList from "../../../components/App/AppList.vue";
import AppPage from "../../../components/App/AppPage.vue";

export default {
   name: "Agriculture",
   components: {AppPage, AppList},
   setup() {

      return {agricultureContent}
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
}
</style>
