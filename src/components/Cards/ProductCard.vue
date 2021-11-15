<template>
   <Card class="card">
      <h3 v-html="title" />
      <div class="image">
         <img :src="cardImage" alt="">
      </div>
   </Card>
</template>

<script>
import {ref} from "vue";
import {getImageUrl} from "../../helpers/firebase";

import Card from "./Card.vue";
import AppPicture from "../App/AppPicture.vue";

export default {
   name: "ProductCard",
   components: {AppPicture, Card},
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
      const cardImage = ref('')
      if (image) getImageUrl(image).then(res => cardImage.value = res)

      return {cardImage}
   }
}
</script>

<style lang="scss" scoped>
// TODO: image doesn't fit container
.card {
   display: flex;
   flex-direction: column;
   align-items: center;

   height: 216px;
   padding: 24px;
   text-align: center;
   font-size: var(--subtitle-size);
   font-weight: 500;

   cursor: pointer;
}

h3 {
   margin-bottom: 7px;
}

.image {
   display: flex;
   align-items: center;
   flex-grow: 1;
}
</style>
