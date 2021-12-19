<template>
   <img :src="src" alt="">
</template>

<script>
export default {
   name: "HeadImage",
   props: {
      src: {
         type: String,
         required: true
      }
   }
}
</script>

<style lang="scss" scoped>
img {
   width: 100%;
   max-height: 700px;
   object-fit: cover;
   filter: brightness(.65);
}
</style>
