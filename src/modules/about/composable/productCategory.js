import appConfig from "../../../config/app.config.js";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const useProductCategory = (type) => {
   if (type === 'edit-product') {
      const route = useRoute()
      return {
         section: ref(route.params.section),
         category: ref(route.params.category),
         categoryDbPath: ref()
      }
   }
   if (type.indexOf('product') === -1) return {categoryDbPath: ref()}


   const getFirstElement = (object) => Object.keys(object).find(key => object[key].position === 1)

   const sectionChildren = appConfig.navigation.products.children
   const sectionOptions = Object.keys(sectionChildren).map(key => ({name: key, text: sectionChildren[key].name}))
   const section = ref(getFirstElement(sectionChildren))


   const categoryChildren = ref()
   const categoryOptions = ref()
   const category = ref()

   let categoryDbPath = ref(`catalog/${section.value}/${category.value}`)

   watch(section, () => {
      categoryChildren.value = sectionChildren[section.value].children
      categoryOptions.value = Object.keys(categoryChildren.value).map(key => ({name: key, text: categoryChildren.value[key].name}))
      category.value = getFirstElement(categoryChildren.value)
   }, {immediate: true})

   watch(category, () => {
      categoryDbPath.value = `catalog/${section.value}/${category.value}`
   }, {immediate: true})

   return {section, sectionOptions, category, categoryOptions, categoryDbPath}
}

export default useProductCategory
