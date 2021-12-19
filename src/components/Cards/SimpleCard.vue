<template>
   <Card class="item" :style="{minHeight: `${itemHeight}px`}" link="/wer">
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
      name: {
         type: String,
         required: true
      },
      itemHeight: {
         type: Number,
         required: true
      }
   },

   setup({name}) {
      const cardImage = useImage(name)

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
