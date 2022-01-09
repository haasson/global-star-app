<template>
   <div class="menu">
      <div class="wrapper">

         <div class="inner">
            <MenuItem
                v-for="(item, key) in data"
                :name="item.name"
                :children="nested ? item.children : []"
                :path="`/${key}`"
                :style="{order: item.position}"
                class="menu-item"
            />
         </div>
      </div>
   </div>
</template>

<script>
import {computed, watch} from "vue";
import useDatabase from "../../composable/database.js";
import {useRouter} from "vue-router";

import MenuItem from "../App/MenuItem.vue";
import appConfig from "../../config/app.config.js";

export default {
   name: "AppMenu",
   components: {MenuItem},
   props: {
     nested: {
        type: Boolean,
        default: true
     }
   },

   setup() {
      const data = appConfig.navigation

      return {
         data,
      }
   }
}
</script>

<style lang="scss" scoped>
.menu {
   position: relative;
   z-index: 2;
   background-color: var(--blue);
   color: var(--white);
   font-size: var(--subtitle-size);
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
      transform: translate(50%, -50%);
   }
}

.inner {
   display: flex;
   justify-content: center;
}

.dropdown {
   padding: 10px;
   background-color: yellow;
}
</style>
