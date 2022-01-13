<template>
   <div>
      <AppTitle :position="titlePosition">Программное обеспечение</AppTitle>
      <AppList
          v-if="softItems"
          type="soft"
          gap="14"
          :items="softItems"
          itemsPerRow="2"
          empty
      />
   </div>
</template>

<script>
import {ref} from "vue";
import appConfig from "../../config/app.config.js";
import AppTitle from "../AppTitle.vue";
import AppList from "../App/AppList.vue";
export default {
   name: "SoftSection",
   components: {AppList, AppTitle},
   props: {
      items: {
         type: Array,
         required: true
      },
      titlePosition: {
         type: String,
         default: 'right'
      }
   },

   setup({items}) {
      const {allPS} = appConfig.programSolutions

      const softItems = ref(
          items.map(name => {
             const text = allPS.find(el => el.name === name).text
             return {name,text}
          })
      )

      return {softItems}
   }
}
</script>

<style scoped>

</style>
