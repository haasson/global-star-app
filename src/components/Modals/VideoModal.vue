<template>
   <AppModal ref="modal" :closeIcon="false" :maxWidth="1200" bg="blue">
      <template #content>
         <VideoSection :src="video" inModal/>
      </template>
   </AppModal>
</template>

<script>
import AppModal from "./AppModal.vue";
import VideoSection from "../Sections/VideoSection.vue";
import {ref, shallowRef} from "vue";

export default {
   name: "VideoModal",
   components: {VideoSection, AppModal},
   props: {
      videoAttrs: {
         type: Object,
         required: true
      }
   },

   setup(props) {
      const video = shallowRef('')

      const modal = ref(null)
      const open = async () => {
         const url = new URL(`../../assets/video/${props.videoAttrs.src}`, import.meta.url);
         video.value = url.href
         modal.value.open()
      }


      return {modal, open, video}
   }
}
</script>

<style scoped>

</style>
