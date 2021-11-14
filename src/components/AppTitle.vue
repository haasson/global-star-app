<link rel="stylesheet" href="../../../../Projects/Hunter/src/sass/_interface.sass">
<link rel="stylesheet" href="../../../../Projects/Hunter/src/sass/base.sass">
<template>
   <div
       class="title"
       :class="[position]"
   >
      <div class="wrapper">
         <div class="inner">
            <h2>{{ text }}</h2>
         </div>
      </div>
   </div>
</template>

<script>
import {getImageUrl} from "../helpers/firebase";

const TITLE_POSITIONS = ['left', 'right']
export default {
   name: "AppTitle",
   props: {
      position: {
         type: String,
         default: 'right',
         validator: (value) => TITLE_POSITIONS.includes(value)
      },
      text: {
         type: String,
         required: true
      }
   },

   setup() {
      let url = async () => await getImageUrl('photo.png')
      console.log(url)
   }
}
</script>

<style lang="scss" scoped>

.title {
   --title-bg-width: 42%;
   margin-top: 60px;
   padding: 15px 0;
   color: var(--white);
   &.right {
      background: linear-gradient(90deg,
          transparent 0%,
          transparent var(--title-bg-width),
          var(--orange) var(--title-bg-width),
          var(--orange) 100%);
      .inner {
         justify-content: flex-end;
      }
   }

   &.left {
      background: linear-gradient(9270deg,
          transparent 0%,
          transparent var(--title-bg-width),
          var(--orange) var(--title-bg-width),
          var(--orange) 100%);
      text-align: right;
   }
}

.inner {
   display: flex;
}

h2 {
   min-width: 70%;
   padding: 3px 25px;
   background-color: var(--brown);
   font-size: 32px;
   font-weight: 600;
}
</style>
