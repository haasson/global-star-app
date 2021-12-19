<template>
   <div class="global-loader">
      <div class="content">
         <AppIcon name="logo" width="287" height="61" :scale="2" :fill="'#102F51'"/>
      </div>
   </div>
</template>

<script>
import AppIcon from "./AppIcon.vue";
export default {
name: "AppLoader",
   components: {AppIcon}
}
</script>

<style lang="scss" scoped>
.global-loader {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 1;

   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgba(#fff, .7);
}

.content {
   animation: pulse 1.6s linear infinite;
}

@keyframes pulse {
   0% {
      opacity: 1;
   }
   50% {
      opacity: 0.3;
   }
   100% {
      opacity: 1;
   }
}
</style>
