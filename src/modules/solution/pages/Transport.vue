<template>
   <AppList
       :type="'solution'"
       :items="transportContent"
       :itemsPerRow="3"
       :title="'Решения для транспорта'"
       class="list-w-bg"
   />
</template>

<script>
import {transportContent} from '../composable/solution'
import AppList from "../../../components/App/AppList.vue";

export default {
   name: "Transport",
   components: {AppList},
   setup() {

      return {transportContent}
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
