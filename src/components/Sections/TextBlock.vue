<template>
   <PageSection class="text-block">
      <slot />
   </PageSection>
</template>

<script>
import {reactive, ref, watch} from 'vue'
import PageSection from "../Providers/PageSection.vue";
import useDatabase from "../../composable/database.js";
import {useRoute} from "vue-router";

export default {
   name: "TextBlock",
   components: {PageSection},

   setup() {

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
