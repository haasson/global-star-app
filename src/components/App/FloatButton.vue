<template>
   <div class="float" @click="$emit('onClick')">
      <div class="inner">
         <AppIcon name="chat" :scale="iconScale" fill="white"/>
      </div>
   </div>
</template>

<script>
import AppIcon from "./AppIcon.vue";
import useWindowDimensions from "../../composable/windowDimensions.js";
import {computed} from "vue";
export default {
   name: "FloatButton",
   components: {AppIcon},

   setup() {
      const {width} = useWindowDimensions()

      const iconScale = computed(() => {
         if (width.value > 768) return 2
         if (width.value > 480) return 1.2
         return 0.7
      })

      return {iconScale}
   }
}
</script>

<style lang="scss" scoped>
.float {
   display: flex;
   justify-content: center;
   align-items: center;
   bottom: 170px;
   width: 112px;
   height: 112px;
   border-radius: 50%;
   background-color: rgba(#FFD157, .7);
   transition: background-color .3s;
   cursor: pointer;
   &:hover {
      background-color: var(--orange);
   }
}
.inner {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 88px;
   height: 88px;
   border-radius: 50%;
   background-color: var(--orange);
}

@media(max-width: 768px) {
   .float {
      width: 80px;
      height: 80px;
   }
   .inner{
      width: 56px;
      height: 56px;
   }
}
@media(max-width: 480px) {
   .float {
      width: 40px;
      height: 40px;
   }
   .inner{
      width: 31px;
      height: 31px;
   }
}
</style>
