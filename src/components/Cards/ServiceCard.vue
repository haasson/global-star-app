<template>
   <div class="item">
      <div>
         <div class="square">
            <AppIcon
                class="icon"
                :style="{top: `${icon.shift.top}px`, left: `${icon.shift.left}px`}"
                :name="icon.name"
                :width="icon.size.width"
                :height="icon.size.height"
            />
         </div>
      </div>

      <p class="text">{{ text }}</p>
   </div>

</template>

<script>
import {ref} from "vue";
import Card from "./Card.vue";
import AppIcon from "../App/AppIcon.vue";

export default {
   name: "ServiceCard",
   components: {AppIcon, Card},
   props: {
      icon: {
         type: Object,
         required: true
      },
      text: {
         type: String,
         required: true
      },
   },
}
</script>

<style lang="scss" scoped>
.big-square {
   position: absolute;
   top: 144px;
   left: 218px;
   width: 152px;
   height: 152px;
   border: 8px solid var(--orange);
   z-index: -1;
}

.item {
   //display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 32px;
   min-height: 152px;
}

.square {
   position: relative;
   width: 100px;
   height: 100px;
   margin: 0 auto;
   border: 8px solid var(--orange);
}

.icon {
   position: absolute;
}

.text {
   margin-top: 20px;
   font-size: var(--subtitle-size);
   text-align: center;
}
</style>
