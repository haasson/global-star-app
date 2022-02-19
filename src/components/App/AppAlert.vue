<template>
   <PageSection class="alert" :class="size">
      <div class="inner">
         <p><slot /></p>
      </div>
   </PageSection>
</template>

<script>
import PageSection from "../Providers/PageSection.vue";
export default {
name: "AppAlert",
   components: {PageSection},
   props: {
      size: {
         type: String,
         default: 'big'
      }
   }
}
</script>

<style lang="scss" scoped>
.alert {
   padding: 31px;
   background-color: var(--orange);
   text-align: center;
   line-height: 1;
   box-shadow: var(--button-shadow);
   @media(max-width: 568px) {
      padding: 12px;
   }
   &.big {
      font-size: var(--title-size);
      font-weight: 600;
      @media(max-width: 568px) {
         font-size: 14px;
      }
   }
   &.medium {
      font-size: var(--article-text-size);
   }
   &.small {
      padding: 4px 12px;
      font-size: var(--text-mini-size);
   }
}
</style>
