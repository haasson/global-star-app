<template>
   <PageSection>
      <div class="inner">
         <div class="content">
            <p class="text">{{text}}</p>
            <AppButton class="btn" :color="button.color">{{button.text}}</AppButton>
         </div>
         <div class="images">
            <img class="image" :src="cardImage" alt="">
         </div>
      </div>
   </PageSection>
</template>

<script>
import {ref} from 'vue'
import {getImageUrl} from '../helpers/firebase'

import PageSection from "./Providers/PageSection.vue";
import AppButton from "./App/AppButton.vue";
import useImage from "../composable/useImage";
export default {
   name: "TextWithImage",
   components: {AppButton, PageSection},
   props: {
      image: {
         type: String,
         required: true
      },
      text: {
         type: String,
         required: true
      },
      button: {
         type: Object,
      }
   },

   setup({image}) {
      const cardImage = useImage(image)

      return {cardImage}
   }
}
</script>

<style lang="scss" scoped>
.inner{
   display: flex;
   justify-content: space-between;
}
.content{
   max-width: calc(50% - 55px);
}
.text{
   font-size: var(--subtitle-size);
   margin-bottom: 40px;
}
.btn{
   display: block;
   margin: 0 auto;
}
.images{
   max-width: calc(50% - 15px);
}

</style>
