<template>
   <AppList
       :type="'solution'"
       :items="agricultureContent"
       :itemsPerRow="3"
       :title="'Решения для сельского хозяйства'"
       class="list-w-bg"
       multiline
   />
</template>

<script>
import {agricultureContent} from '../composable/solution'
import AppList from "../../../components/App/AppList.vue";

export default {
   name: "Agriculture",
   components: {AppList},
   setup() {

      return {agricultureContent}
   }
}
</script>

<style lang="scss" scoped>
.list-w-bg {
   background: linear-gradient(180deg,
       transparent 0%,
       transparent 235px,
       var(--orange) 235px,
       var(--orange) 545px,
       transparent 545px,
       transparent 100%
   );
}
</style>
