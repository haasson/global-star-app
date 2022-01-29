<template>
   <div>
      <label v-if="multiple || !Object.keys(uploadedFiles).length" class="file-input">
         <AppIcon class="icon-plus" name="plus"/>
         <span class="text">
            Добавить {{multiple ? 'изображения' : 'изображение'}}
         </span>
         <input type="file" accept="image/*" :multiple="multiple" @change="setImages"/>
      </label>
      <p v-else>Можно добавить только одно изображение. Чтобы изменить изображение - удалите текущее</p>

      <div class="gallery">
         <div
             class="image"
             v-for="file in uploadedFiles"
             @click="setMain(file.name)"
             :class="{ main: !!file.isMain }"
         >
            <img :src="file.src" alt=""/>
            <strong>{{ file.name }}</strong>
            <div>{{ (file.size / 1000).toFixed(1) }} kB</div>

            <div class="close" @click.stop="deleteImage(file.name)">
               <AppIcon name="close" :scale="0.7"/>
            </div>
         </div>
      </div>

      <p class="warning">
         Перед загрузкой не забудьте оптимизировать изображения. <br/>
         Также желательно уменьшить ширину изображения до 1300 пикселей <br>
         <a
             href="https://www.onlineimagetool.com/ru/compress-png-jpg-webp-gif"
             target="_blank"
         >Online Image Tool</a
         >
      </p>
   </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import AppIcon from "./AppIcon.vue";
import {reactive, ref} from "vue";

export default {
   name: "AppImageUpload",
   components: {AppIcon, AppButton},
   props: {
      images: {
         type: Object,
         required: true,
      },
      multiple: {
         type: Boolean,
         default: true
      }
   },

   setup(props, {emit}) {
      const uploadedFiles = ref({...props.images});

      // Show images after uploading from computer
      const setImages = (event) => {
         const files = [...event.target.files];

         files.forEach((file) => {
            const fileReader = new FileReader();
            fileReader.onload = function (e) {
               file.src = e.target.result;
               uploadedFiles.value[file.name] = file;
               if (!props.multiple) file.isMain = true
               // emit here for every image because process is async
               emit("update:images", uploadedFiles.value);
            };

            fileReader.readAsDataURL(file);
         });
         // files[0].isMain = true;
      };

      const setMain = (name) => {
         if (!props.multiple) return
         const uploadedFilesArray = Object.values(uploadedFiles.value);
         uploadedFilesArray.forEach((img) =>  img.isMain = false);

         if (name) uploadedFiles.value[name].isMain = true;
         else uploadedFilesArray[0].isMain = true;

         uploadedFiles.value = {...uploadedFiles.value};
         emit("update:images", uploadedFiles.value);
      };

      const deleteImage = (name) => {
         delete uploadedFiles.value[name];
         // setMain();
         emit('update:images', uploadedFiles.value)
      };

      return {
         uploadedFiles,
         setImages,
         setMain,
         deleteImage,
      };
   },
};
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
            content: "Главное";
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
   color: var(--blue);
}
</style>
