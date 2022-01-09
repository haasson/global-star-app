<template>
   <PageSection class="title" :class="[position, type]">
      <div class="inner">
         <h2><slot /></h2>
      </div>
   </PageSection>
</template>

<script>
import PageSection from "./Providers/PageSection.vue";

const TITLE_POSITIONS = ['left', 'right']

export default {
   name: "AppTitle",
   components: {PageSection},
   props: {
      position: {
         type: String,
         default: 'right',
         validator: (value) => TITLE_POSITIONS.includes(value)
      },
      type: {
         type: String
      }
   },
}
</script>

<style lang="scss" scoped>

.title {
   --title-bg-width: 45%;

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

      h2 {
         background: linear-gradient(135deg, transparent 0, transparent 35px, var(--brown) 35px, var(--brown) 100%);
         padding: 3px 25px 3px 80px;
      }
   }

   &.left {
      background: linear-gradient(9270deg,
          transparent 0%,
          transparent var(--title-bg-width),
          var(--orange) var(--title-bg-width),
          var(--orange) 100%);
      text-align: right;

      h2 {
         background: linear-gradient(315deg, transparent 0, transparent 35px, var(--brown) 35px, var(--brown) 100%);
         padding: 3px 80px 3px 25px;
      }
   }

   &.simple {
      color: var(--black);
      padding: 0;

      h2 {
         padding-top: 8px;
         padding-bottom: 8px;
         background: linear-gradient(135deg, transparent 0, transparent 43px, var(--orange) 43px, var(--orange) 100%);
      }

      &.left {
         h2 {
            background: linear-gradient(315deg, transparent 0, transparent 43px, var(--orange) 43px, var(--orange) 100%);
         }
      }

   }
}

.inner {
   display: flex;
}

h2 {
   min-width: 70%;
   font-size: var(--title-size);
   font-weight: 700;
}
</style>
