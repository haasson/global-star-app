<template>
   <Teleport to="#modals">
      <div v-if="isOpen">
         <!-- Container -->
         <div class="container">
            <!-- Overlay -->
            <div class="overlay" @click="decline"></div>
            <div
                class="modal"
                :style="`min-width: ${minWidth}px; max-width: ${maxWidth}px;`"
            >
               <!-- Header -->
               <div class="header">
                  <h2 class="title">
                     <slot name="title" />
                  </h2>
               </div>

               <!-- Body -->
               <div  v-if="$slots.content" class="content" :class="{ 'overflow-hidden overflow-y-auto': scrollable }">
                  <slot name="content" />
               </div>
               <!-- Footer -->
               <div v-if="$slots.controls" class="controls">
                  <slot name="controls" :decline="decline" :confirm="confirm" />
               </div>
               <!-- Close icon -->
               <button
                   v-show="closeIcon"
                   @click="decline"
                   class="close"
               >
                  <AppIcon name="close" width="20" height="20"/>
               </button>
            </div>
         </div>
      </div>
   </Teleport>
</template>

<script>
import { onBeforeUnmount, ref, watch } from 'vue'
import AppIcon from "./AppIcon.vue";

export default {
   name: 'AppModal',
   components: {AppIcon},
   props: {
      closeIcon: {
         type: Boolean,
         default: true
      },
      minWidth: {
         type: Number,
         default: 500
      },
      maxWidth: {
         type: Number,
         default: 960
      },
      error: {
         type: String,
         default: ''
      },
      success: {
         type: String,
         default: ''
      },
      closeByEsc: {
         type: Boolean,
         default: true
      },
      scrollable: {
         type: Boolean,
         default: true
      }
   },

   setup(props) {
      let resolve
      let reject

      const isOpen = ref(false)
      watch(isOpen, () => {
         if (isOpen.value) {
            document.body.style.setProperty('overflow', 'hidden')
         }
      })

      const open = () => {
         isOpen.value = true
         return new Promise((ok, fail) => {
            resolve = ok
            reject = fail
         })
      }

      const decline = () => {
         close()
         resolve(false)
      }

      const confirm = () => {
         close()
         resolve(true)
      }

      const close = () => {
         isOpen.value = false
         document.body.style.removeProperty('overflow')
      }

      const onEscape = e => {
         if (isOpen.value && e.keyCode === 27) {
            decline()
         }
      }

      if (props.closeByEsc) {
         document.addEventListener('keydown', onEscape)
      }

      onBeforeUnmount(() => {
         document.removeEventListener('keydown', onEscape)
      })

      return {
         isOpen,
         open,
         decline,
         confirm
      }
   }
}
</script>

<style lang="scss" scoped>
.container {
   position: fixed;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 99;
}
.overlay {
   position: absolute;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0,0,0,.7);
}
.modal {
   position: relative;
   max-height: 90%;
   background-color: var(--white);
}
.header {
   padding: 16px;
   border-bottom: 1px solid var(--brown);
   font-size: var(--title-size);
}
.content {
   padding: 16px;
   border-bottom: 1px solid var(--brown);
}
</style>
