<template>
   <Component
       :is="inModal ? 'div' : 'PageSection'"
       class="video-section"
       :class="{'in-modal': inModal}"
       :clearWrapper="width <= 992"
   >
      <AppTitle v-if="!inModal && width <= 992">Работа системы</AppTitle>
      <div class="video-wrap">
         <video
             ref="video"
             :src="src"
             :poster="poster"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen
             :controls="isPlayed"
         />
         <div v-if="!isPlayed" @click="play" class="play-btn">
            <div class="play-inner">
               <AppIcon name="play" width="30" fill="none" class="icon"/>
            </div>
         </div>
      </div>
   </Component>
</template>

<script>
import {onMounted, ref} from "vue";
import AppIcon from "../App/AppIcon.vue";
import PageSection from "../Providers/PageSection.vue";
import useWindowDimensions from "../../composable/windowDimensions.js";
import AppTitle from "../App/AppTitle.vue";

export default {
   name: "VideoSection",
   components: {AppTitle, PageSection, AppIcon},
   props: {
      src: {
         type: String,
         required: true
      },
      poster: {
         type: String,
         default: ''
      },
      inModal: {
         type: Boolean,
         default: false
      }
   },

   setup(props) {
      const {width} = useWindowDimensions()

      const video = ref(null)
      const isPlayed = ref(false)

      const play = () => {
         video.value.play()
         isPlayed.value = true
      }

      onMounted(() => {
         if (props.inModal) play()
      })

      return {
         width,

         video,
         isPlayed,
         play,
      }
   }
}
</script>

<style lang="scss" scoped>
.video-section {
   padding: 80px 20px;
   background-color: var(--blue);
   &.in-modal {
      padding: 0;
   }
}
.video-wrap {
   position: relative;
   display: flex;
}
.play-btn {
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);

   display: flex;
   justify-content: center;
   align-items: center;

   width: 80px;
   height: 80px;
   border-radius: 50%;
   background-color: rgba(#FFD157, .7);
   transition: background-color .3s;
   cursor: pointer;
   &:hover {
      background-color: var(--orange);
   }
}
.play-inner {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 62px;
   height: 62px;
   border-radius: 50%;
   background-color: var(--orange);
}
.icon {
   position: relative;
   left: 4px;
}
video {
   width: 100%;
}

@media(max-width: 992px) {
   .video-section {
      padding: 0;
      background: none;
   }
}
</style>
