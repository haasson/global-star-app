<template>
   <div>
      <label v-if="label">{{ label }}</label>
      <select
         v-bind="$attrs"
         :value="modelValue"
         @change="$emit('update:modelValue', $event.target.value)"
      >
         <option
            v-for="option in options"
            :value="option.name"
            :selected="option.name === modelValue"
         >
            {{option.text}}
         </option>
      </select>
   </div>
</template>

<script>
export default {
   name: "AppSelect",
   inheritAttrs: false,
   props: {
      label: {type: String, default: ''},
      modelValue: {type: String, default: ''},
      options: {type: Array, required: true}
   },

}
</script>

<style lang="scss" scoped>
label {
   display: block;
   margin-bottom: 7px;
}
select {
   width: 100%;
   padding: 7px;
}
option {
   padding: 5px;
}
</style>
