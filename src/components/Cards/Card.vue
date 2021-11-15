<template>
   <li>
      <slot />
   </li>
</template>

<script>
export default {
name: "Card"
}
</script>

<style lang="scss" scoped>
li {
   padding: 10px;
   min-height: 216px;
   border-radius: 10px;
   overflow: hidden;

   background-color: var(--white);
   box-shadow: var(--card-shadow);
   transition: box-shadow .3s;

   &:hover {
      box-shadow: var(--card-shadow-hover);
   }
}
</style>
