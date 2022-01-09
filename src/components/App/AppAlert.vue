<template>
   <PageSection class="alert" :class="fontSize">
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
      fontSize: {
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
   box-shadow: var(--button-shadow);
   &.big {
      font-size: var(--title-size);
      font-weight: 600;
   }
   &.medium {
      font-size: var(--article-text-size);
   }
}
</style>
