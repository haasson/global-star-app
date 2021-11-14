<template>
   <div class="list">
      <div class="wrapper">
         <div class="inner">

            <h3 v-if="title">{{title}}</h3>

            <!-- Slider -->
            <Swiper
                v-if="isSlider"
                :slides-per-view="itemsPerRow"
                :space-between="34"
                :pagination="{clickable: true}"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
               <SwiperSlide v-for="item in items">
                  Slide
               </SwiperSlide>
            </Swiper>

            <!-- Simple list -->
            <ul v-else>
               <li v-for="item in items" :style="{width: `calc(100%/${itemsPerRow} - 34px)`}">
                  Item
               </li>
            </ul>

         </div>
      </div>
   </div>


</template>

<script>
import SwiperCore, {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/scss';
import 'swiper/scss/pagination';

SwiperCore.use([Pagination]);

export default {
   name: "AppList",
   components: {Swiper, SwiperSlide, Pagination},
   props: {
      items: {
         type: Array,
         required: true
      },
      title: {
         type: String
      },
      isSlider: {
         type: Boolean,
         default: false
      },
      itemsPerRow: {
         type: Number,
         default: 4
      }
   },

   setup() {
      const onSwiper = (swiper) => {
         console.log(swiper);
      };
      const onSlideChange = () => {
         console.log('slide change');
      };
      return {
         onSwiper,
         onSlideChange,
         modules: [Pagination],
      };
   },
}
</script>

<style scoped>

</style>
