import {shallowRef, watchEffect} from "vue";

const useLocalImage = (path) => {
   const imageSrc = shallowRef('')
   watchEffect(() => {
      import((`../assets/images/${path}`)).then(component => {
         imageSrc.value = component.default
      })
   })

   return {imageSrc}
}


export default useLocalImage
