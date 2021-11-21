<template>
   <PageSection>
      <div class="inner">
         <div class="images">
            <img class="image" :src="cardImage" alt="">
         </div>
         <div class="content">
            <h3>{{title}}</h3>
            <p class="date">{{date}}</p>
            <div class="text" v-html="text"></div>
            <div class="links">
               <a class="link" :href="link">Просмотреть</a>
            </div>
         </div>
      </div>
   </PageSection>
</template>

<script>
import {ref} from 'vue'
import {getImageUrl} from '../helpers/firebase'

import PageSection from "./Providers/PageSection.vue";
import useImage from "../composable/useImage";

export default {
   name: "NewsItem",
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
      date: {
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
.inner{
   display: flex;
   justify-content: space-between;
   padding-bottom: 50px;
   border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.images{
   max-width: calc(50% - 15px);
}
.image{
   box-shadow: var(--image-shadow);
}
.content{
   max-width: calc(50% - 15px);
}
h3{
   font-size: var(--title-size);
   font-weight: 500;
}
.date{
   font-size: var(--subtitle-size);
   color: var(--orange);
}
.text{
   font-size: var(--subtitle-size);
   p:first-child{
      margin-bottom: 10px;
   }
}
.links{
   text-align: right;
}
.link{
   font-size: var(--subtitle-size);
   font-weight: 500;
   color: var(--light-blue);
   text-decoration: underline;
}
</style>
