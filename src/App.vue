<template>
  <AppHeader/>

  <main>
    <RouterView/>
  </main>

  <AppFooter/>

  <div id="modals"/>
  <ContactFormModal ref="contactModal" @modalClosed="closeContacts"/>
  <VideoModal ref="videoModal" @modalClosed="closeVideo" :videoAttrs="videoAttrs"/>

  <FloatButton class="float" @onClick="open"/>

  <AppLoader v-if="globalLoading"/>
</template>

<script>
import { ref, watch } from 'vue'
import { globalLoading } from './store'

import useModal from './composable/modal.js'
import AppHeader from './components/Sections/AppHeader.vue'
import AppFooter from './components/Sections/AppFooter.vue'
import ContactFormModal from './components/Modals/ContactFormModal.vue'
import VideoModal from './components/Modals/VideoModal.vue'
import AppLoader from './components/App/AppLoader.vue'
import FloatButton from './components/App/FloatButton.vue'

export default {
  components: { FloatButton, AppLoader, VideoModal, ContactFormModal, AppFooter, AppHeader },

  setup() {
    const contactModal = ref(null)
    const { isOpen: isContactModalOpen, close: closeContacts } = useModal('contact')
    watch(isContactModalOpen, () => {
      if (isContactModalOpen.value) contactModal.value.open()
    })

    const videoModal = ref(null)
    const { isOpen: isVideoModalOpen, close: closeVideo, attrs: videoAttrs } = useModal('video')
    watch(isVideoModalOpen, () => {
      if (isVideoModalOpen.value) videoModal.value.open()
    })

    const { open } = useModal('contact')

    return { globalLoading, contactModal, videoModal, closeContacts, closeVideo, videoAttrs, open }
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

.float {
  position: fixed;
  z-index: 72;
  bottom: 5vw;
  right: 5vw;
}
</style>


