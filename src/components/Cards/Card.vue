<template>
   <router-link class="link" :to="link">
      <slot/>
   </router-link>

</template>

<script>
export default {
   name: "Card",
   props: {
      link: {
         type: String
      }
   }
}
</script>

<style lang="scss" scoped>
.link {
   width: 100%;
   height: 100%;

   border-radius: 10px;
   overflow: hidden;
   box-shadow: var(--card-shadow);
   transition: box-shadow .3s;
   background-color: #fff;

   &:hover {
      box-shadow: var(--card-shadow-hover);
   }
}
</style>
