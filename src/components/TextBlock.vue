<template>
   <div class="text-block">
      <div class="wrapper">
         <div
             class="inner"
             :style="{fontSize: `${size}px`}"
             v-html="text"
         />
      </div>
   </div>
</template>

<script>
export default {
   name: "TextBlock",
   props: {
      text: {
         type: String,
         required: true
      },
      size: {
         type: Number,
         default: 24
      }
   }
}
</script>

<style lang="scss" scoped>
.text-block {
   margin-top: 60px;
   padding: 0 60px;
   line-height: 1.2;
}
</style>
