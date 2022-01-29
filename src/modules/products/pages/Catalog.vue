<template>
   <AppPage>
      jgougiu
      <AppTitle>{{$route.params.id}}</AppTitle>
      <AppList :items="catalog" type="catalog" :items-per-row="4" justify="flex-start"
      />
   </AppPage>
</template>

<script>

import AppPage from "../../../components/App/AppPage.vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import AppTitle from "../../../components/AppTitle.vue";
import AppList from "../../../components/App/AppList.vue";
import {ref} from "vue";
export default {
   name: "Catalog",
   components: {AppList, AppTitle, AppPage},

   setup() {
      const route = useRoute()
      onBeforeRouteUpdate((to, from, next) => {
         next()
      })

      const catalog = ref([
         {title: 'Some title reugh euirgукгщпр гукпр укгпр кгу прукрп укщшпр укщшпркущршп укщпр укшkjwefhwjif ewiuf gweuifguwei fooeufhweufh f euwfhuiegfiweugfuiwegfuiwegfuiwegfuiewgewuifgh erekjrgh reiguierg ruieg erui uierohg urieohguiorwegheurighgh eriug eirugh ieurg iuerg'},
         {title: 'Some title', text: 'text fguiewfgwe fui weiufg weruig ergui erguh eruioghergioheroighr eroigheroi gh erogi eriogherig rogihre ogihr goier hgoeri goerihgeriogheriogheri geriohg eroighreiog erogherioghre goierhg riohg eroig roihg eroigh gutigreutigreutgreutger ruietgrueitgreuitgrt ruitgrtuirgter ruietgreuitgerutgr uirtgureitgtu'}
      ])

      return {catalog}
   }

}
</script>

<style scoped>

</style>
