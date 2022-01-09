<template>
   <PageSection class="list-block" :class="[bgType, bgColor, {'with-title': title && bgType}]" >
      <div class="inner">
         <h3 v-if="title" :class="titleSize">{{ title }}</h3>

         <!-- Slider -->
         <Swiper
             v-if="isSlider"
             :slides-per-view="itemsPerRow"
             :space-between="2*gap"
             :pagination="{clickable: true}"
             class="list"
         >
            <SwiperSlide v-for="item in items">
               <Component
                   :is="listItemComponent"
                   :empty="empty"
                   :title="item.title"
                   :name="item.name"
                   :link="item.link"
                   :text="item.text"
                   :icon="item.icon"
                   :itemHeight="itemHeight"
                   :imageHeight="imageHeight"
                   :button="item.button"
               />
            </SwiperSlide>
         </Swiper>

         <!-- Simple list -->
         <ul v-else class="list" :class="{multiline}" :style="{justifyContent: justify}">
            <Component
                :is="listItemComponent"
                v-for="item in items"
                :empty="empty"
                :title="item.title"
                :name="item.name"
                :link="item.link"
                :text="item.text"
                :icon="item.icon"
                :itemHeight="itemHeight"
                :imageHeight="imageHeight"
                :button="item.button"
                :style="{width: `calc(100%/${itemsPerRow} - 2*${gap}px)`, margin: `0 ${gap}px ${multiline ? '50px' : 0}`}"
                class="list-item"
            />
         </ul>
      </div>
   </PageSection>


</template>

<script>
import {ref} from 'vue'
import SwiperCore, {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'

import {capitalize, computed, defineAsyncComponent, defineComponent, shallowRef} from "vue";
import BackgroundProvider from "../Providers/BackgroundProvider.vue";
import PageSection from "../Providers/PageSection.vue";

SwiperCore.use([Pagination]);

export default defineComponent({
   name: "AppList",
   components: {PageSection, BackgroundProvider, Swiper, SwiperSlide, Pagination},
   props: {
      type: {
         type: String,
         required: true
      },
      empty: {
         type: Boolean,
         default: false
      },
      items: {
         type: Array,
         required: true
      },
      title: {
         type: String
      },
      titleSize: {
         type: String,
         default: 'lg'
      },
      isSlider: {
         type: Boolean,
         default: false
      },
      bgType: {
         type: String,
         default: ''
      },
      bgColor: {
         type: String,
         default: ''
      },
      itemsPerRow: {
         type: Number,
         default: 4
      },
      itemHeight: {
         type: Number
      },
      imageHeight: {
         type: Number
      },
      gap: {
         type: Number,
         default: () => 17
      },
      justify: {
         type: String,
         default: 'center'
      },
      multiline: {
         type: Boolean,
         default: false
      }
   },

   setup(props) {
      // Import component
      const listItemComponent = shallowRef('')
      listItemComponent.value = defineAsyncComponent(() => import(`../Cards/${capitalize(props.type)}Card.vue`))


      return {
         listItemComponent,
         modules: [Pagination],
      };
   },
})
</script>


<style lang="scss" scoped>
.list-block {
   &.with-title {
      padding-top: 40px;
   }

   &.blue {
      h3 {
         color: var(--white)
      }
   }
}
h3 {
   text-align: center;

   &.sm {
      font-size: var(--subtitle-size);
   }

   &.lg {
      font-size: var(--title-size);
      font-weight: 700;
   }
}

.list {
   display: flex;
   flex-wrap: wrap;
   margin-top: 40px;
   &.multiline {
      margin-bottom: -50px;
   }
}

</style>
