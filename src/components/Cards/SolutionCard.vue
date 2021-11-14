<template>
   <div class="card">
      <p>{{title}}</p>
   </div>
</template>

<script>
export default {
   name: "SolutionCard",
   props: {
      title: {
         type: String,
         required: true
      },
      image: {
         type: String,
         required: true
      },
      link: {
         type: String,
         required: true
      }
   }
}
</script>

<style lang="scss" scoped>
.card {
   min-height: 216px;
   border-radius: 10px;
}
</style>
