<template>
   <PageSection>
      <div v-if="!isMobileDevice" class="image-big">
         <img :src="currentSlide" alt="">
      </div>

      <Swiper
          :slidesPerView="1"
          :slideToClickedSlide="true"
          :spaceBetween="20"
          :pagination="{clickable: true}"
          class="list"
          @tap="onChange"
          :breakpoints="breakpoints"
      >
         <SwiperSlide v-for="slide in slidesComponents" class="slide">
            <img :src="slide" alt="">
         </SwiperSlide>
      </Swiper>
   </PageSection>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {ref, watch, watchEffect} from "vue";
import PageSection from "../Providers/PageSection.vue";
import useLocalImage from "../../composable/localImage.js";
import useWindowDimensions from "../../composable/windowDimensions.js";

export default {
   name: "AppGallery",
   components: {PageSection, Swiper, SwiperSlide},
   props: {
      slides: {
         type: Array,
         required: true
      },
      fromStorage: {
         type: Boolean,
         default: false
      }
   },

   setup(props) {
      const slidesComponents = ref([])
      const currentSlide = ref('')

      watch(props, () => {
         if (!props.fromStorage) {
            props.slides.forEach(slide => {
               const {imageSrc} = useLocalImage(slide)
               slidesComponents.value.push(imageSrc.value)
            })
         } else {
            slidesComponents.value = props.slides
         }
      }, {immediate: true})

      watchEffect(() => {
         currentSlide.value = slidesComponents.value[0]
      })

      const onChange = (event) => {
         currentSlide.value = slidesComponents.value[event.clickedIndex] || currentSlide.value
      }

      const {isMobileDevice} = useWindowDimensions()

      const breakpoints = {
         "992": {
            "slidesPerView": 'auto',
            "spaceBetween": 20,
            "pagination": false
         },
      }

      return {
         slidesComponents,
         currentSlide,
         onChange,
         breakpoints,

         isMobileDevice,
      }
   }
}
</script>

<style lang="scss" scoped>
.image-big {
   width: calc(100% - 11px);
   margin-bottom: 34px;
   box-shadow: var(--image-shadow);
   height: 700px;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
}

.slide {
   width: 244px;
   height: 136px;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
}

@media(max-width: 992px) {
   .slide {
      width: auto;
      height: 535px;
      padding: 10px 0 35px;
      background-color: var(--orange);
      img {
         object-fit: contain;
      }
   }
}

@media(max-width: 568px) {
   .slide {
      height: 450px;
   }
}
</style>
