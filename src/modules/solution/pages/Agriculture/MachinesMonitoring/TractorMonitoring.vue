<template>
   <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>
</template>

<script>

import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";

const imageWithPoints = {
   imagePath: 'solution/pages/autodrive/tractor-blu.png',
   points: [
      {left: 48, top: 2.5, text: 'Трекер'},
      {left: 54, top: 23, text: 'Датчик уровня топлива'},
      {left: 58.5, top: 33, text: 'Считыватель карт водителей'},
      {left: 65.5, top: 27, text: 'Считыватель меток'},
   ]
}

export default {
   name: "TractorMonitoring",
   components: {ImageWithMarkers},
   setup() {
      return {imageWithPoints}
   }
}
</script>

<style scoped>

</style>
