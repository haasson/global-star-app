<template>
   <div>
      <AppList
          :type="'solution'"
          :items="agricultureContent"
          :itemsPerRow="3"
          :title="'Решения для сельского хозяйства'"
          class="list-w-bg"
      />

      <AppList
          :type="'solution'"
          :items="transportContent"
          :itemsPerRow="3"
          :title="'Решения для транспорта'"
          class="list-w-bg offset"
      />

      <AppList
          :type="'solution'"
          :items="buildingContent"
          :itemsPerRow="3"
          :title="'Решения для строительства'"
          class="list-w-bg offset"
      />
   </div>
</template>

<script>
import AppList from "../../../components/App/AppList.vue";
import {agricultureContent, transportContent, buildingContent} from '../composable/solution'
export default {
   name: "Solution",
   components: {AppList},
   setup() {

      return {agricultureContent, transportContent, buildingContent}
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
   &.offset {
      padding-bottom: 50px;
   }
}

</style>
