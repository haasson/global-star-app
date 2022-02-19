<template>
   <div class="item" :style="{minHeight: `${itemHeight}px`}">
      <img class="image" :class="{'with-shadow': text && !noShadow }" :src="imageSrc" alt="">
      <p v-if="text" v-html="text"></p>
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
      },
      noShadow: {
         type: Boolean,
         default: false
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
   &.with-shadow {
      box-shadow: var(--image-shadow);
   }
}
p {
   min-height: 30px;
   margin-top: 20px;
   font-size: var(--text-size);
   text-align: center;
   @media(max-width: 568px) {
      font-size: 14px;
      font-weight: 500;
   }
}
</style>
