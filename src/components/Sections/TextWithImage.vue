<template>
   <PageSection class="block">
      <div class="inner">
         <div class="content">
            <p class="text"><slot /></p>
            <div class="button">
               <AppButton v-if="button" :to="button.to" :color="button.color">{{button.text}}</AppButton>
            </div>
         </div>
         <div class="images" :class="{left: imagePosition === 'left'}">
            <img class="image" :src="imageSrc" alt="">
         </div>
      </div>
   </PageSection>
</template>

<script>
import {ref} from 'vue'
import {getImageUrl} from '../../helpers/firebase.js'

import PageSection from "../Providers/PageSection.vue";
import AppButton from "../App/AppButton.vue";
import useImage from "../../composable/useImage.js";
import useLocalImage from "../../composable/localImage.js";
export default {
   name: "TextWithImage",
   components: {AppButton, PageSection},
   props: {
      image: {
         type: String,
         required: true
      },
      imagePosition: {
         type: String,
         default: 'right'
      },
      button: {
         type: Object,
      }
   },

   setup({image}) {
      const {imageSrc} = useLocalImage(image)
      return {imageSrc}
   }
}
</script>

<style lang="scss" scoped>
.block {
   margin-top: 60px;
}
.inner {
   display: flex;
   justify-content: space-between;
}
.content {
   //max-width: calc(50% - 55px);
   margin-top: 20px;
}
.text {
   font-size: var(--article-text-size);
}
.button {
   text-align: center;
   margin-top: 40px;
}
.images {
   $gap: 60px;
   flex-shrink: 0;
   max-width: calc(50% - 15px);
   margin: 0 0 0 $gap;
   &.left {
      order: -1;
      margin: 0 $gap 0 0;
   }
}

@media(max-width: 768px){
   .block {
      margin-top: 40px;
   }
}

</style>
