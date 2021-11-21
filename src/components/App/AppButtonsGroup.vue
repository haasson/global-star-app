<template>
<div class="app-buttons-holder">
   <slot />
</div>
</template>

<script>
export default {
name: "AppButtonsGroup"
}
</script>

<style lang="scss" >
.app-buttons-holder {
   display: flex;
   align-items: center;
   > * {
      margin-right: 8px;
      &:last-child {
         margin-right: 0;
      }
   }
}
</style>
