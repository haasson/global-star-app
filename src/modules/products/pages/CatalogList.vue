<template>
   <AppTitle>{{$route.params.id}}</AppTitle>
   <AppList :items="catalog" type="catalog" :items-per-row="4" justify="flex-start"
   />
</template>

<script>
import {useRoute} from "vue-router";
import AppTitle from "../../../components/AppTitle.vue";
import AppList from "../../../components/App/AppList.vue";
import {ref} from "vue";

export default {
   name: "CatalogList",
   components: {AppList, AppTitle},
   setup() {
      const route = useRoute()

      const catalog = ref([ {title: 'Some title reugh euirgукгщпр гукпр укгпр кгу прукрп укщшпр укщшпркущршп укщпр укшkjwefhwjif ewiuf gweuifguwei fooeufhweufh f euwfhuiegfiweugfuiwegfuiwegfuiwegfuiewgewuifgh erekjrgh reiguierg ruieg erui uierohg urieohguiorwegheurighgh eriug eirugh ieurg iuerg'}, {title: 'Some title', text: 'text'}] )


      return {some: route.params.id, catalog}
   }
}
</script>

<style scoped>

</style>
