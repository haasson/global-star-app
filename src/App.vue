<template>
   <div id="modals"/>
   <AppHeader/>

   <main>
      <RouterView />
<!--      <transition v-else name="fade" appear>-->
<!--         <RouterView />-->
<!--      </transition>-->
   </main>

   <AppFooter @chatButtonClicked="openModal"/>

   <ContactFormModal ref="modal" />
</template>

<script>
import {ref} from 'vue'
import AppHeader from "./components/Sections/AppHeader.vue";
import AppFooter from "./components/Sections/AppFooter.vue";
import ContactFormModal from "./components/Modals/ContactFormModal.vue";

export default {
   components: {ContactFormModal, AppFooter, AppHeader},

   setup() {
      const modal = ref(null)
      const openModal = async () => modal.value.open()

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


