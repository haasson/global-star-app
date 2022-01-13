<template>
   <Agriculture class="solution-block" />
   <Transport class="solution-block" />
   <Building />
</template>

<script>
import Agriculture from "./Agriculture.vue";
import Transport from "./Transport.vue";
import Building from "./Building.vue";
export default {
   name: "Solution",
   components: {Building, Transport, Agriculture},
}
</script>

<style lang="scss" scoped>

.solution-block {
   padding-bottom: 0;
}
</style>
