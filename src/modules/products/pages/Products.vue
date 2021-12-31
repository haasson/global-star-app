<template>
   <div>
      <AppList
          :type="'product'"
          :items="agricultureContent"
          :itemsPerRow="3"
          :title="'Для сельского хозяйства'"
          class="list-w-bg"
      />

      <AppList
          :type="'product'"
          :items="transportContent"
          :itemsPerRow="2"
          :title="'Для транспорта'"
          class="list-w-bg"
      />
   </div>
</template>

<script>
import AppList from "../../../components/App/AppList.vue";
import {agricultureContent, transportContent} from '../composable/products'
export default {
   name: "Products",
   components: {AppList},
   setup() {
      agricultureContent.forEach(item => item.link = { name: 'catalogList', params: { id: item.name }})
      transportContent.forEach(item => item.link = { name: 'catalogList', params: { id: item.name }})

      return {agricultureContent, transportContent}
   }
}
</script>

<style lang="scss" scoped>

.list-w-bg {
   padding-bottom: 50px;
   background: linear-gradient(180deg,
       transparent 0%,
       transparent 235px,
       var(--orange) 235px,
       var(--orange) 565px,
       transparent 565px,
       transparent 100%
   );
}

</style>
