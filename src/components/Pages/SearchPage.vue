<template>
   <AppPage class="search-page">
      <AppTitle>Результаты поиска</AppTitle>
      <AppList
          v-if="suitableProducts.length"
          type="catalog"
          :items="suitableProducts"
          :itemsPerRow="itemsPerRow"
          :isSlider="itemsPerRow === 1"
          multiline
          justify="flex-start"
          class="list"
      />
      <div v-else-if="loading" class="warning">
         <AppIcon name="loader" class="loader" />
         Поиск в каталоге продуктов.....</div>
      <div v-else class="warning">По Вашему запросу "{{searchQuery}}" ничего не найдено</div>
   </AppPage>

</template>

<script>
import {ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import useDatabase from "../../composable/database.js";
import useItemsPerRow from "../../composable/itemsPerRow.js";
import {globalLoading} from "../../store";

import AppPage from "../App/AppPage.vue";
import AppTitle from "../App/AppTitle.vue";
import AppList from "../App/AppList.vue";
import AppIcon from "../App/AppIcon.vue";

export default {
   name: "Search",
   components: {AppIcon, AppList, AppTitle, AppPage},
   setup() {
      const {itemsPerRow} = useItemsPerRow({1200: 4, 870: 3, 568: 2, default: 1})

      const route = useRoute()

      const suitableProducts = ref([])
      const {get: getProducts, loading} = useDatabase()


      const searchQuery = ref('')
      const handleQuery = async (to) => {
         const currentRoute = to || route
         let query = currentRoute.query.query
         if (!query) return

         suitableProducts.value = []

         searchQuery.value = query
         query = query.toLowerCase()
         const catalog = await getProducts('catalog')

         const productsArray = getFlattenCatalog(catalog)
         suitableProducts.value = getSuitableProducts(productsArray, query)

         globalLoading.value = false
      }

      const getFlattenCatalog = (catalog) => {
         let result = []
         for (const section in catalog) {
            const categories = catalog[section] || {}
            for (const category in categories) {
               const list = categories[category].list
               if (list) {
                  const productsArray = Object.values(list)
                  productsArray.forEach(product => {
                     product.section = section
                     product.category = category
                  })
                  result = [...result, ...productsArray]
               }
            }
         }
         return result
      }

      const getSuitableProducts = (products, query) => {
         const suitableProducts = products.filter(product => {
            const hasQueryInText = (product.text.blocks || []).some(block => {
               let text = ''
               if (block.type === 'paragraph') {
                  text = block.data.text.toLowerCase()
               } else if (block.type === 'list') {
                  text = block.data.items.reduce((memo, val) => memo += val, '').toLowerCase()
               } else if (block.type === 'table') {
                  text = block.data.content
                      .reduce((memo, val) => memo = [...memo, val], [])
                      .reduce((memo, val) => memo += val, '')
                      .toLowerCase()
               }
               return text.indexOf(query) !== -1
            })
            if (
                hasQueryInText ||
                (product.title).toLowerCase().indexOf(query) !== -1 ||
                (product.keywords || '').toLowerCase().indexOf(query) !== -1
            ) return true
            return false
         })

         suitableProducts.forEach(product => {
            const {section, category, id, images} = product
            product.image = `images/catalog/${section}/${category}/${id}/gallery/${images[0].name}`
            product.link = `/products/${section}/${category}/${id}`
         })

         return suitableProducts
      }


      handleQuery()
      onBeforeRouteUpdate(handleQuery)

      return {
         loading,

         itemsPerRow,
         suitableProducts,

         searchQuery,
      }
   }
}
</script>

<style lang="scss">
.search-page {
   .warning {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: var(--text-size-big);
      color: var(--blue);
   }
   .loader {
      margin-right: 10px;
      animation: rotate linear 1s infinite;
   }

   @keyframes rotate {
      from {
         transform: rotate(0);
      }
      50% {
         transform: rotate(180deg);
      }
      to {
         transform: rotate(360deg);
      }
   }
}

</style>
