<template>
   <div class="flex-container">
      <div class="image-container">
         <img :src="imageSrc" alt="">
         <TipPoint
             v-for="point in points"
             :text="point.text"
             :style="{left: `${point.left}%`, top: `${point.top}%`}"
             class="point"
         />
      </div>
   </div>
</template>

<script>
import useLocalImage from "../../composable/localImage.js";
import TipPoint from "../TipPoint.vue";

export default {
   name: "ImageWithMarkers",
   components: {TipPoint},
   props: {
      imagePath: {
         type: String,
         required: true
      },
      points: {
         type: Array,
         required: true
      }
   },

   setup({imagePath}) {
      const {imageSrc} = useLocalImage(imagePath)
      return {imageSrc}
   }
}
</script>

<style lang="scss" scoped>
.flex-container {
   display: flex;
   justify-content: center;
}
.image-container {
   position: relative;
}
.point {
   position: absolute;
}
</style>
