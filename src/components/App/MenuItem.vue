<template>
   <div
       @mouseleave="onMouseleave"
       @click="onMenuClick"
       :class="{'is-open': isOpen, 'with-children': children}"
   >
      <div ref="buttonEl"
           @mouseover="onMouseover"
           @click="onTriggerClick"
      >
         <Component
             :is="!isMobileMenu || !children ? 'router-link' : 'div'"
             class="trigger"

             :to="path">
            {{ name }}
         </Component>

      </div>

<!--      {{children}}-->
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
import {ref, watch} from 'vue'
import useDropdown from '../../composable/dropdown'
import useWindowDimensions from "../../composable/windowDimensions.js";
import useMenuMode from "../../composable/menuMode.js";

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
      const {buttonEl, dropdownEl, open, close, isOpen} = useDropdown({placement: props.placement, breakpoint: 768})
      const {width} = useWindowDimensions()
      const isMobileMenu = ref(width.value <= 768)

      const parseParams = (params) => {
         let query = ''
         for (const paramsKey in params) {
            if (params.hasOwnProperty(paramsKey)) {
               query += `${paramsKey}=${params[paramsKey]}`
            }
         }
         return `?${query}`
      }

      const onMouseover = () => !isMobileMenu.value && open()
      const onMouseleave = () => !isMobileMenu.value && close()
      const onMenuClick = () => !isMobileMenu.value && close()
      const onTriggerClick = () => isMobileMenu.value && (isOpen.value ? close() : open())

      const {isOpen: isMenuOpen} = useMenuMode()
      watch(isMenuOpen, () => !isMenuOpen.value && close())

      return {
         buttonEl,
         dropdownEl,
         open,
         close,
         isOpen,

         width,
         isMobileMenu,

         parseParams,

         onMouseover,
         onMouseleave,
         onMenuClick,
         onTriggerClick
      }
   }
}
</script>

<style lang="scss" scoped>
.trigger {
   position: relative;
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


@media(max-width: 1024px) {
   .trigger {
      padding: 14px 18px;
   }
}

@media(max-width: 992px) {
   .trigger {
      padding: 14px 12px;
   }
}

@media(max-width: 768px) {
   .trigger {
      padding: 16px 0;
      border-top: 2px solid rgba(#fff, .5);

   }

   .sub-item {
      & > div > .trigger {
         font-size: 14px;
         font-weight: 300;
      }
   }
   .menu-item,
   .sub-item {
      &.with-children {
         & > div > .trigger {
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
      }


      &.with-children {
         & > div > .trigger {
            font-weight: 400;
         }
      }
      &.is-open {
         & > div > .trigger {
            &:after {
               transform: translateY(-50%) rotate(135deg);
            }
         }
      }
   }
}
</style>
