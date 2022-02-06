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
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import appConfig from "../../../config/app.config.js";
import {isAdmin} from "../../../store";

import AppTitle from "../../../components/AppTitle.vue";
import AppList from "../../../components/App/AppList.vue";
import useDatabase from "../../../composable/database.js";
import useWindowDimensions from "../../../composable/windowDimensions.js";

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

      // onBeforeRouteUpdate((to, from, next) => {
      //    section.value = getParams(to).section
      //    category.value = getParams(to).category
      //    title.value = appConfig.navigation.products.children[section.value].children[category.value].name
      //    next()
      // })

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


      const {width} = useWindowDimensions()
      const itemsPerRow = computed(() => {
         if (width.value > 1200) return 4
         if (width.value <= 1200 && width.value > 870) return 3
         if (width.value <= 870 && width.value > 568) return 2
         return 1
      })

      return {title, filteredCatalog, itemsPerRow}
   }
}
</script>

<style lang="scss">
.catalog-list {
   .swiper-slide {
      padding: 25px 0;
   }
}
</style>
