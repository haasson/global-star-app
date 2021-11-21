<template>
   <div :style="style">
      <slot />
   </div>
</template>

<script>
import {computed} from "vue";
import {getColorByName} from "../../helpers/interface";


export default {
   name: "BackgroundProvider",
   props: {
      bgColor: {
         type: [String, Array],
         default: ''
      },
      bgType: {
         type: String,
         default: ''
      }
   },
   setup({bgType, bgColor}) {
      const backgroundClass = computed(() => {
         // if (Array.isArray(bgColor)) {
         //    return [bgType, bgColor]
         // }
         return ''
         // return [bgType, bgColor]
      })

      const generateGradientPoint = (color, position) => {
         return `${getColorByName(color)} ${position}`
      }

      const style = computed(() => {
         const breakpoints = []

         if (bgType === 'full') {
            return {background: getColorByName(bgColor)}
         }

         if (bgType === '') {
            return {background: getColorByName(bgColor)}
         }

         console.log(`linear-gradient(180deg, ${breakpoints.join(',')})`)
         return {
            background: `linear-gradient(180deg, ${breakpoints.join(',')})`
         }
      })

      return {backgroundClass, style}
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
   background: linear-gradient(180deg, var(--list-bg-color) 0, var(--list-bg-color) 50%, transparent 50%, transparent 100%);
}
</style>
