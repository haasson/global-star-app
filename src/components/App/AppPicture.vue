<template>
   <picture>
      <source type="image/webp" :srcset="srcset.webp">
      <source :type="`image/${ext}`" :srcset="srcset.original">
      <img :src="src" :alt="alt">
   </picture>
</template>

<script>
import {reactive} from "vue";
import appConfig from "../../config/app.config";

export default {
   name: "AppPicture",
   props: {
      src: {
         type: String,
         required: true
      },
      alt: {
         type: String,
         default: ''
      }
   },

   setup(props) {
      const srcset = reactive({})
      const [path, ext] = props.src.split('.')
      const {useRetina} = appConfig

      if (useRetina) {
         srcset.original = `${path}@2x.${ext} 2x, ${path}.${ext} 1x`
         srcset.webp = `${path}@2x.webp 2x, ${path}.webp 1x`
      } else {
         srcset.original = `${path}.${ext}`
         srcset.webp = `${path}.webp`
      }

      // const cardImage = useImage(image)

      return {srcset, ext}
   }
}
</script>

<style scoped>

</style>
