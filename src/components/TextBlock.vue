<template>
   <PageSection class="text-block">
      <div
          class="inner"
          :style="{fontSize: `${size}px`}"
          v-html="text"
      />
   </PageSection>
</template>

<script>
import PageSection from "./Providers/PageSection.vue";
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
      }
   }
}
</script>

<style lang="scss" scoped>
.text-block {
   font-size: var(--article-text-size);
   padding: 0 60px;
   line-height: 1.2;
}
</style>
