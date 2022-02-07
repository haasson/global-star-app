<template>
   <AppPage class="product-category-page">
      <RouterView v-if="inCategory" />
      <AppList
          v-else
          :isSlider="itemsPerRow === 1"
          :type="'product'"
          :items="agricultureContent"
          :itemsPerRow="itemsPerRow"
          :title="'Для сельского хозяйства'"
          class="list-w-bg"
          multiline
      />
   </AppPage>
</template>

<script>
import {agricultureContent} from '../composable/products'
import AppPage from "../../../components/App/AppPage.vue";
import AppList from "../../../components/App/AppList.vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {computed, ref} from "vue";
import useWindowDimensions from "../../../composable/windowDimensions.js";

export default {
name: "Agriculture",
   components: {AppList, AppPage},

   setup() {
      const route = useRoute()
      const inCategory = ref(route?.params?.id)
      onBeforeRouteUpdate((to, from, next) => {
         inCategory.value = to.params.id
         next()
      })

      agricultureContent.forEach(item => item.link = { name: 'catalogList1', params: { id: item.name }})


      const {width} = useWindowDimensions()
      const itemsPerRow = computed(() => {
         if (width.value > 1200) return 3
         if (width.value <= 1200 && width.value > 768) return 2
         return 1
      })

      return {agricultureContent, inCategory, itemsPerRow}
   }
}
</script>

<style lang="scss">
.product-category-page {
   .swiper-slide {
      padding: 25px 0;
   }
   .list-w-bg {
      background: linear-gradient(180deg,
          transparent 0%,
          transparent 215px,
          var(--orange) 215px,
          var(--orange) 545px,
          transparent 545px,
          transparent 100%
      );
      @media(max-width: 768px) {
         background: none;
      }
   }
}

</style>
