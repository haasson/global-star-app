<template>
   <Card class="card" :link="link">
      <h3 v-html="title" />
      <div class="image">
         <img :src="image" alt="">
      </div>
   </Card>
</template>

<script>
import {shallowRef, watchEffect} from "vue";

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
      name: {
         type: String,
      },
      link: {
         type: Object,
      }
   },

   setup({name}) {
      const image = shallowRef('')
      watchEffect(() => {
         import((`../../assets/images/products/cards/${name}.png`)).then(component => {
            image.value = component.default
         })
      })
      return {image}
   }
}
</script>

<style lang="scss" scoped>
// TODO: image doesn't fit container
.card {
   display: flex;
   flex-direction: column;
   align-items: center;

   height: 270px;
   max-width: 433px;
   margin: 0 auto 30px;
   padding: 20px;
   text-align: center;
   font-size: var(--subtitle-size);
   font-weight: 500;

   cursor: pointer;
   @media(max-width: 568px) {
      font-size: 16px;
   }
}

h3 {
   margin-bottom: 7px;
   color: var(--black)
}

.image {
   display: flex;
   align-items: center;
   flex-grow: 1;
}
</style>
