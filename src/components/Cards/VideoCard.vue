<template>
   <div class="item" :style="{minHeight: `${itemHeight}px`}">
      <img class="image" :src="imageSrc" alt="">
      <div @click="openModal" class="play-btn">
         <div class="play-inner">
            <AppIcon name="play" :width="30" fill="none" class="icon"/>
         </div>
      </div>
   </div>
</template>

<script>
import useLocalImage from "../../composable/localImage";
import useModal from "../../composable/modal.js";
import AppIcon from "../App/AppIcon.vue";

export default {
   name: "VideoCard",
   components: {AppIcon},
   props: {
      src: {
         type: String,
         required: true
      },
      poster: {
         type: String,
         default: ''
      },
      itemHeight: {
         type: Number,
      },
   },

   setup({src, poster}) {
      const {imageSrc} = useLocalImage(poster)

      const {open} = useModal('video')
      const openModal = () => {
         open({src})
      }

      return {imageSrc, openModal}
   }
}
</script>

<style lang="scss" scoped>
.item{
   position: relative;
   margin-bottom: 0;
}
.image{
   width: 100%;
   flex-shrink: 0;
   object-fit: contain;
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
</style>
