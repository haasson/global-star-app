<template>
   <PageSection class="menu" :class="{active: isOpen, 'in-footer': !nested}">
      <div class="inner">
         <form @submit.prevent="submit">
            <AppInput
                v-if="width <=768"
                inHeader
                v-model="searchQuery"
                icon="search"
                placeholder="Поиск..."
                class="search"
            />
         </form>
         <MenuItem
             v-for="(item, key) in data"
             :name="item.name"
             :children="nested ? item.children : []"
             :path="`/${key}`"
             :style="{order: item.position}"
             class="menu-item"
         />
      </div>
   </PageSection>
</template>

<script>
import {computed, ref, watch} from "vue";

import MenuItem from "../App/MenuItem.vue";
import appConfig from "../../config/app.config.js";
import useWindowDimensions from "../../composable/windowDimensions.js";
import PageSection from "../Providers/PageSection.vue";
import useMenuMode from "../../composable/menuMode.js";
import AppInput from "../App/AppInput.vue";
import useSearch from "../../composable/search.js";

export default {
   name: "AppMenu",
   components: {AppInput, PageSection, MenuItem},
   props: {
     nested: {
        type: Boolean,
        default: true
     }
   },

   setup() {
      const data = appConfig.navigation
      const {width} = useWindowDimensions()

      const {isOpen} = useMenuMode()


      const searchQuery = ref('')
      const {search} = useSearch()

      const submit = () => {
         search(searchQuery.value)
         searchQuery.value = ''
      }

      return {
         data,
         width,

         isOpen,

         searchQuery,
         submit,
      }
   }
}
</script>

<style lang="scss" scoped>
.menu {
   position: relative;
   z-index: 2;
   flex-grow: 0;
   background-color: var(--blue);
   color: var(--white);
   font-size: var(--subtitle-size);
   &.in-footer {
      background-color: var(--light-blue);
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


@media(max-width: 768px) {
   .menu {
      position: absolute;
      left: 0;
      right: 0;
      top: 77px;
      padding-bottom: 40px;
      background: var(--dark-blue);
      transform: scaleY(0);
      transform-origin: top center;
      transition: .3s;
      &.active {
         transform: scaleY(1);
      }
   }
   .inner {
      display: block;
   }
   .menu-item {
      &:not(:last-child):after {
         display: none;
      }
   }
}

@media(max-width: 480px) {
   .menu {
      font-size: 16px;
   }
}

@media(max-width: 420px) {
   .menu {
      top: 59px;
   }
}
</style>
