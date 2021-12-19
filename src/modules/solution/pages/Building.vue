<template>
   <AppList
       :type="'solution'"
       :items="buildingContent"
       :itemsPerRow="3"
       :title="'Решения для строительства'"
       class="list-w-bg"
   />
</template>

<script>
import {buildingContent} from '../composable/solution'
import AppList from "../../../components/App/AppList.vue";

export default {
   name: "Building",
   components: {AppList},
   setup() {

      return {buildingContent}
   }
}
</script>

<style lang="scss" scoped>
.list-w-bg {
   background: linear-gradient(180deg,
       transparent 0%,
       transparent 235px,
       var(--orange) 235px,
       var(--orange) 565px,
       transparent 565px,
       transparent 100%
   );
   padding-bottom: 50px;
}
</style>
