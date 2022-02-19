<template>
   <Card class="card" :style="{backgroundImage: `url(${bgImage})`}" :link="link">
      <h3 v-html="title" />
   </Card>
</template>

<script>
import {shallowRef, watchEffect} from 'vue'
import Card from "./Card.vue";

export default {
   name: "SolutionCard",
   components: {Card},
   props: {
      title: {
         type: String,
         required: true
      },
      name: {
         type: String,
      },
      link: {
         type: String,
      }
   },

   setup({name}) {
      const bgImage = shallowRef('')
      watchEffect(() => {
         import((`../../assets/images/solution/cards/${name}.jpg`)).then(component => {
            bgImage.value = component.default
         })
      })

      return {bgImage}
   }
}
</script>

<style lang="scss" scoped>
.card {
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 270px;

   background-repeat: no-repeat;
   background-size: cover;

   font-size: var(--title-size);
   font-weight: 700;
   line-height: 1.1;
   color: var(--white);
   text-align: center;
   cursor: pointer;

   &:before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(#000, .2);
   }

   @media(max-width: 480px) {
      height: 190px;
      font-size: 24px;
   }
}

h3 {
   position: relative;
}
</style>
