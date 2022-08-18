<template>
  <AppPage class="product-category-page">
    <RouterView v-if="inCategory"/>
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
import { ref, watch } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { globalLoading } from '../../../store'

import useLoading from '../../../composable/loading.js'
import useItemsPerRow from '../../../composable/itemsPerRow.js'
import { agricultureContent } from '../composable/products'

import AppPage from '../../../components/App/AppPage.vue'
import AppList from '../../../components/App/AppList.vue'

export default {
  name: 'Agriculture',
  components: { AppList, AppPage },

  setup() {
    useLoading()

    const route = useRoute()
    const inCategory = ref(route?.params?.id)

    onBeforeRouteUpdate((to, from, next) => {
      inCategory.value = to.params.id
      next()
    })

    watch(inCategory, () => {
      if (!inCategory.value) globalLoading.value = false
    })

    agricultureContent.forEach(item => item.link = { name: 'catalogList1', params: { id: item.name } })

    const { itemsPerRow } = useItemsPerRow({ 1200: 3, 768: 2, default: 1 })

    return { agricultureContent, inCategory, itemsPerRow }
  }
}
</script>

<style lang="scss">
.product-category-page {
  .swiper-slide {
    padding-top: 10px;
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
