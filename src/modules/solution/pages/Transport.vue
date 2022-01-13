<template>
   <AppPage>
      <AppList
          :type="'solution'"
          :items="transportContent"
          :itemsPerRow="3"
          :title="'Решения для транспорта'"
          class="list-w-bg"
      />
   </AppPage>
</template>

<script>
import {transportContent} from '../composable/solution'
import AppList from "../../../components/App/AppList.vue";
import AppPage from "../../../components/App/AppPage.vue";

export default {
   name: "Transport",
   components: {AppPage, AppList},
   setup() {

      return {transportContent}
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
