<template>
   <AppPage>
      <RouterView v-if="inCategory" />
      <AppList
          v-else
          :type="'product'"
          :items="agricultureContent"
          :itemsPerRow="3"
          :title="'Для сельского хозяйства'"
          class="list-w-bg"
          multiline
      />
   </AppPage>
</template>

<script>
import {agricultureContent} from '../composable/products'
import AppPage from "../../../components/App/AppPage.vue";
import AppList from "../../../components/App/AppList.vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {ref} from "vue";
export default {
name: "Agriculture",
   components: {AppList, AppPage},

   setup() {
      const route = useRoute()
      const inCategory = ref(route?.params?.id)
      onBeforeRouteUpdate((to, from, next) => {
         inCategory.value = to.params.id
         next()
      })

      agricultureContent.forEach(item => item.link = { name: 'catalogList1', params: { id: item.name }})

      return {agricultureContent, inCategory}
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
