<template>
   <AppTitle>{{title}}</AppTitle>
   <AppList
       :isSlider="itemsPerRow === 1"
       :items="filteredCatalog"
       type="catalog"
       :items-per-row="itemsPerRow"
       justify="flex-start"
       multiline
       class="catalog-list"
   />
</template>

<script>
import {computed, ref, watch} from "vue";
import {useRoute} from "vue-router";
import useDatabase from "../../../composable/database.js";
import useLoading from "../../../composable/loading.js";
import useItemsPerRow from "../../../composable/itemsPerRow.js";

import appConfig from "../../../config/app.config.js";
import {isAdmin} from "../../../store";

import AppTitle from "../../../components/App/AppTitle.vue";
import AppList from "../../../components/App/AppList.vue";


export default {
   name: "CatalogList",
   components: {AppList, AppTitle},
   setup() {
      useLoading()
      const route = useRoute()

      const {itemsPerRow} = useItemsPerRow({1200: 4, 870: 3, 568: 2, default: 1})


      const {get: getCatalog, data: catalog} = useDatabase()

      const getParams = (currentRoute) => {
         const section = currentRoute.fullPath.split('/').reverse()[1]
         const category = currentRoute.params.id
         return {section, category}
      }

      const section = ref(getParams(route).section)
      const category = ref(getParams(route).category)

      const title = ref(appConfig.navigation.products.children[section.value].children[category.value].name)

      watch(category, () => {
         getCatalog(`catalog/${section.value}/${category.value}/list`)
      }, {immediate: true})

      watch(catalog, () => {
         if (!catalog.value) return

         Object.keys(catalog.value).forEach(id => {
            const item = catalog.value[id]
            item.image = `images/catalog/${section.value}/${category.value}/${item.id}/gallery/${item.images[0].name}`
            item.link = `/products/${section.value}/${category.value}/${id}`
         })
      })

      const filteredCatalog = computed(() => {
         if (isAdmin.value) return catalog.value

         const newCatalog = {}
         for (const key in catalog.value) {
            if (!catalog.value[key].isHidden) newCatalog[key] =  catalog.value[key]
         }
         return newCatalog
      })

      return {title, filteredCatalog, itemsPerRow}
   }
}
</script>

<style lang="scss">
.catalog-list {
   .swiper-slide {
      padding-top: 10px;
   }
}
</style>
