<template>
   <PageSection class="block">
      <div class="inner">
         <div class="content">
            <p class="text" :class="[textAlign]"><slot /></p>
            <div v-if="button" class="button">
               <AppButton :to="button.to" :color="button.color" @click="$emit('onClick')">{{button.text}}</AppButton>
            </div>
         </div>
         <div class="images" :class="{left: imagePosition === 'left'}">
            <img class="image" :src="imageSrc" alt="">
         </div>
      </div>
   </PageSection>
</template>

<script>

import PageSection from "../Providers/PageSection.vue";
import AppButton from "../App/AppButton.vue";
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
      },
      textAlign: {
         type: String,
         default: 'left'
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

@media(max-width: 992px){
   .block {
      margin-top: 40px;
   }
   .inner {
      flex-direction: column;
   }
   .content {
      margin: 0 auto;
   }
   .images {
      margin: 0 auto 45px;
      max-width: 100%;
      order: -1;
      &.left {
         margin: 0 auto 45px;
      }
   }
   .text {
      &.center {
         text-align: center;
      }
   }
}

@media(max-width: 480px){
   .block {
      margin-top: 24px;
   }
   .button {
      margin-top: 32px;
   }
   .images {
      margin-bottom: 20px;
      &.left {
         margin-bottom: 20px;
      }
   }
}

@media(max-width: 420px){
   .list-title{
      margin-bottom: 5px;
   }
}

</style>
