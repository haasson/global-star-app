<template>
   <PageSection class="list-block" :bgType="bg.type" :bgColor="bg.color" :style="cssVars">
      <div class="inner">
         <h3 v-if="title">{{ title }}</h3>

         <!-- Slider -->
         <Swiper
             v-if="isSlider"
             :slides-per-view="itemsPerRow"
             :space-between="cssVars.doubleGap"
             :pagination="{clickable: true}"
             class="list"
         >
            <SwiperSlide v-for="item in items">
               <Component
                   :is="listItemComponent"
                   :title="item.title"
                   :image="item.image"
                   :link="item.link"
                   :text="item.text"
                   :button="item.button"
               />
            </SwiperSlide>
         </Swiper>

         <!-- Simple list -->
         <ul v-else class="list">
            <Component
                :is="listItemComponent"
                v-for="item in items"
                :title="item.title"
                :image="item.image"
                :link="item.link"
                :text="item.text"
                :button="item.button"
                :style="{width: `calc(100%/${itemsPerRow} - ${cssVars.doubleGap})`}"
                class="list-item"
            />
         </ul>
      </div>
   </PageSection>


</template>

<script>
import SwiperCore, {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/scss';
import 'swiper/scss/pagination';
import {capitalize, computed, defineAsyncComponent, defineComponent, shallowRef} from "vue";
import BackgroundProvider from "./Providers/BackgroundProvider.vue";
import PageSection from "./Providers/PageSection.vue";

SwiperCore.use([Pagination]);

export default defineComponent({
   name: "AppList",
   components: {PageSection, BackgroundProvider, Swiper, SwiperSlide, Pagination},
   props: {
      type: {
         type: String,
         required: true
      },
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
      bg: {
         type: Object,
         default: () => ({})
      },
      itemsPerRow: {
         type: Number,
         default: 4
      }
   },

   setup(props) {
      // Import component
      const listItemComponent = shallowRef('')
      listItemComponent.value = defineAsyncComponent(() => import(`./Cards/${capitalize(props.type)}Card.vue`))

      const cssVars = computed(() => {
         return {
            '--gap': '17px',
            doubleGap: '45px'
         }
      })


      return {
         listItemComponent,
         modules: [Pagination],

         cssVars
      };
   },
})
</script>


<style lang="scss" scoped>
h3 {
   font-size: var(--title-size);
   font-weight: 700;
   text-align: center;
}

.list {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin-top: 60px;
}

.list-item {
   margin: 0 var(--gap) 50px;
}
</style>
