<template>
   <div v-bind="$attrs">
      <label v-if="label">{{ label }}</label>
      <div class="input-wrap" :class="{'in-header': inHeader}">
         <AppIcon v-if="icon" :name="icon" fill="#9c9b9b" scale=".75" class="icon" />
         <textarea
            v-if="textarea"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
         />
         <input
             v-else
             type="text"
             :value="modelValue"
             :placeholder="placeholder"
             @input="$emit('update:modelValue', $event.target.value)"
             v-bind="$attrs"
         >
      </div>

   </div>
</template>

<script>
import {defineComponent} from "vue";
import AppIcon from "./AppIcon.vue";

export default defineComponent({
   name: "AppInput",
   components: {AppIcon},
   inheritAttrs: false,
   props: {
      label: {
         type: String,
         default: ''
      },
      modelValue: {
         type: String,
         default: ''
      },
      inHeader: {
         type: Boolean,
         default: false
      },
      placeholder: {
         type: String,
         default: ''
      },
      icon: {
         type: String,
         default: ''
      },
      textarea: {
         type: Boolean,
         default: false
      }
   }
})
</script>

<style lang="scss" scoped>
label {
   display: block;
   margin-bottom: 8px;
   font-size: var(--text-size-big);
}
.input-wrap {
   display: flex;
   align-items: center;

   &.in-header {
      flex-grow: 1;
      background-color: var(--blue);
      border-radius: 30px;
      padding: 8px 16px;
      input {
         color: var(--white);
         background: none;
         border: none;
         padding: 0;
      }
   }

   .icon {
      margin-right: 15px;
   }
}
input {
   flex-grow: 1;
   padding: 10px 16px;
   font-size: var(--subtitle-size);
}

textarea {
   width: 100%;
   min-height: 80px;
   padding: 15px;
   font-size: var(--text-size);
}

@media(max-width: 768px) {
   .input-wrap {
      &.in-header {
         padding: 15px 8px;
         background-color: transparent;
      }
   }

}
</style>
