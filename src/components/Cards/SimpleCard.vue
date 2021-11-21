<template>
   <Card class="item" :style="{minHeight: `${itemHeight}px`}">
      <img class="image" :src="cardImage" alt="">
   </Card>
</template>

<script>
import {ref} from "vue";
import Card from "./Card.vue";
import useImage from "../../composable/useImage";

export default {
   name: "SimpleCard",
   components: {Card},
   props: {
      image: {
         type: String,
         required: true
      },
      itemHeight: {
         type: Number,
         required: true
      }
   },

   setup({image}) {
      const cardImage = useImage(image)

      return {cardImage}
   }
}
</script>

<style lang="scss" scoped>
.item{
   display: flex;
   justify-content: center;
   align-items: center;
}
.image{
   flex-shrink: 0;
}
</style>
