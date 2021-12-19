<template>
   <div>
      <label v-if="label">{{ label }}</label>
      <input
          type="text"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          v-bind="$attrs"
      >
   </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
   name: "AppInput",
   props: {
      label: {
         type: String,
         default: ''
      },
      modelValue: {
         type: String,
         default: ''
      },
   }
})
</script>

<style lang="scss" scoped>
label {
   display: block;
   margin-bottom: 8px;
   font-size: var(--text-size-big);
}
input {
   display: block;
   width: 100%;
   padding: 10px 16px;
   font-size: var(--subtitle-size);
}
</style>
