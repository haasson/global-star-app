<template>
   <PageSection v-if="!isHidden || isAdmin">
      <div class="inner" :class="{inactive: isAdmin && isHidden}">
         <div class="image-block">
            <img v-if="cardImage" class="image" :src="cardImage.src" alt="">
         </div>
         <div class="content">
            <h3>{{title}}</h3>
            <p class="date">{{formattedDate}}</p>
            <div class="text" v-html="description"></div>
            <div class="links">
               <router-link class="link" :to="`${articleType}/${id}`">Просмотреть</router-link>
            </div>
         </div>
      </div>
   </PageSection>
</template>

<script>
import {computed, ref, watch} from 'vue'
import dayjs from "dayjs";

import {isAdmin} from "../store";
import useStorage from "../composable/storage";
import {descriptionToHTML} from "../helpers/interface";
import PageSection from "./Providers/PageSection.vue";

export default {
   name: "ArticleItem",
   components: { PageSection},

   props: {
      articleType: {
         type: String,
         required: true
      },
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
      isHidden: {
         type: Boolean,
         default: false
      }
   },

   setup(props) {
      const {get, data: cardImage, error} = useStorage()
      get(props.image)

      const formattedDate = computed(() => {
         return dayjs(props.time).format('DD.MM.YYYY')
      })

      const description = computed(() => {
         return descriptionToHTML(props.text)
      })

      return {isAdmin, cardImage, formattedDate, description}
   }
}
</script>

<style lang="scss" scoped>
.inner{
   display: flex;
   justify-content: space-between;
   padding-bottom: 50px;
   border-bottom: 1px solid rgba(0, 0, 0, 0.2);
   &.inactive {
      opacity: .4;
   }
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
