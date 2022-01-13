<template>
   <Card class="item" :style="{minHeight: `${itemHeight}px`}" :link="link">
      <h3 v-if="title">{{title}}</h3>
      <img class="image" :src="imageSrc" alt="" :style="{maxHeight: `${imageHeight}px`}">
      <p v-if="text" class="text">{{text}}</p>
   </Card>
</template>

<script>
import {ref} from "vue";
import Card from "./Card.vue";
import useImage from "../../composable/useImage";
import useLocalImage from "../../composable/localImage";

export default {
   name: "SimpleCard",
   components: {Card},
   props: {
      name: {
         type: String,
         required: true
      },
      title: {
         type: String
      },
      text: {
         type: String
      },
      link: {
         type: String
      },
      itemHeight: {
         type: Number,
         required: true
      },
      imageHeight: {
         type: Number,
         default: 1000
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
   //justify-content: center;
   align-items: center;
   padding: 24px;
   //height: 100%;
}
h3 {
   font-size: var(--title-size);
   font-weight: 700;
   line-height: 1.15;
   text-align: center;
   color: var(--black);
   margin-bottom: 20px;
}
.image{
   flex-shrink: 0;
   margin: auto;
}
p {
   margin-top: 12px;
   font-size: var(--text-size-big);
   font-weight: 500;
   line-height: 1.15;
   text-align: center;
}
</style>
