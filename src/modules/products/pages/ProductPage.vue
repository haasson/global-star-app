<template>
   <AppPage>
      <PageSection v-if="isAdmin">
         <AppButtonsGroup v-if="product">
            <AppButton @click="editProduct" color="blue">Редактировать</AppButton>
            <AppButton @click="hideProduct" color="blue">{{ product.isHidden ? 'Показать' : 'Скрыть' }}</AppButton>
            <AppButton @click="deleteProduct" color="blue">Удалить</AppButton>
            <div v-if="product.isHidden" class="hidden-warning">Продукт скрыт от пользователей</div>
         </AppButtonsGroup>
      </PageSection>

      <PageSection>
         <div v-if="product" class="product-page">
            <div class="about">
               <h2 class="small">{{product.title}}</h2>
               <div class="image">
                  <img v-if="image" :src="image.src" alt="">
               </div>

               <div class="description">
                  <h2 class="big">{{product.title}}</h2>
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
          :keywords="product.keywords"
          :images="product.images"
          @update:article="updateProduct"
      />

      <AppConfirmationModal ref="confirmModal" type="product" />
   </AppPage>
</template>

<script>
import {computed, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import useDatabase from "../../../composable/database.js";
import useStorage from "../../../composable/storage.js";
import useLoading from "../../../composable/loading.js";
import {descriptionToHTML} from "../../../helpers/interface.js";
import {isAdmin} from "../../../store";

import AppPage from "../../../components/App/AppPage.vue";
import PageSection from "../../../components/Providers/PageSection.vue";
import AppButtonsGroup from "../../../components/App/AppButtonsGroup.vue";
import AppButton from "../../../components/App/AppButton.vue";
import EditArticleModal from "../../about/modals/EditArticleModal.vue";
import AppConfirmationModal from "../../../components/Modals/AppConfirmationModal.vue";

export default {
   name: "ProductPage",
   components: {AppConfirmationModal, EditArticleModal, AppButton, AppButtonsGroup, PageSection, AppPage},
   setup() {
      useLoading()

      const router = useRouter()
      const route = useRoute()
      const {section, category, productID} = route.params
      const productLink = `catalog/${section}/${category}/list/${productID}`

      const {get: getProduct, put: putProduct, del: delProduct, data: product, loading, error} = useDatabase()
      const {put: setCount, get: getCount} = useDatabase()

      getProduct(productLink)

      const {get: getImage, data: image} = useStorage()
      watch(product, () => {
         if (!product.value) return

         // Get all images
         const path = `images/catalog/${section}/${category}/${productID}/gallery/${product.value.images[0].name}`
         getImage(path)

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
      })

      const description = computed(() => {
         return descriptionToHTML(product.value.text, 'paragraph,list')
      })
      const table = computed(() => {
         return descriptionToHTML(product.value.text, 'table')
      })


      const editModal = ref(null)
      const confirmModal = ref(null)

      const editProduct = () => editModal.value.open()
      const hideProduct = async () => {
         const visibleProp = [productLink] + '/isHidden'
         await putProduct({[visibleProp]: !product.value.isHidden})
         updateProduct()
      }

      const deleteProduct = async () => {
         const res = await confirmModal.value.open()

         if (res) {
            const countUrl = `catalog/${section}/${category}/count`
            const count = await getCount(countUrl)

            await setCount({[countUrl]: count - 1})
            await delProduct(productLink)

            router.replace(`/products/${section}/${category}`)
         }
      }

      const updateProduct = () => getProduct(productLink)

      return {
         isAdmin,

         product,
         image,

         description,
         table,

         editModal,
         confirmModal,

         editProduct,
         hideProduct,
         deleteProduct,

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
      &.small{
         display: none;
      }
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
}

@media(max-width: 992px) {
   .product-page {
      h2 {
         margin-bottom: 19px;
      }
      .price {
         margin-top: 24px;
      }
      .specification {
         margin-top: 30px;
         .subtitle {
            margin-bottom: 20px;
         }
      }
   }
}
@media(max-width: 768px) {
   .product-page {
      .about {
         flex-direction: column;
      }
      .description {
         width: 100%;
      }
      h2{
         &.small{
            display: block;
            margin: 0 auto;
         }
         &.big{
            display: none;
         }
      }
      .image {
         padding-top: 0;
         margin: 0 auto 40px;
      }
      .price{
         text-align: center;
      }
   }
}
@media(max-width: 568px) {
   .product-page{
      .specification {
         margin-top: 12px;
         .subtitle {
            margin-bottom: 12px;
         }
      }
   }
}
@media(max-width: 480px) {
   .product-page{
      .text {
         font-size: 14px;
      }
      .price {
         font-size: 20px;
      }
      .specification {
         .subtitle {
            font-size: 16px;
         }
      }
   }
}


</style>
