import {ref, watch} from "vue";

const isOpen = ref(false)
const useMenuMode = () => {
   const toggleMenu = () => isOpen.value = !isOpen.value
   const closeMenu = () => isOpen.value = false


   return {isOpen, toggleMenu, closeMenu}
}

export default useMenuMode
