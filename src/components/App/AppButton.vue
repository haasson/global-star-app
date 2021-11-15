<template>
   <a
       v-if="href"
       :href="href"
       class="btn"
       :class="color"
       :style="cssVars"
   >
      <slot />
   </a>

   <button
       v-else
       class="btn"
       :class="color"
       :style="cssVars"
   >
      <slot />
   </button>
</template>

<script>

import {computed} from "vue";
import {getColorByName} from "../../helpers/interface";

export default {
   name: "AppButton",
   props: {
      href: {
         type: String
      },
      color: {
         type: String,
         default: 'orange'
      }
   },

   setup({color}) {
      const cssVars = computed(() => {
         console.log(getColorByName(color))
         return {
            '--button-bg': getColorByName(color)
         }
      })


      return {cssVars}
   }
}
</script>

<style lang="scss" scoped>
.btn {
   display: inline-block;
   min-width: 250px;
   padding: 18px;
   font-family: 'Roboto', sans-serif;
   font-size: var(--subtitle-size);
   font-weight: 500;
   line-height: var(--subtitle-size);
   text-align: center;
   border: 1px solid transparent;
   box-shadow: var(--button-shadow);
   cursor: pointer;

   &.orange {
      color: var(--black);
      background-color: var(--button-bg);
      &:hover {
         border: 1px solid var(--deep-blue)
      }
      &:active {
         background-color: var(--dark-orange);
         border: 1px solid transparent;
      }
   }

   &.blue {
      color: var(--white);
      background-color: var(--button-bg);
      &:hover {
         border: 1px solid var(--dark-orange)
      }
      &:active {
         background-color: var(--deep-blue);
         border: 1px solid transparent;
      }
   }
}

</style>
