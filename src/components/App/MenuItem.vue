<template>
   <div @mouseleave="close" @click="close">
      <div ref="buttonEl" @mouseover="open()">
         <router-link class="trigger" :to="path">
            {{ name }}
         </router-link>

      </div>

      <div ref="dropdownEl" v-show="isOpen" class="dropdown">
         <MenuItem
             v-for="(child, key) in children"
             :style="{order: child.position}"
             :name="child.name"
             :children="child.children"
             :path="`${path}/${child.path || key}`"
             :placement="'right-start'"

             class="sub-item"
         />
      </div>
   </div>


</template>

<script>
import useDropdown from '../../composable/dropdown'
import {useRoute, useRouter} from "vue-router";

export default {
   name: 'MenuItem',
   props: {
      name: {
         type: String,
         required: true
      },
      children: {
         type: Object
      },
      path: {
         type: String,
         required: true
      },
      placement: {
         type: String,
         default: 'bottom-start'
      }
   },

   setup(props) {
      const {buttonEl, dropdownEl, open, close, isOpen} = useDropdown({placement: props.placement})

      const parseParams = (params) => {
         let query = ''
         for (const paramsKey in params) {
            if (params.hasOwnProperty(paramsKey)) {
               query += `${paramsKey}=${params[paramsKey]}`
            }
         }

         return `?${query}`
      }

      return {
         buttonEl,
         dropdownEl,
         open,
         close,
         isOpen,
         parseParams,
      }
   }
}
</script>

<style lang="scss" scoped>
.trigger {
   display: block;
   padding: 18px 28px;
   color: white;
   cursor: pointer;
   white-space: nowrap;
   &:hover {
      background-color: var(--extra-blue);
   }

   &.menu-item {
      &:hover {
         background-color: var(--dark-blue);
      }
   }
}

.sub-item {
   white-space: nowrap;
}

.dropdown {
   display: flex;
   flex-direction: column;
   background-color: var(--dark-blue);
}

.router-link-active {
   background-color: var(--dark-blue);
}
</style>
