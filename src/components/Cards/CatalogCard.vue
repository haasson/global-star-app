<template>
   <Card class="card">

      <div class="image">
         <img :src="cardImage" alt="">
      </div>

      <div v-ellipsis class="title-container">
         <h3 v-html="title" />
      </div>

      <div v-ellipsis class="text-container">
         <p v-html="text"></p>
      </div>

      <AppButton v-if="button" :href="link" class="btn" color="orange">
         {{button}}
      </AppButton>

   </Card>
</template>

<script>
import {ref} from "vue";
import {getImageUrl} from "../../helpers/firebase";
import Card from "./Card.vue";
import AppButton from "../App/AppButton.vue";
import useImage from "../../composable/useImage";

export default {
   name: "CatalogCard",
   components: {AppButton, Card},
   props: {
      title: {
         type: String,
         required: true
      },
      image: {
         type: String,
      },
      text: {
         type: String,
      },
      button: {
        type: String,
         default: 'Просмотреть'
      },
      link: {
         type: String,
      }
   },

   setup({image}) {
      const cardImage = useImage(image)

      return {cardImage}
   }
}
</script>

<style lang="scss" scoped>
// TODO: box-shadow
.card {
   padding: 58px 22px 32px;
   color: var(--black);
   box-shadow: var(--card-shadow-shifted);
   &:hover {
      box-shadow: var(--card-shadow-shifted);
   }
}

.image {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 180px;
   margin-bottom: 35px;
}

h3 {
   font-weight: 500;
   text-align: center;
   height: 70px;
   margin-bottom: 24px;
   font-size: var(--subtitle-size);
   line-height: 1.15;
   overflow: hidden;
}

p {
   height: 94px;
   margin-bottom: 32px;
   font-size: var(--text-size);
   overflow: hidden;
}

.btn {
   min-width: auto;
   width: 100%;
}
</style>
