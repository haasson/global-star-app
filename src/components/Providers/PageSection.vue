<template>
   <BackgroundProvider
       class="section"
   >
      <div class="wrapper">
         <slot />
      </div>
      <slot name="outside-wrapper"/>

   </BackgroundProvider>
</template>

<script>
import {isAdmin} from "../../store";

import BackgroundProvider from "./BackgroundProvider.vue";
import AppButtonsGroup from "../App/AppButtonsGroup.vue";
import AppButton from "../App/AppButton.vue";
import {useRoute} from "vue-router";
import useDatabase from "../../composable/database";
import {ref, watch} from "vue";

export default {
   name: "PageSection",
   components: {AppButtonsGroup, AppButton, BackgroundProvider},
   props: {
      // bgType: {
      //    type: String,
      //    default: ''
      // },
      // bgColor: {
      //    type: String,
      //    default: ''
      // },
   },
}
</script>

<style lang="scss" scoped>
.section {
   flex-grow: 1;
}

.wrapper {
   position: relative;
}
</style>
