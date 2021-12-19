<template>
   <section>
      <div v-if="isAdmin" class="edit">
         <AppButtonsGroup>
            <AppButton>Edit</AppButton>
            <AppButton @click="deleteSection(index)" :color="clicked ? 'orange' : 'blue'">Delete</AppButton>
         </AppButtonsGroup>
      </div>

      <Component
          :is="section.is"
          v-bind="section.props"
      />
   </section>
</template>

<script>
import {isAdmin, pageContent, dbPath} from "../../store";

import useDatabase from "../../composable/database";

import AppButtonsGroup from "./AppButtonsGroup.vue";
import AppButton from "./AppButton.vue";
import {ref, toRaw, watch} from "vue";



export default {
   name: "AppSection",
   components: {AppButton, AppButtonsGroup},
   props: {
      section: {
         type: Object,
         required: true
      },
      index: {
         type: Number,
         required: true
      }
   },

   setup() {
      const clicked = ref(false)

      const {set, get, data} = useDatabase()
      const deleteSection = (index) => {
         if (clicked.value) {

            // TODO: hack to remove reactive parts in objects
            const newContent = [...pageContent.value.map(page => {
               return {name: page.name, props: page.props}
            })]

            newContent.splice(index, 1)
            set(dbPath.value + '/content', newContent).then(() => get(dbPath.value + '/content'))

            clicked.value = false
         } else {
            clicked.value = true
            setTimeout(() => clicked.value = false, 2000)
         }
      }


      watch(data, () => {
         pageContent.value = toRaw(data.value)
      })


      return {
         isAdmin,

         deleteSection,
         clicked,
      }
   }
}
</script>

<style scoped>

</style>
