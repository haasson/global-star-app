<template>
   <PageSection editable :sectionId="id" @change="onChange" class="text-block">
      <template #default="slotProps">
         <div
             v-if="slotProps.content"
             class="inner"
             :style="{fontSize: `${size}px`}"
             v-html="slotProps.content.html"
         />
      </template>

   </PageSection>
</template>

<script>
import {reactive, ref, watch} from 'vue'
import PageSection from "./Providers/PageSection.vue";
import useDatabase from "../composable/database";
import {useRoute} from "vue-router";

export default {
   name: "TextBlock",
   components: {PageSection},
   props: {
      text: {
         type: String,
         required: true
      },
      size: {
         type: Number,
         default: 24
      },
      id: {
         type: String,
         default: 'text'
      }
   },

   setup() {
      const content = ref()
      const editableContent = ref()
      const onChange = (type) => {
         console.log(type)
      }





      return {onChange}
   }

}
</script>

<style lang="scss" scoped>
.text-block {
   font-size: var(--article-text-size);
   line-height: 1.2;
}
.inner {
   padding: 0 60px;
}
</style>
