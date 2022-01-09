<template>
   <div class="image-block">
      <img :src="src" alt="">
      <AppTitle v-if="title" :position="titlePosition" :type="titleType" class="title">{{title}}</AppTitle>
   </div>

</template>

<script>
import AppTitle from "../AppTitle.vue";
export default {
   name: "HeadImage",
   components: {AppTitle},
   props: {
      src: {
         type: String,
         required: true
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
   }
}
</script>

<style lang="scss" scoped>
.image-block {
   position: relative;
}
img {
   width: 100%;
   max-height: 800px;
   object-fit: cover;
   filter: brightness(.65);
}
.title {
   position: absolute;
   width: 100%;
   bottom: 70px;
   right: 0;
}
</style>
