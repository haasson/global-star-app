<template>
   <PageSection>
      <div class="inner">
         <h3>{{title}}</h3>
         <p class="date">{{date}}</p>
         <div class="text" v-html="text"></div>

         <!-- Slider -->
         <Swiper
             v-if="gallery.length"
             :space-between="20"
             :freeMode="true"
             class="list"
         >
            <SwiperSlide v-for="item in gallery">
               {{item}}
            </SwiperSlide>
         </Swiper>
      </div>
   </PageSection>
</template>

<script>
import SwiperCore, {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'

import PageSection from "./Providers/PageSection.vue";

export default {
   name: "FullArticle",
   components: {PageSection, Swiper, SwiperSlide},
   props: {
      title: {
         type: String,
         required: true
      },
      date: {
         type: String,
      },
      text: {
         type: String,
         required: true
      },
      gallery: {
         type: Array,
         default: []
      }
   }
}
</script>

<style lang="scss" scoped>
h3 {
   font-size: var(--title-size);
   font-weight: 500;
   margin-bottom: 5px;
}

.date {
   margin-bottom: 10px;
   font-size: var(--subtitle-size);
   color: var(--dark-orange)
}

.text {
   font-size: var(--subtitle-size);
}
</style>
