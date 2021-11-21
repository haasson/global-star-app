<template>
   <div class="menu">
      <div class="wrapper">

         <div class="inner">
            <MenuItem
                v-for="(item, key) in data"
                :name="item.name"
                :children="item.menuHideChildren ? {} : item.children"
                :path="`/${key}`"
                :style="{order: item.position}"
                @click.stop="goTo(key, item.redirect)"
                class="menu-item"
            />
         </div>
      </div>
   </div>
</template>

<script>
import {computed, watch} from "vue";
import useDatabase from "../../composable/database";
import {useRouter} from "vue-router";

import MenuItem from "./MenuItem.vue";

export default {
   name: "AppMenu",
   components: {MenuItem},

   setup(props) {
      const {get, data} = useDatabase('siteMap')
      get()

      watch(data, () => {
         // console.log(data.value)
      })

      const menuData = computed(() => {

      })

      const router = useRouter()
      const goTo = (key, redirect) => {
         router.push(redirect ? `/${key}/${redirect}` : `/${key}`)
      }


      return {
         data,

         goTo
      }
   }
}
</script>

<style lang="scss" scoped>
.menu {
   position: relative;
   z-index: 1;
   background-color: var(--blue);
   color: var(--white);
   font-size: var(--subtitle-size);
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
