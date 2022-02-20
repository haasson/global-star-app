<template>
   <section>
      <Component
          :is="section.is"
          v-bind="section.props"
      />
   </section>
</template>

<script>

export default {
   name: "AppSection",
   props: {
      section: {
         type: Object,
         required: true
      }
   }
}
</script>

<style scoped>

</style>
