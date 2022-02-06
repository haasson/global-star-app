<template>
   <header>
      <div class="wrapper">
         <div class="inner">

            <!-- Logo -->
            <router-link to="/">
               <AppIcon name="logo" width="287" height="61" :scale="isDesktop ? 1 : 0.52" :fill="'white'"/>
            </router-link>

            <!-- Search -->

            <!-- Contacts -->
            <div class="contacts">
               <a href="http://instagtam.com" target="_blank" class="instagram">
                  <AppIcon name="instagram" width="30" height="30" :scale="isDesktop ? 1 : 0.8" />
               </a>
               <AppBurger v-if="width <= 768" />
               <a v-else href="tel:+78007006124" class="phone dark-bg">+7 (800) 700-61-24</a>
            </div>

         </div>
      </div>
   </header>
   <AppMenu />
</template>

<script>
import AppIcon from "../App/AppIcon.vue";
import AppMenu from "./AppMenu.vue";
import {ref} from "vue";
import useWindowDimensions from "../../composable/windowDimensions.js";
import useMenuMode from "../../composable/menuMode.js";
import AppBurger from "../App/AppBurger.vue";
export default {
   name: "AppHeader",
   components: {AppBurger, AppMenu, AppIcon},

   setup () {
      const {width, isDesktop} = useWindowDimensions()
      const {isOpen} = useMenuMode()

      return {
         width,
         isDesktop,

         isOpen
      }
   }
}
</script>

<style lang="scss" scoped>
header {
   position: relative;
   z-index: 1;
   padding: 35px 0;
   background-color: var(--light-blue);
   color: var(--white)
}

.inner {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.contacts {
   display: flex;

   align-items: center;
   font-size: var(--subtitle-size);
   .instagram {
      cursor: pointer;
      transition: transform .1s;
      &:hover {
         transform: scale(1.1);
         filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
   }
   .phone {
      margin-left: 16px;
   }
}


@media(max-width: 992px) {
   header {
      padding: 28px 0;
   }
}

@media(max-width: 768px) {
   header {
      padding: 23px 0;
   }
   .burger {
      margin-left: 16px;
      cursor: pointer;
   }
}

@media(max-width: 420px) {
   header {
      padding: 14px 0;
   }
}
</style>
