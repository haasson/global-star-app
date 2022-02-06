<template>
   <div class="burger" :class="{active: isOpen}" @click="toggleMenu">
      <div></div>
   </div>
</template>

<script>
import useMenuMode from "../../composable/menuMode.js";

export default {
   name: "AppBurger",

   setup() {
      const {isOpen, toggleMenu} = useMenuMode()

      return {
         isOpen,
         toggleMenu
      }
   }
}
</script>

<style lang="scss" scoped>
@mixin burger-line {
   position: absolute;
   left: 0;
   width: 100%;
   height: 2px;
   background-color: var(--white);
}

.burger {
   display: block;
   position: relative;
   width: 24px;
   height: 13px;
   flex-shrink: 0;
   z-index: 9;
   margin-left: 20px;
   cursor: pointer;

   div {
      @include burger-line();
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
      transition: opacity .3s;
   }

   &:before,
   &:after {
      @include burger-line();
      content: "";
      transform: rotate(0deg);
      transform-origin: center center;
      transition: .3s;
   }

   &:before {
      top: 0;
   }

   &:after {
      bottom: 0;
   }

   &.active {
      div {
         opacity: 0;
      }

      &:before {
         top: 50%;
         transform: translateY(-50%) rotate(45deg);
      }

      &:after {
         bottom: 50%;
         transform: translateY(50%) rotate(-45deg);
      }
   }
}

</style>
