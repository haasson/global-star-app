<template>
   <Card class="card" :style="{backgroundImage: `url(${bgImage})`}">
      <h3 v-html="title" />
   </Card>
</template>

<script>
import {computed, ref} from 'vue'
import {getImageUrl} from "../../helpers/firebase";
import Card from "./Card.vue";
export default {
   name: "SolutionCard",
   components: {Card},
   props: {
      title: {
         type: String,
         required: true
      },
      image: {
         type: String,
      },
      link: {
         type: String,
      }
   },

   setup({image}) {
      const bgImage = ref('')
      if (image) getImageUrl(image).then(res => bgImage.value = res)

      return {bgImage}
   }
}
</script>

<style lang="scss" scoped>
.card {
   display: flex;
   justify-content: center;
   align-items: center;

   background-repeat: no-repeat;
   background-size: cover;

   font-size: 32px;
   font-weight: 700;
   line-height: 1.1;
   color: var(--white);
   text-align: center;
   cursor: pointer;
}
</style>
