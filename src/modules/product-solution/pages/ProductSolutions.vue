<template>
   <AppPage>
      <AppList
          title='Gurtam'
          type='soft'
          itemsPerRow="3"
          :items="programSolutions.gurtamPS"
          multiline
          class="list-w-bg"
      />

      <AppList
          title='DTM'
          type='soft'
          itemsPerRow="3"
          :items="programSolutions.dtmPS"
          multiline
          bgColor="orange"
          bgType="half"
      />

      <AppList
          title='AgLeader'
          type='soft'
          itemsPerRow="3"
          :items="programSolutions.agLeaderPS"
          multiline
          bgColor="orange"
          bgType="half"
      />
   </AppPage>
</template>

<script>
import AppList from "../../../components/App/AppList.vue";
import AppPage from "../../../components/App/AppPage.vue";
import appConfig from "../../../config/app.config.js";


export default {
   name: "ProductSolutions",
   components: {AppPage, AppList},

   setup() {
      const {programSolutions} = appConfig
      return {programSolutions}
   }
}
</script>

<style lang="scss" scoped>
.list-w-bg {
   padding: 40px 0 50px;
   background: linear-gradient(180deg,
       var(--orange) 0,
       var(--orange) calc(100% - 105px),
       transparent calc(100% - 105px),
       transparent 100%
   );
}
</style>
