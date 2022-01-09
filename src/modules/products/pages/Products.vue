<template>
   <AppPage>
      <AppList
          :type="'product'"
          :items="agricultureContent"
          :itemsPerRow="3"
          :title="'Для сельского хозяйства'"
          class="list-w-bg"
          multiline
      />

      <AppList
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
import AppList from "../../../components/App/AppList.vue";
import {agricultureContent, transportContent} from '../composable/products'
import AppPage from "../../../components/App/AppPage.vue";
export default {
   name: "Products",
   components: {AppPage, AppList},
   setup() {
      agricultureContent.forEach(item => item.link = { name: 'catalogList', params: { id: item.name }})
      transportContent.forEach(item => item.link = { name: 'catalogList', params: { id: item.name }})

      return {agricultureContent, transportContent}
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
