<template>
   <Card class="item" v-if="text" v-bind="$attrs">
      <div class="rectangle">
         <div class="white">
            <img class="image" :src="imageSrc" alt="">
         </div>
         <div class="name">
            <p class="text">{{ text }}</p>
         </div>
      </div>
   </Card>

   <Card class="item middle" v-else>
      <img class="image-big" :src="imageSrc" alt="">
   </Card>
</template>

<script>
import Card from "./Card.vue";
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
   min-width: 32%;
   max-width: 338px;
   height: 120px;
   padding: 22px 18px;
   box-sizing: border-box;
}

.rectangle {
   display: flex;
   align-items: center;
   max-width: 300px;
   height: 75px;
   margin: 0 auto;
   background-color: var(--darc);
}

.white {
   display: flex;
   justify-content: center;
   width: 105px;
   height: 66px;
   background-color: var(--white);
   border-radius: 0 7px 7px 0;

}

.image {
   height: 66px;
}

.name {
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

@media(max-width: 768px) {
   .item {
      height: 100px;
   }
   .rectangle {
      height: 55px;
   }
   .white {
      height: 46px;
      width: 85px;
   }
   .image {
      height: 46px;
      margin-right: 10px;
   }
   .text {
      font-size: 19px;
   }
   .middle {
      padding: 10px 10px;
   }
   .image-big {
      height: 100%;
   }
}

@media(max-width: 568px) {
   .item {
      height: 70px;
      padding: 18px 12px;
   }
   .rectangle {
      height: 35px;
   }
   .white {
      height: 26px;
      width: 45px;
   }
   .image {
      height: 26px;
      margin-right: 10px;
   }
   .text {
      font-size: 16px;
   }
   .middle {
      padding: 5px 5px;
   }
}

@media(max-width: 420px) {
   .item {
      height: 50px;
      padding: 8px 6px;
   }
   .rectangle {
      height: 35px;
   }
   .white {
      height: 26px;
      width: 39px;
   }
   .image {
      height: 26px;
      margin-right: 10px;
   }
   .text {
      font-size: 12px;
   }
}
</style>
