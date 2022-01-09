<template>
   <div class="item" :style="{minHeight: `${itemHeight}px`}">
      <img class="image" :src="imageSrc" alt="">
      <p v-if="text">{{text}}</p>
   </div>
</template>

<script>
import useLocalImage from "../../composable/localImage";

export default {
   name: "EmptyCard",
   props: {
      name: {
         type: String,
         required: true
      },
      text: {
         type: String,
         default: ''
      },
      itemHeight: {
         type: Number,
         required: true
      }
   },

   setup({name}) {
      const {imageSrc} = useLocalImage(name)
      return {imageSrc}
   }
}
</script>

<style lang="scss" scoped>
.item{
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 0;
}
.image{
   flex-shrink: 0;
   object-fit: contain;
   margin: auto;
}
p {
   margin-top: 20px;
   font-size: var(--subtitle-size);
   font-weight: 500;
}
</style>
