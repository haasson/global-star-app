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
         default: 'temp'
         // required: true
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

      // const router = useRouter()
      // const goTo = (key, redirect) => {
      //    console.log(props.path, key)
      //    router.push(redirect ? `${props.path}/${key}/${redirect}` : `${props.path}/${key}`)
      // }


      return {
         buttonEl,
         dropdownEl,
         open,
         close,
         isOpen,

         // goTo,
      }
   }
}
</script>

<style lang="scss" scoped>
//.menu-item {
//  position: relative;
//
//}

.trigger {
   display: block;
   padding: 18px 28px;
   //text-align: center;
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
   //width: 100%;
   white-space: nowrap;
}

.dropdown {
   display: flex;
   flex-direction: column;
   //min-width: 330px;
   background-color: var(--dark-blue);

}

.router-link-active {
   background-color: var(--dark-blue);
}
</style>
