<template>
   <AppPage>
      <PageSection v-if="isAdmin">
         <AppButtonsGroup v-if="product">
            <AppButton @click="editProduct" color="blue">Редактировать</AppButton>
            <AppButton @click="hideProduct" color="blue">{{ product.isHidden ? 'Показать' : 'Скрыть' }}</AppButton>
            <div v-if="product.isHidden" class="hidden-warning">Продукт скрыт от пользователей</div>
         </AppButtonsGroup>
      </PageSection>

      <PageSection>
         <div v-if="product" class="product-page">
            <div class="about">
               <div  class="image">
                  <img v-if="image" :src="image.src" alt="">
               </div>

               <div class="description">
                  <h2>{{product.title}}</h2>
                  <div class="text" v-html="description"></div>
                  <div v-if="product.price" class="price">Цена: <span>{{product.price}}₽</span></div>
               </div>
            </div>

            <div v-if="table" class="specification">
               <p class="subtitle">Технические характеристики</p>
               <div v-html="table"></div>
            </div>
         </div>
      </PageSection>

      <!-- Modals -->
      <EditArticleModal
          v-if="product"
          ref="editModal"
          :articleType="`edit-product`"
          :id="product.id"
          :title="product.title"
          :text="product.text"
          :price="product.price"
          :images="product.images"
          @update:article="updateProduct"
      />
   </AppPage>
</template>

<script>
import {computed, ref, watch} from "vue";
import {useRoute} from "vue-router";
import useDatabase from "../../../composable/database.js";
import useStorage from "../../../composable/storage.js";
import {descriptionToHTML} from "../../../helpers/interface.js";
import {isAdmin} from "../../../store";

import AppPage from "../../../components/App/AppPage.vue";
import PageSection from "../../../components/Providers/PageSection.vue";
import AppButtonsGroup from "../../../components/App/AppButtonsGroup.vue";
import AppButton from "../../../components/App/AppButton.vue";
import EditArticleModal from "../../about/modals/EditArticleModal.vue";

export default {
   name: "ProductPage",
   components: {EditArticleModal, AppButton, AppButtonsGroup, PageSection, AppPage},
   setup() {
      const route = useRoute()
      const {section, category, productID} = route.params
      const productLink = `catalog/${section}/${category}/list/${productID}`

      const {get: getProduct, put: putProduct, data: product, loading, error} = useDatabase()
      getProduct(productLink)

      const {get: getImage, data: image} = useStorage()
      watch(product, () => {
         if (!product.value) return

         // Get all images
         const path = `images/catalog/${section}/${category}/${productID}/gallery/${product.value.images[0].name}`
         getImage(path)

         description.value = descriptionToHTML(product.value.text)

         // Make object from array of images
         const images = {}
         product.value.images.forEach(img => images[img.name] = img)
         product.value.images = images
      })

      watch(image, () => {
         if (!image.value) return

         const {fileName, src} = image.value
         product.value.images[fileName].src = src
         product.value.images = {...product.value.images}

         // products.value = Object.values(products.value.images)
         //     .map(image => image.src)
         //     .sort((a, b) => (a.isMain === true ? 1 : -1))
      })

      const description = computed(() => {
         return descriptionToHTML(product.value.text, {allowedBlocks: 'paragraph,list'})
      })
      const table = computed(() => {
         return descriptionToHTML(product.value.text, {allowedBlocks: 'table'})
      })


      const editModal = ref(null)

      const editProduct = () => editModal.value.open()
      const hideProduct = async () => {
         const visibleProp = [productLink] + '/isHidden'
         await putProduct({[visibleProp]: !product.value.isHidden})
         updateProduct()
      }

      const updateProduct = () => getProduct(productLink)

      return {
         isAdmin,

         product,
         image,

         description,
         table,

         editModal,
         editProduct,
         hideProduct,
         updateProduct,
      }
   }
}
</script>

<style lang="scss">
.product-page {
   .about {
      display: flex;
      align-items: flex-start;
   }
   .image {
      padding-top: 100px;
      flex-shrink: 0;
      margin-right: 50px;
      min-width: 35%;
      max-width: 50%;
      img {
         width: 100%;
      }
   }

   h2 {
      margin-bottom: 40px;
      font-size: var(--title-size);
      font-weight: 500;
   }
   .description {
      font-size: var(--subtitle-size);
   }

   .text {
      padding-left: 15px;
   }

   p {
      margin-bottom: 10px;
   }

   ul {
      list-style: disc;
      margin-left: 30px;
   }

   .price {
      margin-top: 40px;
      font-size: var(--title-size);
      font-weight: 600;
      span {
         color: var(--orange)
      }
   }

   .specification {
      margin-top: 60px;
      .subtitle {
         margin-bottom: 40px;
         font-size: var(--article-text-size);
      }
   }

   .table {
      font-size: var(--subtitle-size);
      border: 1px solid var(--black);
      .row {
         display: flex;
         border-bottom: 1px solid var(--black);
         &.head {
            font-weight: 600;
         }
         &:last-child {
            border: none
         }
      }
      .col {
         padding: 16px 40px;
         &:first-child {
            width: 70%;
            border-right: 1px solid var(--black);
         }
         &:last-child {
            flex-grow: 1;
            text-align: center;
         }
      }
   }
}

</style>
