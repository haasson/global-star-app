<template>
   <Card class="item" v-if="text" link="/weg" v-bind="$attrs">
      <div class="rectangle">
         <div class="white">
            <img class="image" :src="imageSrc" alt="">
         </div>
         <div class="name">
            <p class="text">{{ text }}</p>
         </div>
      </div>
   </Card>

   <Card class="item middle" v-else link="/weg">
      <img class="image-big" :src="imageSrc" alt="">
   </Card>
</template>

<script>
import {ref} from "vue";
import Card from "./Card.vue";
import useImage from "../../composable/useImage";
import useLocalImage from "../../composable/localImage.js";

export default {
   name: "SoftItem",
   components: {Card},
   props: {
      name: {
         type: String,
         required: true
      },
      text: {
         type: String,
         required: true
      },
   },

   setup({name}) {
      const {imageSrc} = useLocalImage(`solution/soft/${name}.png`)
      return {imageSrc}
   }
}
</script>



<style lang="scss" scoped>
.item {
   min-height: 120px;
   padding: 22px 18px;
   box-sizing: border-box;
}

.rectangle {
   display: flex;
   align-items: center;
   max-width: 300px;
   min-height: 75px;
   margin: 0 auto;
   background-color: var(--darc);
}

.white {
   display: flex;
   justify-content: flex-end;
   min-width: 105px;
   max-height: 66px;
   background-color: var(--white);
   border-radius: 0 7px 7px 0;

}

.image {
   max-height: 66px;
   margin-right: 15px;
}

.name {
   max-height: 163px;
   margin: 0 auto;
}

.text {
   font-size: var(--title-size);
   font-weight: 900;
   color: var(--white);
}

.middle {
   display: flex;
   align-items: center;
   padding: 0;
}

.image-big {
   margin: 0 auto;
}
</style>
