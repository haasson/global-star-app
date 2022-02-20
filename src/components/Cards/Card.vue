<template>
      <router-link
          v-if="link"
          :to="link"
          class="card link"
          :class="{empty}"
      >
         <slot/>
      </router-link>

      <div v-else class="card" :class="{empty}"><slot /></div>
</template>

<script>
export default {
   name: "Card",
   props: {
      link: {
         type: [String, Object]
      },
      empty: {
         type: Boolean
      }
   }
}
</script>

<style lang="scss" scoped>
.card {
   //width: 100%;
   //height: 100%;
   overflow: hidden;

   border-radius: 10px;
   box-shadow: var(--card-shadow);
   transition: box-shadow .3s;
   background-color: #fff;
   &:hover {
      box-shadow: var(--card-shadow-hover);
   }

   &.empty {
      box-shadow: none;
      background-color: transparent;
      &:hover {
         box-shadow: none;
      }
   }


   &.link {
      cursor: pointer;
   }
}
</style>
