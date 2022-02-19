<template>
   <PageSection>
      <div class="pagination">

         <div @click="prevPage" class="arrow" :class="{active: page > 1}">
            &lt;
         </div>

         <div class="pages">
            <span>{{ page }}</span>/<span>{{ totalPages }}</span>
         </div>

         <div @click="nextPage" class="arrow" :class="{active: page < totalPages}">
            &gt;
         </div>

      </div>
   </PageSection>
</template>

<script>
import {computed, ref} from "vue";
import appConfig from "../../config/app.config.js";
import PageSection from "../Providers/PageSection.vue";

export default {
   name: "AppPagination",
   components: {PageSection},
   props: {
      totalItems: {
         type: Number,
         default: 1
      },
   },
   emits: ['update:pagination'],

   setup(props, {emit}) {
      const page = ref(1)
      const totalPages = computed(() => {
         return Math.ceil(props.totalItems / appConfig.itemsPerPage)
      })

      const prevPage = () => {
         if (page.value === 1) return
         page.value--
         updatePagination()
      }

      const nextPage = () => {
         if (page.value === totalPages.value) return
         page.value++
         updatePagination()
      }

      const updatePagination = () => {
         window.scrollTo(0, 0)
         emit('update:pagination', page.value)
      }

      return {page, totalPages, prevPage, nextPage}
   }
}
</script>

<style lang="scss" scoped>
.pagination {
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 24px;
   font-weight: 500;
   color: var(--blue);
}

.pages {
   margin: 0 20px;
}

.arrow {
   opacity: .3;

   &.active {
      opacity: 1;
      cursor: pointer;

      &:hover {
         font-weight: 800;
      }
   }
}
</style>
