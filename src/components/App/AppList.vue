<template>
   <PageSection
       class="app-list-block"
       :class="[bgType, bgColor, {'with-title': title && bgType}]"
       :style="{paddingBottom: `${isSlider && bgType === 'full' ? '20' : 'inherit'}px`}"
   >
      <div class="inner">
         <h3 class="main-title" v-if="title" :class="titleSize">{{ title }}</h3>

         <!-- Slider -->
         <Swiper
             v-if="isSlider"
             :slides-per-view="itemsPerRow"
             :space-between="2*gap"
             :pagination="{clickable: true}"
             class="list slider"
             :class="[{'with-title': title, 'with-bg': bgColor}, align, type]"
         >
            <SwiperSlide v-for="item in items">
               <div :style="{marginLeft: '15px', marginRight: '15px', height: '100%', }">
                  <Component
                      :is="listItemComponent"
                      :empty="empty"
                      :removable="removable"
                      :title="item.title"
                      :name="item.name"
                      :link="item.link"
                      :text="item.text"
                      :icon="item.icon"
                      :image="item.image"
                      :itemHeight="itemHeight"
                      :imageHeight="imageHeight"
                      :noShadow="item.noShadow"
                      :button="item.button"
                      @removeCard="$emit('removeCard', item.cardID)"
                  />
               </div>
            </SwiperSlide>
      </Swiper>

      <!-- Simple list -->
      <ul
          v-else
          class="list"
          :class="[{multiline: multiline && itemsPerRow > 1, 'with-title': title}, type]"
          :style="{justifyContent: justify}"
      >
         <Component
             :is="listItemComponent"
             v-for="item in items"
             :empty="empty"
             :removable="removable"
             :title="item.title"
             :name="item.name"
             :link="item.link"
             :text="item.text"
             :period="item.period"
             :price="item.price"
             :isHidden="item.isHidden"
             :icon="item.icon"
             :image="item.image"
             :noShadow="item.noShadow"
             :itemHeight="itemHeight"
             :imageHeight="imageHeight"
             :button="item.button"
             :style="{width: `calc(100%/${itemsPerRow} - 2*${gap}px)`, marginLeft: `${gap}px`, marginRight: `${gap}px`}"
             class="list-item"
             :class="{multiline}"
             @removeCard="$emit('removeCard', item.cardID)"
         />
      </ul>
      </div>
   </PageSection>


</template>

<script>
import SwiperCore, {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'

import {capitalize, defineAsyncComponent, defineComponent, shallowRef} from "vue";
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
      removable: {
         type: Boolean,
         default: false
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
      align: {
        type: String,
        default: 'stretch'
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


<style lang="scss">
.app-list-block {
   &.with-title {
      padding-top: 40px;
      @media(max-width: 568px) {
         padding-top: 20px;
      }
   }

   &.blue {
      .main-title {
         color: var(--white)
      }
   }
   .main-title {
      text-align: center;

      &.sm {
         font-size: var(--subtitle-size);
         font-weight: 500;
      }

      &.lg {
         font-size: var(--title-size);
         font-weight: 700;
      }
   }

   .list {
      display: flex;
      flex-wrap: wrap;
      //margin-top: 40px;
      @media(max-width: 480px) {
         //margin-top: 20px;
      }

      &.slider {
         padding-bottom: 15px;
         &.with-bg .swiper-slide {
            padding-bottom: 25px;
         }
         &.center {
            .swiper-wrapper {
               align-items: center;
            }
         }
         .swiper-pagination {
            &.swiper-pagination-bullets {
               bottom: -5px;
            }
         }
         .card {
            height: 100%;
         }
      }

      &.multiline {
         margin-bottom: -50px;
         @media(max-width: 992px) {
            margin-bottom: -35px;
         }
         @media(max-width: 568px) {
            margin-bottom: -24px;
         }
      }
      &.with-title {
         padding-top: 40px;
         @media(max-width: 568px) {
            padding-top: 20px;
         }
      }
   }

   .list-item {
      &.multiline {
         margin-bottom: 50px;
         @media(max-width: 992px) {
            margin-bottom: 35px;
         }
         @media(max-width: 568px) {
            margin-bottom: 24px;
         }
      }
   }
}

</style>
