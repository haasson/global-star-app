<template>
   <PageSection>
      <div class="inner">
         <div class="image-block">
            <img class="image" :src="cardImage" alt="">
         </div>
         <div class="content">
            <h3>{{title}}</h3>
            <p class="date">{{formattedDate}}</p>
            <div class="text" v-html="description"></div>
            <div class="links">
               <router-link class="link" :to="`news/${id}`">Просмотреть</router-link>
            </div>
         </div>
      </div>
   </PageSection>
</template>

<script>
import {computed, ref, watch} from 'vue'
import dayjs from "dayjs";

import useStorage from "../composable/storage";
import {descriptionToHTML} from "../helpers/interface";
import PageSection from "./Providers/PageSection.vue";

export default {
   name: "ArticleItem",
   components: { PageSection},
   articleType: {
      type: String,
      required: true
   },
   props: {
      image: {
         type: String,
         required: true
      },
      title: {
         type: String,
         required: true
      },
      time: {
         type: Number,
         required: true
      },
      text: {
         type: String,
         required: true
      },
      id: {
         type: Number,
         required: true
      },
   },

   setup(props) {
      console.log(props)
      const {get, data: cardImage, error} = useStorage()
      get(props.image)

      watch(error, () => {
         console.log(error)
      })

      const formattedDate = computed(() => {
         return dayjs(props.time).format('DD.MM.YYYY')
      })

      const description = computed(() => {
         return descriptionToHTML(props.text)
      })

      return {cardImage, formattedDate, description}
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
.image-block{
   flex-shrink: 0;
   width: 390px;
   height: 290px;
   margin-right: 70px;
}
.image{
   width: 100%;
   height: 100%;
   object-fit: cover;
   box-shadow: var(--image-shadow);
}
.content{
   //max-width: calc(50% - 15px);
   display: flex;
   flex-direction: column;
   flex-grow: 1;
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
   margin-top: auto;
   text-align: right;
}
.link{
   font-size: var(--subtitle-size);
   font-weight: 500;
   color: var(--light-blue);
   text-decoration: underline;
}
</style>
