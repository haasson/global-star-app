<template>
   <PageSection tag="header" class="header">
         <div class="inner">

            <!-- Logo -->
            <router-link to="/">
               <AppIcon name="logo" :width="287" :height="61" :scale="isDesktop ? 1 : 0.52" :fill="'white'"/>
            </router-link>

            <!-- Search -->
            <form @submit.prevent="submit">
               <AppInput
                   v-if="width > 768"
                   v-model="searchQuery"
                   inHeader
                   icon="search"
                   placeholder="Поиск..."
                   class="search"
               />
            </form>

            <!-- Contacts -->
            <div class="contacts">
               <a href="https://vk.com/globalstar_rus" target="_blank" class="instagram">
                  <AppIcon name="instagram" :width="30" :height="24" fill="white" :scale="isDesktop ? 1 : 0.8" />
               </a>
               <AppBurger v-if="width <= 768" />
               <a v-else href="tel:+78007006124" class="phone dark-bg">+7 (800) 700-61-24</a>
            </div>

         </div>
   </PageSection>
   <AppMenu />
</template>

<script>
import {ref} from "vue";
import useWindowDimensions from "../../composable/windowDimensions.js";
import useMenuMode from "../../composable/menuMode.js";
import useSearch from "../../composable/search.js";

import AppIcon from "../App/AppIcon.vue";
import AppMenu from "./AppMenu.vue";
import AppBurger from "../App/AppBurger.vue";
import AppInput from "../App/AppInput.vue";
import PageSection from "../Providers/PageSection.vue";

export default {
   name: "AppHeader",
   components: {PageSection, AppInput, AppBurger, AppMenu, AppIcon},

   setup () {
      const {width, isDesktop} = useWindowDimensions()
      const {isOpen} = useMenuMode()

      const searchQuery = ref('')
      const {search} = useSearch()

      const submit = () => {
         if (!searchQuery.value) return
         search(searchQuery.value)
         searchQuery.value = ''
      }


      return {
         width,
         isDesktop,

         isOpen,

         searchQuery,
         search,
         submit,
      }
   }
}
</script>

<style lang="scss" scoped>
.header {
   position: relative;
   z-index: 70;
   padding: 35px 0;
   background-color: var(--light-blue);
   color: var(--white)
}

.inner {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

form {
   flex-grow: 1;
   max-width: 350px;
   margin-right: auto;
   margin-left: 40px;
}

.contacts {
   display: flex;
   align-items: center;
   flex-shrink: 0;
   margin-left: 30px;
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
   .header {
      padding: 28px 0;
   }
}

@media(max-width: 768px) {
   .header {
      padding: 23px 0;
   }
   .burger {
      margin-left: 16px;
      cursor: pointer;
   }
}

@media(max-width: 420px) {
   .header {
      padding: 14px 0;
   }
}
</style>
