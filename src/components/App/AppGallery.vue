<template>
   <PageSection>
      <div class="image-big">
         <img :src="currentSlide" alt="">
      </div>

      <Swiper
          :slidesPerView="'auto'"
          :slideToClickedSlide="true"
          :spaceBetween="20"
          class="list"
          @tap="onChange"
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
      if (!props.fromStorage) {
         console.log('here1')
         props.slides.forEach(slide => {
            import(slide).then(component => slidesComponents.value.push(component.default))
         })
      } else {
         console.log('here')
         slidesComponents.value = props.slides
      }
      console.log(slidesComponents.value)


      watchEffect(() => {
         currentSlide.value = slidesComponents.value[0]
      })

      const onChange = (event) => {
         currentSlide.value = slidesComponents.value[event.clickedIndex]
      }

      return {slidesComponents, currentSlide, onChange}
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
</style>
