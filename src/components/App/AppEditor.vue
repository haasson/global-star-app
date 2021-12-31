<template>
   <div class="editor-js-container">
      <div class="editorx_body">
         <div id="codex-editor"></div>
      </div>
   </div>
</template>

<script>
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Table from '@editorjs/table'
import ImageTool from '@editorjs/image'
import { onMounted, ref } from 'vue'
import AppButton from "./AppButton.vue";

export default {
   name: 'AppEditor',
   components: {AppButton},
   props: {
      modelValue: {
         type: Object
      }
   },
   setup(props, {emit}) {
      const editor = ref()
      onMounted(() => {
         initEditor()
      })

      const initEditor = () => {
         editor.value = new EditorJS({
            holder: 'codex-editor',
            // defaultBlock: 'header',
            // autofocus: true,
            inlineToolbar: true,
            // placeholder: 'Введите ',
            minHeight: 0,
            displayName: true,


            data: props.modelValue,
            tools: {
               list: {
                  class: List,
                  config: { placeholder: 'Введите текст'}
               },
               table: {
                  class: Table,
                  config: {}
               },
            },

            onChange: save
         })
      }

      const save = () => {
         editor.value.save().then((data) => {
            emit('update:modelValue', data)
         })
      }

   }
}
</script>

<style lang="scss">

.editorx_body {
   //max-width: 650px;
   margin: 0 auto;
   width: 100%;

   .ce-block {
      padding: 0 10px;
      border: 1px solid #ccc;
      margin-bottom: 7px;

   }
   .ce-header {
      margin-bottom: 0;
      padding: 10px 0;
      font-size: var(--title-size);
   }

   .ce-block__content,
   .ce-toolbar__content {
      max-width: 100%;
   }
}



</style>
