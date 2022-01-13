<template>
   <AppPage>
      <RouterView v-if="inCategory" />

      <AppList
          v-else
          :type="'product'"
          :items="transportContent"
          :itemsPerRow="2"
          :title="'Для транспорта'"
          class="list-w-bg"
          multiline
      />
   </AppPage>
</template>

<script>
import {ref} from 'vue'
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {transportContent} from '../composable/products'

import AppPage from "../../../components/App/AppPage.vue";
import AppList from "../../../components/App/AppList.vue";

export default {
   name: "Transport",
   components: {AppList, AppPage},
   setup() {
      const route = useRoute()
      const inCategory = ref(route?.params?.id)
      onBeforeRouteUpdate((to, from, next) => {
         inCategory.value = to.params.id
         next()
      })

      transportContent.forEach(item => item.link = { name: 'catalogList2', params: { id: item.name }})


      return {inCategory, transportContent}
   }
}
</script>

<style lang="scss" scoped>
.list-w-bg {
   background: linear-gradient(180deg,
       transparent 0%,
       transparent 215px,
       var(--orange) 215px,
       var(--orange) 545px,
       transparent 545px,
       transparent 100%
   );
}

</style>
