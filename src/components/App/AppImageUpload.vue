<template>
   <div>
      <label class="file-input">
         <AppIcon class="icon-plus" name="plus"/>
         <span class="text">Добавить изображения</span>
         <input type="file" accept="image/*" multiple @change="setImages">
      </label>

      <div class="gallery">
         <div class="image" v-for="file in data" @click="setMain(file.name)" :class="{main: file.isMain}">
            {{ file }}
            <img :src="file.src" alt="">
            <div>{{ file.name }}</div>
            <div>{{ (file.size / 1000).toFixed(1) }} kB</div>

            <div class="close" @click.stop="deleteImage(file.name)">
               <AppIcon name="close" :scale="0.7"/>
            </div>
         </div>
      </div>

      <p class="warning">Перед загрузкой не забудьте оптимизировать изображения <br>
         <a href="https://www.onlineimagetool.com/ru/compress-png-jpg-webp-gif" target="_blank">Online Image Tool</a>
      </p>
   </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import AppIcon from "./AppIcon.vue";
import {ref} from "vue";

export default {
   name: "AppImageUpload",
   components: {AppIcon, AppButton},
   props: {
      modelValue: {
         type: Object,
         required: true
      }
   },

   setup(props, {emit}) {
      console.log(props)
      const data = ref({...props.modelValue})

      // Show images after uploading from computer
      const setImages = (event) => {
         const files = [...event.target.files]

         files.forEach(file => {
            const fileReader = new FileReader()
            fileReader.onload = function (e) {
               file.src = e.target.result
               data.value[file.name] = file
               // emit here for every image because process is async
               emit('update:modelValue', data.value)
            }

            fileReader.readAsDataURL(file)
         })
         files[0].isMain = true
      }

      const setMain = (name) => {
         console.log(name)
         console.log(data.value)
         Object.values(data.value).forEach(img => {
            console.log(img)
            img.isMain = false
         })

         if (name) data.value[name].isMain = true
         else Object.values(data.value)[0].isMain = true

         data.value = {...data.value}
         console.log('set')
         emit('update:modelValue', data.value)
      }

      const deleteImage = (name) => {
         delete data.value[name]
         setMain()
         // emit('delete', fileName)
      }

      return {
         data,
         setImages,
         setMain,
         deleteImage,
      }
   }
}
</script>

<style lang="scss" scoped>
.file-input {
   display: flex;
   align-items: center;
   color: var(--blue);
   font-weight: 600;

   .icon-plus {
      margin-right: 10px;
   }

   .text {
      cursor: pointer;
      border-bottom: 1px solid var(--blue);

      &:hover {
         border-bottom-color: transparent;
      }
   }

   input {
      display: none;
   }
}

.gallery {
   display: flex;
   flex-wrap: wrap;
   margin-top: 20px;

   .image {
      position: relative;
      margin-right: 20px;
      margin-bottom: 20px;
      padding: 10px;
      border: 3px dashed var(--blue);
      border-radius: 10px;
      cursor: pointer;

      &.main {
         border-style: solid;

         &:before {
            position: absolute;
            content: 'Главное';
            left: -5px;
            top: -10px;
            padding: 5px 10px;
            background-color: var(--orange);
         }
      }
   }

   img {
      width: 200px;
      height: 150px;
      margin-bottom: 10px;
      object-fit: cover;
   }
}

.close {
   position: absolute;
   right: -10px;
   top: -10px;
   padding: 5px;
   background-color: var(--orange);
   border-radius: 50%;
   cursor: pointer;

   &:hover {
      background-color: var(--dark-orange);
   }
}

.warning {
   max-width: 600px;
   margin: 0 auto;
   text-align: center;
   color: var(--blue)
}
</style>
