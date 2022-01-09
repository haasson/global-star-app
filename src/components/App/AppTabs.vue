<template>
   <PageSection class="menu">
      <div class="menu-inner">
         <MenuItem
             v-for="tab in tabs"
             :name="tab.name"
             :path="tab.path"
             class="menu-item"
             :style="{maxWidth: maxTabWidth ? `${maxTabWidth}px` : 'auto'}"
         />
      </div>
   </PageSection>
</template>

<script>
import PageSection from "../Providers/PageSection.vue";
import MenuItem from "./MenuItem.vue";

export default {
   name: "AppTabs",
   components: {MenuItem, PageSection},
   props: {
      tabs: {
         type: Array,
         required: true
      },
      maxTabWidth: {
         type: Number,
      }
   }
}
</script>

<style lang="scss" scoped>
.menu {
   background-color: var(--blue);
   font-size: var(--subtitle-size);
   color: var(--white);
   box-shadow: 0 -18px 50px 45px rgba(0, 0, 0, 0.6);
}

.menu-inner {
   display: flex;
   justify-content: center;
   text-align: center;

   & > * {
      flex-grow: 1;
   }
}
.menu-item {
   position: relative;
   &:not(:last-child):after {
      position: absolute;
      content: '';
      right: 0;
      top: 50%;
      z-index: 1;
      height: 36px;
      width: 2px;
      background: rgba(#fff, .5);
      transform: translateY(-50%);
   }
}
</style>
