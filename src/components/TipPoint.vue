<template>
   <div>
      <div
          class="point"
          ref="buttonEl"
          @mouseover="open"
          @mouseleave="close"
      >
         <AppIcon name="gear" width="30"/>
      </div>


      <div ref="dropdownEl" v-show="isOpen" class="dropdown">
         {{text}}
      </div>
   </div>
</template>

<script>
import AppIcon from "./App/AppIcon.vue";
import useDropdown from "../composable/dropdown.js";

export default {
   name: "TipPoint",
   components: {AppIcon},
   props: {
      text: {
         type: String,
         required: true
      }
   },
   setup() {
      const popperOptions = {placement: 'right', offset: [0, 14]}
      const {buttonEl, dropdownEl, open, close, isOpen} = useDropdown(popperOptions)

      return {
         buttonEl,
         dropdownEl,
         open,
         close,
         isOpen,
      }
   }
}
</script>

<style lang="scss" scoped>
.point {
   width: 30px;
   height: 30px;
   cursor: pointer;

   &:hover {
      box-shadow: var(--button-shadow);
   }
}

.dropdown {
   max-width: 175px;
   padding: 8px;
   z-index: 1;
   border: 1px solid var(--black);
   border-radius: 4px;
   font-size: var(--text-size);
   font-weight: 500;
   line-height: 1.35;
   background: var(--white);
}
</style>
