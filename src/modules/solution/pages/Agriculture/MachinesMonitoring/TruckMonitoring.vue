<template>
   <ImageWithMarkers :imagePath="imageWithPoints.imagePath" :points="imageWithPoints.points"/>
</template>

<script>

import ImageWithMarkers from "../../../../../components/Sections/ImageWithMarkers.vue";

const imageWithPoints = {
   imagePath: 'solution/pages/transport/truck.png',
   points: [
      {left: 24.5, top: 65, text: 'Датчик уровня топлива'},
      {left: 28.5, top: 17, text: 'Трекер'},
      {left: 37.5, top: 44, text: 'Считыватель карт водителей'},
      {left: 76, top: 60, text: 'Считыватель меток'},
      {left: 94.5, top: 31, text: 'Датчик поднятия кузова'},
   ]
}

export default {
   name: "TruckMonitoring",
   components: {ImageWithMarkers},
   setup () {
      return {imageWithPoints}
   }
}
</script>

<style scoped>

</style>
