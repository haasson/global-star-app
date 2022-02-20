<template>
   <PageSection class="menu" :class="{active: isOpen}">
      <div v-if="currentTab && width <=768" @click="toggleOpen" class="current-tab">
         {{currentTab.name}}
      </div>
      <div class="menu-inner">
         <MenuItem
             v-for="tab in tabs"
             :name="tab.name"
             :path="tab.path"
             class="menu-item"
         />
      </div>
   </PageSection>
</template>

<script>
import {ref} from 'vue'
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import useWindowDimensions from "../../composable/windowDimensions.js";
import PageSection from "../Providers/PageSection.vue";
import MenuItem from "./MenuItem.vue";

export default {
   name: "AppTabs",
   components: {MenuItem, PageSection},
   props: {
      tabs: {
         type: Array,
         required: true
      }
   },

   setup(props) {
      const route = useRoute()
      const {width} = useWindowDimensions()

      const currentTab = ref(props.tabs[0])
      const setCurrentTab = (to) => {
         currentTab.value = props.tabs.find(tab => to.fullPath.indexOf(tab.path) !== -1)
      }
      setCurrentTab(route)

      const isOpen = ref(false)
      const toggleOpen = () => isOpen.value = !isOpen.value

      onBeforeRouteUpdate((to, from, next) => {
         isOpen.value = false
         setCurrentTab(to)
         next()
      })


      return {
         width,

         currentTab,

         isOpen,
         toggleOpen,
      }
   }
}
</script>

<style lang="scss" scoped>
.menu {
   background-color: var(--blue);
   font-size: var(--subtitle-size);
   color: var(--white);
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


@media(max-width: 768px) {
   .menu {
      background: var(--dark-blue);
      &.active {
         .menu-inner {
            max-height: 100%;
         }
         .current-tab {
            &:after {
               transform: translateY(-50%) rotate(135deg);
            }
         }
      }
   }
   .menu-inner {
      display: block;
      max-height: 0;
      text-align: left;
      overflow: hidden;

   }
   .menu-item {
      &:not(:last-child):after {
         display: none;
      }
   }
   .current-tab {
      position: relative;
      padding: 16px 0;
      cursor: pointer;
      &:after {
         content: '';
         position: absolute;
         right: 3px;
         top: 50%;
         transform: translateY(-50%) rotate(45deg);
         transition: .1s;
         width: 10px;
         height: 10px;
         border-right: 2px solid var(--white);
         border-top: 2px solid var(--white);
      }
   }
   //.inner {
   //   display: block;
   //}
   //.menu-item {
   //   &:not(:last-child):after {
   //      display: none;
   //   }
   //}
}
</style>
