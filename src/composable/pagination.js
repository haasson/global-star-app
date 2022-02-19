import {computed, ref} from "vue";
import appConfig from "../config/app.config.js";

const usePagination = (list) => {
   const currentPage = ref(1)
   const updatePage = (page) => {
      currentPage.value = page
   }
   const filteredList = computed(() => {
      if (!list.value) return null
      const startIndex = (currentPage.value - 1) * appConfig.itemsPerPage
      return (Array.isArray(list.value) ? list.value : Object.values(list.value))
         .sort((a,b) => a.time > b.time ? 1 : -1)
         .slice(startIndex, startIndex + appConfig.itemsPerPage)
   })

   return {updatePage, filteredList}
}

export default usePagination
