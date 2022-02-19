<template>
   <PageSection v-if="!isHidden || isAdmin">
      <Component
          :is="width > 768 ? 'div' : 'router-link'"
          :to="`${articleType}/${id}`"
          class="inner"
          :class="{inactive: isAdmin && isHidden}"
      >
         <div class="image-block">
            <img v-if="cardImage" class="image" :src="cardImage.src" alt="">
         </div>
         <div class="content">
            <h3>{{title}}</h3>
            <p v-if="articleType === 'news'" class="date">{{formattedDate}}</p>
            <div class="text" v-ellipsis.sentence v-html="description"></div>
            <div class="links">
               <router-link class="link" :to="`${articleType}/${id}`">Просмотреть</router-link>
            </div>
         </div>
      </Component>
   </PageSection>
</template>

<script>
import {computed, ref, watch} from 'vue'
import dayjs from "dayjs";

import {isAdmin} from "../../../store";
import useStorage from "../../../composable/storage.js";
import {descriptionToHTML} from "../../../helpers/interface.js";
import PageSection from "../../../components/Providers/PageSection.vue";
import useWindowDimensions from "../../../composable/windowDimensions.js";

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
         type: String,
         required: true
      },
      isHidden: {
         type: Boolean,
         default: false
      }
   },

   setup(props) {
      const {width} = useWindowDimensions()
      const {get, data: cardImage, error} = useStorage()
      get(props.image)

      const formattedDate = computed(() => {
         return dayjs(props.time).format('DD.MM.YYYY')
      })

      const description = computed(() => {
         return descriptionToHTML(props.text, 'paragraph')
      })

      return {isAdmin, width, cardImage, formattedDate, description}
   }
}
</script>

<style lang="scss" scoped>
.inner{
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   padding-bottom: 50px;
   border-bottom: 1px solid rgba(0, 0, 0, 0.2);
   &.inactive {
      opacity: .4;
   }
}
.image-block{
   flex-shrink: 0;
   max-width: 390px;
   width: 35%;
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
   margin-bottom: 7px;
   font-size: var(--subtitle-size);
   color: var(--orange);
}
.text{
   height: 200px;
   margin-bottom: 10px;
   overflow: hidden;
   font-size: var(--subtitle-size);
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

@media(max-width: 1200px) {
   .inner {
      padding-bottom: 35px;
   }
   .image-block {
      margin-right: 50px;
   }
}

@media(max-width: 768px) {
   .inner {
      display: block;
      padding-bottom: 0;
      border: none;
   }
   .image-block {
      width: auto;
      margin: 0 auto 30px;
      padding: 0 15px;
   }
   .text {
      height: 80px;
      margin-bottom: 0;
   }
   .links {
      display: none;
   }
}
@media(max-width: 568px) {
   .image-block{
      height: 180px;
   }
}
</style>
