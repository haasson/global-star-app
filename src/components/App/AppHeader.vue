<template>
   <header>
      <div class="wrapper">
         <div class="inner">

            <!-- Logo -->
            <a href="#">
               <AppIcon name="logo" width="287" height="61" />
            </a>

            <!-- Search -->


            <!-- Contacts -->
            <div class="contacts">
               <a href="http://instagtam.com" target="_blank" class="icon">
                  <AppIcon name="instagram" width="30" height="30" />
               </a>
               <a href="tel:+78007006124">+7 (800) 700-61-24 </a>
            </div>

         </div>
      </div>
   </header>
   <AppMenu />
</template>

<script>
import AppIcon from "./AppIcon.vue";
import AppMenu from "./AppMenu.vue";
export default {
   name: "AppHeader",
   components: {AppMenu, AppIcon}
}
</script>

<style lang="scss" scoped>

header {
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
   font-size: 20px;
   .icon {
      margin-right: 16px;
      cursor: pointer;
      transition: transform .1s;
      &:hover {
         transform: scale(1.05);
         filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
   }
}

</style>
