<template>
   <div>
      <AppTitle>Программное обеспечение</AppTitle>
      <AppList
          type="soft"
          gap="14"
          :items="softItems"
          itemsPerRow="2"
          empty
      />
   </div>
</template>

<script>
import AppTitle from "../AppTitle.vue";
import AppList from "../App/AppList.vue";
import {ref} from "vue";
export default {
   name: "SoftSection",
   components: {AppList, AppTitle},
   props: {

   },

   setup() {
      const softItems = ref(null)

      return {softItems}
   }
}
</script>

<style scoped>

</style>
