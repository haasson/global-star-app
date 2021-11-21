<template>
   <PageSection>
      <div class="inner">
         <img class="image" :src="cardImage" alt="">
         <h3>{{title}}</h3>
         <p class="text">{{text}}</p>
         <a class="link" :href="link">Просмотреть</a>
      </div>
   </PageSection>
</template>

<script>
import {ref} from 'vue'
import {getImageUrl} from '../helpers/firebase'

import PageSection from "./Providers/PageSection.vue";
import useImage from "../composable/useImage";

export default {
   name: "ProjectItem",
   components: { PageSection},
   props: {
      image: {
         type: String,
         required: true
      },
      title: {
         type: String,
         required: true
      },
      text: {
         type: String,
         required: true
      },
      link: {
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

<style lang="scss" scoped>
.image{
   box-shadow: var(--image-shadow);
   margin-bottom: 30px;
}
h3{
   font-size: var(--title-size);
   font-weight: 500;
}
.text{
   font-size: var(--subtitle-size);
   margin-bottom: 10px;
}
.link{
   font-size: var(--subtitle-size);
   font-weight: 500;
   color: var(--light-blue);
   text-decoration: underline;
}
</style>
