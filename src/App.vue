<template>
   <div id="modals"/>
   <AppHeader/>

   <main>
      <RouterView />
<!--      <transition v-else name="fade" appear>-->
<!--         <RouterView />-->
<!--      </transition>-->
   </main>

   <AppFooter/>
</template>

<script>
import {ref} from 'vue'



import AppHeader from "./components/Sections/AppHeader.vue";
import AppFooter from "./components/Sections/AppFooter.vue";

export default {
   components: {AppFooter, AppHeader},

   setup() {
      const modal = ref(null)
      const openModal = async () => {
         return await modal.value.open()
      }

      return {openModal, modal}
   }
}
</script>

<style lang="scss">
#app {
   display: flex;
   flex-direction: column;
   min-height: 100vh;
}

main {
   position: relative;
   flex-grow: 1;
}

.fade-leave-active {
   transition: all .3s ease-out;
}
.fade-leave-from {
   opacity: 1;
   transform: translateX(0);
}
.fade-leave-to {
   opacity: 0;
   transform: translateX(40px);
}


</style>


