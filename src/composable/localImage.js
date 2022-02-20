import {shallowRef, watchEffect} from "vue";

const useLocalImage = (path) => {
   const imageSrc = shallowRef('')
   watchEffect(async () => {
      const url = new URL(`../assets/images/${path}`, import.meta.url);
      imageSrc.value = url.href
   })

   return {imageSrc}
}


export default useLocalImage
