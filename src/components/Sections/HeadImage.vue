<template>
   <div class="image-block">
      <img :src="src" alt="">
      <AppTitle v-if="width > 992 && title" :position="titlePosition" :type="titleType" class="title">{{title}}</AppTitle>
      <div v-if="pageName && width <= 768" class="page-name">
         {{pageName}}
      </div>
   </div>

</template>

<script>
import AppTitle from "../AppTitle.vue";
import useWindowDimensions from "../../composable/windowDimensions.js";
export default {
   name: "HeadImage",
   components: {AppTitle},
   props: {
      src: {
         type: String,
         required: true
      },
      pageName: {
         type: String,
         default: ''
      },
      title: {
         type: String,
         default: ''
      },
      titlePosition: {
         type: String,
         default: 'right'
      },
      titleType: {
         type: String,
      },
   },

   setup() {
      const {width} = useWindowDimensions()

      return {width}
   }
}
</script>

<style lang="scss" scoped>
.image-block {
   position: relative;
}
img {
   width: 100%;
   max-height: 60vh;
   object-fit: cover;
   filter: brightness(.65);
}
.title {
   position: absolute;
   width: 100%;
   bottom: 0;
   right: 0;
}
.page-name {
   position: absolute;
   left: 0;
   right: 0;
   bottom: 24px;
   padding: 5px 15px;
   background-color: var(--orange);
   font-size: var(--title-size);
   font-weight: 600;
   text-align: center;

}
</style>
