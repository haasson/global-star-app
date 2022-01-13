<template>
   <AppTitle>{{title}}</AppTitle>
   <AppList
       :items="catalog"
       type="catalog"
       :items-per-row="4"
       justify="flex-start"
   />
</template>

<script>
import {ref, watch} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import appConfig from "../../../config/app.config.js";

import AppTitle from "../../../components/AppTitle.vue";
import AppList from "../../../components/App/AppList.vue";
import useDatabase from "../../../composable/database.js";

export default {
   name: "CatalogList",
   components: {AppList, AppTitle},
   setup() {
      const route = useRoute()

      const {get: getCatalog, data: catalog} = useDatabase()

      const getParams = (currentRoute) => {
         const section = currentRoute.fullPath.split('/').reverse()[1]
         const category = currentRoute.params.id
         return {section, category}
      }

      const section = ref(getParams(route).section)
      const category = ref(getParams(route).category)
      const title = ref(appConfig.navigation.products.children[section.value].children[category.value].name)

      onBeforeRouteUpdate((to, from, next) => {
         section.value = getParams(to).section
         category.value = getParams(to).category
         title.value = appConfig.navigation.products.children[section.value].children[category.value].name
         next()
      })

      watch(category, () => {
         getCatalog(`catalog/${category.value}`)
      }, {immediate: true})

      watch(catalog, () => {
         if (!catalog.value) return
         console.log(Object.keys(catalog.value))
         Object.keys(catalog.value).forEach(id => {
            const item = catalog.value[id]
            item.image = `images/catalog/${category.value}/${item.id}/${item.image}.jpg`
         })

      })

      return {title, catalog}
   }
}
</script>

<style scoped>

</style>
