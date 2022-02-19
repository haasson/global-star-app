import {computed, reactive} from 'vue'

const modals = reactive({
   contact: false,
   video: false
})

const attrs = reactive({})

const useModal = (name) => {
   const open = (newAttrs) => {
      Object.assign(attrs, newAttrs)
      modals[name] = true
   }
   const close = () => {
      Object.keys(attrs).forEach(key => delete attrs[key])
      modals[name] = false
   }
   const isOpen = computed(() => name && modals[name])

   return {isOpen, open, close, attrs}
};

export default useModal
