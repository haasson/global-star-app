<template>
   <Component :is="tag || 'div'">
      <slot />
   </Component>
</template>

<script>

export default {
   name: "BackgroundProvider",
   props: {
      tag: {
         type: String
      }
   }
}
</script>

<style lang="scss" scoped>
.orange {
   --list-bg-color: var(--orange);
}
.blue {
   --list-bg-color: var(--light-blue);
}

.full {
   background-color: var(--list-bg-color);
}

.half {
   background: linear-gradient(180deg, var(--list-bg-color) 0, var(--list-bg-color) calc(50% + 50px), transparent calc(50% + 50px), transparent 100%);
}

.line {
   position: relative;
   z-index: -1;
   background: linear-gradient(180deg, var(--list-bg-color) 0, var(--list-bg-color) 220px, transparent 220px, transparent 100%);
}
</style>
