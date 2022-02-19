<template>
   <Card class="card" :class="{inactive: isHidden}">

      <div class="image" :class="{loading}">
         <img v-if="cardImage" :src="cardImage.src" alt="">
      </div>

      <div v-if="title" v-ellipsis class="title-container">
         <h3 v-html="title" />
      </div>

      <div v-if="text" v-ellipsis class="text-container">
         <p v-html="descriptionToHTML(text, 'paragraph')"></p>
      </div>

      <AppButton v-if="button" :to="link"  class="btn" color="orange">
         {{button}}
      </AppButton>

      <div v-if="removable && isAdmin" class="close" @click="$emit('removeCard')">
         <AppIcon name="close" />
      </div>

   </Card>
</template>

<script>
import {isAdmin} from "../../store";
import Card from "./Card.vue";
import AppButton from "../App/AppButton.vue";
import useStorage from "../../composable/storage.js";
import {descriptionToHTML} from "../../helpers/interface.js";
import AppIcon from "../App/AppIcon.vue";

export default {
   name: "CatalogCard",
   components: {AppIcon, AppButton, Card},
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
      },
      isHidden: {
         type: Boolean,
         default: false
      },
      removable: {
         type: Boolean,
         default: false
      }
   },

   setup({image}) {
      const {get, data: cardImage, loading, error} = useStorage()
      get(image)

      return {isAdmin, descriptionToHTML, cardImage, loading}
   }
}
</script>

<style lang="scss" scoped>
// TODO: box-shadow
.card {
   position: relative;
   padding: 32px 22px;
   color: var(--black);
   box-shadow: var(--card-shadow-shifted);
   &:hover {
      box-shadow: var(--card-shadow-shifted);
   }

   &.inactive {
      opacity: .5;
   }
}

.image {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 180px;
   margin-bottom: 35px;
   opacity: 1;
   transition: opacity 1s;
   &.loading {
      opacity: 0;
   }

   img {
      max-height: 100%;
   }
}

h3 {
   font-weight: 500;
   text-align: center;
   height: 70px;
   margin-bottom: 24px;
   font-size: var(--subtitle-size);
   line-height: 1.15;
   overflow: hidden;
   word-break: break-word;
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
   margin-top: auto;
}

.close {
   position: absolute;
   right:0;
   top: 0;
   padding: 5px;
   background: var(--orange);
   cursor: pointer;
   &:hover {
      background: var(--dark-orange);
   }
}

@media(max-width: 768px) {
   h3 {
      font-size: 20px;
   }
   p {
      font-size: 16px;
   }
}
@media(max-width: 480px) {
   .card {
      padding: 24px 16px;
   }
   .image {
      height: 144px;
      margin-bottom: 24px;
   }
   h3 {
      height: 57px;
      margin-bottom: 12px;
      font-size: 16px;
   }
   p {
      height: 72px;
      margin-bottom: 12px;
      font-size: 12px;
   }
}

</style>
