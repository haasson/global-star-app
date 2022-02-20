<template>
   <BackgroundProvider :tag="tag" :class="tag ? '' : 'section'" >
      <div class="wrapper" :class="{full: clearWrapper}">
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
      tag: {
         type: String
      },
      clearWrapper: {
         type: Boolean,
         default: false
      }
   },
}
</script>

<style lang="scss" scoped>
.section {
   flex-grow: 1;
}

.wrapper {
   position: relative;

   width: calc(100% - var(--wrapperMargins));
   max-width: var(--wrapper);
   margin: 0 auto;
   &.full {
      width: 100%;
   }
}
</style>
