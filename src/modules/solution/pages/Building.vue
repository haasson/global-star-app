<template>
   <AppPage>
      <AppList
          :type="'solution'"
          :items="buildingContent"
          :itemsPerRow="3"
          :title="'Решения для строительства'"
          class="list-w-bg"
      />
   </AppPage>
</template>

<script>
import {buildingContent} from '../composable/solution'
import AppList from "../../../components/App/AppList.vue";
import AppPage from "../../../components/App/AppPage.vue";

export default {
   name: "Building",
   components: {AppPage, AppList},
   setup() {

      return {buildingContent}
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
}
</style>
