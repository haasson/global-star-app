<template>
   <div class="app-page" :class="{'top-offset': topOffset, 'bottom-offset': bottomOffset}">
      <div class="app-bg"></div>
      <slot />
   </div>
</template>

<script>
import {defineComponent} from 'vue'

import AppEditor from "./AppEditor.vue";
import AppModal from "../Modals/AppModal.vue";
import AppSection from "./AppSection.vue";
import AppLoader from "./AppLoader.vue";

export default defineComponent({
   name: "AppPage",
   components: {AppLoader, AppSection, AppEditor, AppModal},
   props: {
      topOffset: {
         type: Boolean,
         default: true
      },
      bottomOffset: {
         type: Boolean,
         default: true
      },
   },

   setup() {
   }
})
</script>

<style lang="scss">
.app-bg {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: -1;
   height: 100vh;
   background: linear-gradient(315deg, #ececec 0%, #ececec 37%, #ffffff 37%, #fff calc(100% - 35%), #ececec calc(100% - 35%), #ececec 100%);
}
.app-page {
   display: flex;
   flex-direction: column;
   &.top-offset {
      padding-top: 70px;
      @media(max-width: 992px) {
         padding-top: 50px;
      }
      @media(max-width: 768px) {
         padding-top: 40px;
      }
      @media(max-width: 568px) {
         padding-top: 30px;
      }
      @media(max-width: 480px) {
         padding-top: 24px;
      }
   }
   &.bottom-offset {
      padding-bottom: 100px;
      @media(max-width: 992px) {
         padding-bottom: 70px;
      }
      @media(max-width: 768px) {
         padding-bottom: 60px;
      }
      @media(max-width: 568px) {
         padding-bottom: 40px;
      }
      @media(max-width: 480px) {
         padding-bottom: 24px;
      }
   }
}

.app-page > *:not(:last-child) {
   margin-bottom: 70px;
   @media(max-width: 992px) {
      margin-bottom: 50px;
   }
   @media(max-width: 768px) {
      margin-bottom: 35px;
   }
   @media(max-width: 420px) {
      margin-bottom: 25px;
   }
}
</style>
