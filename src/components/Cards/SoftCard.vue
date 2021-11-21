<template>
   <Card class="item" v-if="text">
      <div class="rectangle">
         <div class="white">
            <img class="image" :src="cardImage" alt="">
         </div>
         <div class="name">
            <p class="text">{{ text }}</p>
         </div>
      </div>
   </Card>

   <Card class="item middle" v-else>
      <img class="image-big" :src="cardImage" alt="">
   </Card>
</template>

<script>
import {ref} from "vue";
import Card from "./Card.vue";
import useImage from "../../composable/useImage";

export default {
   name: "SoftItem",
   components: {Card},
   props: {
      image: {
         type: String,
         required: true
      },
      text: {
         type: String,
         required: true
      },
   },

   setup({image}) {
      const cardImage = useImage(image)

      return {cardImage}
   }
}
</script>

import {ref} from 'vue'
import {getImageUrl} from '../helpers/firebase'

import PageSection from "./Providers/PageSection.vue";
import useImage from "../composable/useImage";

<style lang="scss" scoped>
.item {
   min-height: 120px;
   padding: 22px 18px;
   box-sizing: border-box;
}

.rectangle {
   display: flex;
   align-items: center;
   max-width: 300px;
   min-height: 75px;
   background-color: var(--darc);
}

.white {
   display: flex;
   justify-content: flex-end;
   min-width: 105px;
   max-height: 66px;
   background-color: var(--white);
   border-radius: 0 7px 7px 0;

}

.image {
   max-height: 66px;
   margin-right: 15px;
}

.name {
   max-height: 163px;
   margin: 0 auto;
}

.text {
   font-size: var(--title-size);
   font-weight: 900;
   color: var(--white);
}

.middle {
   display: flex;
   align-items: center;
}

.image-big {
   margin: 0 auto;
}
</style>
