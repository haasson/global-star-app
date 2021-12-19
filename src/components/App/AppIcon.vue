<template>
   <div
       class="icon"
       :style="`width: ${width * scale}px; height: ${(height * scale) || (width * scale)}px`"
   >
      <svg
         width="100%"
         height="100%"
         :viewBox="`0 0 ${width} ${height || width}`"
      >
         <Component :is="currentIcon" :fill="fill" />
      </svg>
   </div>
</template>

<script>
import {capitalize, computed, defineComponent, shallowRef, watchEffect} from "vue";

export default defineComponent({
   name: "AppIcon",
   props: {
      name: {
         type: String,
         required: true
      },
      width: {
         type: String,
         default: '24'
      },
      height: {
         type: String,
      },
      scale: {
         type: Number,
         default: 1
      },
      fill: {
         type: String
      }
   },

   setup(props) {
      const currentIcon = shallowRef('')
      watchEffect(() => {
         import(`../../icons/Icon${capitalize(props.name)}.vue`).then(component => {
            currentIcon.value = component.default
         })
      })

      return {currentIcon}
   }
})
</script>

<style scoped>

</style>
