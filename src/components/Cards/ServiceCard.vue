<template>
   <div class="item">
      <div class="card">
         <div class="square">
            <AppIcon
                class="icon"
                :style="{top: `${icon.shift.top}px`, left: `${icon.shift.left}px`}"
                :name="icon.name"
                :width="100"
                :height="100"
            />
         </div>
      </div>

      <p class="text">{{ text }}</p>
   </div>

</template>

<script>
import AppIcon from "../App/AppIcon.vue";

export default {
   name: "ServiceCard",
   components: {AppIcon},
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
.item {
   //display: flex;
   position: relative;
   justify-content: center;
   align-items: center;
   margin-bottom: 32px;
   min-height: 152px;
}

.card {
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 152px;
   height: 152px;
   margin: 15px auto 0;
   background-color: var(--white);
   border-radius: 10px;
   box-shadow: var(--card-shadow);
   &:before {
      position: absolute;
      content: '';
      top: -20px;
      left: 20px;
      width: 152px;
      height: 152px;
      border: 8px solid var(--orange);
      z-index: -1;
   }
}

.square {
   position: relative;
   width: 100px;
   height: 100px;
   margin: 0 auto;
   border: 8px solid var(--orange);
   box-shadow: inset 5px -5px 10px 0 rgba(0,0,0,.3), 5px -5px 10px 0 rgba(0,0,0,.3);
}


.icon {
   position: absolute;
}

.text {
   margin-top: 20px;
   font-size: var(--subtitle-size);
   text-align: center;
   @media(max-width: 1200px) {
      color: var(--white);
   }
}
</style>
