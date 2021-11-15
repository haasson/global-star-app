<template>
   <BackgroundProvider v-bind="$attrs">
      <div class="wrapper">
         <slot/>
      </div>
      <slot name="outside-wrapper"/>
   </BackgroundProvider>
</template>

<script>
import BackgroundProvider from "./BackgroundProvider.vue";

export default {
   name: "PageSection",
   components: {BackgroundProvider},
   props: {
      bgTy: {
         type: String,
         default: ''
      }
   }
}
</script>
