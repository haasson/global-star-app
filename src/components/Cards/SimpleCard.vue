<template>
   <Card class="item" :style="{height: `${itemHeight}px`}" :link="link">
      <h3 v-if="title">{{title}}</h3>
      <div class="image-wrap" :style="{maxHeight: `${imageHeight}px`}">
         <img class="image" :src="imageSrc" alt="" >
      </div>
      <p v-if="text" v-html="text" class="text"></p>
   </Card>
</template>

<script>
import Card from "./Card.vue";
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
   //@media(max-width: 568px) {
   //   padding: 12px;
   //}

}
h3 {
   font-size: var(--title-size);
   font-weight: 700;
   line-height: 1.15;
   text-align: center;
   color: var(--black);
   margin-bottom: 20px;
}
.image-wrap {
   position: relative;
   height: 100%;
   margin: 0 auto;
}
.image{
   //flex-shrink: 0;
   margin: 0 auto;
   height: 100%;
   object-fit: contain;
}
p {
   margin-top: 12px;
   font-size: var(--text-size-big);
   line-height: 1.15;
   text-align: center;
   @media(max-width: 568px) {
      font-size: 16px;
      font-weight: 500;
   }
}
</style>
