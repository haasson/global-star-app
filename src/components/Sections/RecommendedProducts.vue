<template>
   <div v-if="items.length || isAdmin">
      <PageSection v-if="isAdmin" class="full blue">
         <form class="form">

            <div class="select-wrap">
               <AppSelect
                   label="Раздел"
                   :options="sectionOptions"
                   v-model="section"
               />
               <AppSelect
                   label="Категория"
                   :options="categoryOptions"
                   v-model="category"
               />
               <AppSelect
                   v-if="productOptions.length"
                   label="Продукт"
                   :options="productOptions"
                   v-model="product"
                   :disabled="productsLoading"
               />
               <div v-else>В этой категории нет продуктов</div>
            </div>

            <AppButton @click="addProduct" color="orange" :disabled="!productOptions.length">Добавить</AppButton>
         </form>
      </PageSection>
      <AppList
          v-if="items.length"
          type="catalog"
          removable
          :gap="itemsPerRow < items.length ? 0 : 15"
          :items="items"
          :itemsPerRow="itemsPerRow"
          :isSlider="itemsPerRow < items.length"
          align="center"
          :title="title"
          class="list"
          bgColor="blue"
          bgType="full"
          @removeCard="removeProduct"
      />
      <div v-else class="warning">Добавьте продукты, используя форму выше</div>
   </div>
</template>

<script>
import {isAdmin} from "../../store";
import {computed, reactive, ref, watch} from "vue";
import {useRoute} from "vue-router";
import AppList from "../App/AppList.vue";
import useItemsPerRow from "../../composable/itemsPerRow.js";
import useDatabase from "../../composable/database.js";
import useProductCategory from "../../modules/about/composable/productCategory.js";
import AppSelect from "../App/AppSelect.vue";
import PageSection from "../Providers/PageSection.vue";
import AppButton from "../App/AppButton.vue";

export default {
   name: "RecommendedProducts",
   components: {AppButton, PageSection, AppSelect, AppList},
   props: {
      title: {
         type: String,
         default: 'Рекомендуемое оборудование'
      }
   },
   setup() {
      const route = useRoute()
      const baseUrl = `recommended/${route.fullPath.replaceAll('/', '@').slice(1)}`

      // Define items per row
      const settings = computed(() => {
         return {
            992: Math.min(4, items.value.length),
            768: Math.min(3, items.value.length),
            568: Math.min(2, items.value.length),
            default: 1
         }
      })
      const {itemsPerRow} = useItemsPerRow(settings)

      // Get and watch list of recommended products
      const items = ref([])
      const {get: getRecommendedList, data: recommendedList} = useDatabase()
      getRecommendedList(baseUrl)

      watch(recommendedList, () => {
         if (!recommendedList.value) return

         // For every recommended product get its properties from database
         Object.keys(recommendedList.value).forEach(id => {
            const item = recommendedList.value[id]

            const {get: getCatalogItem} = useDatabase()
            const dbPath = `catalog/${item.section}/${item.category}/list/${item.product}`
            getCatalogItem(dbPath)
                .then((product) => {
                   if (!product) return

                   product.cardID = `${item.section}-${item.category}-${product.id}`
                   product.image = `images/catalog/${item.section}/${item.category}/${item.product}/gallery/${product.images[0].name}`
                   product.link = `/products/${item.section}/${item.category}/${item.product}`
                   items.value.push(product)
                })
         })
      })


      // Define models and options for selects
      const {section, sectionOptions, category, categoryOptions} = useProductCategory('product')
      const {get: getProducts, data: productList, loading: productsLoading} = useDatabase()

      const product = ref()
      const productOptions = ref([])
      watch(category, () => {
         const productLink = `catalog/${section.value}/${category.value}/list`
         getProducts(productLink)
      }, {immediate: true})

      watch(productList, () => {
         productOptions.value = Object.keys(productList.value || {}).map(productID => {
            return {text: productList.value[productID].title, name: productID}
         })
         product.value = productOptions.value[0]?.name
      })


      // Products actions (add, delete)
      const addProduct = (e) => {
         e.preventDefault()
         const newProduct = {
            section: section.value,
            category: category.value,
            product: product.value
         }

         const {set: postProduct} = useDatabase()
         const dbPath = `${baseUrl}/${section.value}-${category.value}-${product.value}`
         postProduct(dbPath, newProduct).then(refreshList)
      }

      const {del: deleteProduct} = useDatabase()
      const removeProduct = (id) => {
         deleteProduct(`${baseUrl}/${id}`).then(refreshList)
      }

      const refreshList = () => {
         items.value = []
         getRecommendedList(baseUrl)
      }


      return {
         isAdmin,

         items,
         itemsPerRow,

         section,
         sectionOptions,
         category,
         categoryOptions,

         product,
         productOptions,
         productsLoading,

         addProduct,
         removeProduct,
      }
   }
}
</script>

<style lang="scss" scoped>
.form {
   padding: 20px 0;
   color: var(--white);
}

.select-wrap {
   display: flex;
   justify-content: space-between;
   align-items: center;
   & > * {
      width: 30%;
      margin-bottom: 15px;
   }
}

.list {
   padding-bottom: 30px;
}
.warning {
   padding: 20px;
   text-align: center;
   color: var(--white);
   background: var(--light-blue);
}
</style>
