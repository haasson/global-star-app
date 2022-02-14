<template>
   <Component
       :is="href ? 'a' : to ? 'router-link' : 'button'"
       :href="href"
       :to="to"
       class="btn"
       :class="[color, {icon}]"
   >
      <AppIcon
         v-if="icon"
         :name="icon"
      />
      <slot v-else />
   </Component>


</template>

<script>

import {computed} from "vue";
import {getColorByName} from "../../helpers/interface";
import AppIcon from "./AppIcon.vue";

export default {
   name: "AppButton",
   components: {AppIcon},
   props: {
      icon: {
         type: String,
      },
      href: {
         type: String
      },
      to: {
         type: String
      },
      color: {
         type: String,
         default: 'empty'
      }
   },

   setup() {



      return {}
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
   @media(max-width: 420px) {
      min-width: 100%;
   }

   &.icon {
      min-width: 0;
   }

   &.orange {
      color: var(--black);
      background-color: var(--orange);
      &:hover {
         border: 1px solid var(--dark-blue)
      }
      &:active {
         background-color: var(--dark-orange);
         border: 1px solid transparent;
      }
   }

   &.blue {
      color: var(--white);
      background-color: var(--blue);
      &:hover {
         border: 1px solid var(--dark-orange)
      }
      &:active {
         background-color: var(--dark-blue);
         border: 1px solid transparent;
      }
   }

   &.empty {
      color: var(--black);
      border: 1px solid var(--blue);
      &:hover {
         border: 1px solid var(--dark-orange)
      }
      &:active {
         border: 1px solid var(--extra-blue)
      }
   }
   &:disabled {
      cursor: not-allowed;
      opacity: .5;
   }
}

</style>
