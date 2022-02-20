<template>
   <PageSection
       class="title"
       :class="[position, type, {'with-bg': isMobileDevice && mobileBg, 'no-offset': isMobileDevice && mobileNoOffset}]">
      <div class="inner">
         <h2>
            <span class="title-text">
              <slot />
            </span>

         </h2>
      </div>
   </PageSection>
</template>

<script>
import PageSection from "../Providers/PageSection.vue";
import useWindowDimensions from "../../composable/windowDimensions.js";

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
      },
      mobileBg: {
         type: Boolean,
         default: false
      },
      mobileNoOffset: {
         type: Boolean,
         default: false
      }
   },

   setup() {
      const {isMobileDevice} = useWindowDimensions()

      return {isMobileDevice}
   }
}
</script>

<style lang="scss" scoped>

.title {
   margin-bottom: 70px;
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
      .title-text {
         text-align: right;
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
      .title-text {
         text-align: left;
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
.title-text {
   display: inline-block;
   min-width: 260px;
}


@media(max-width: 992px) {
   .title {
      margin-bottom: 30px;
      padding: 0;
      &.left,
      &.right {
         background: none;
         &.simple {
            background: var(--orange);
            h2 {
               padding: 10px;
               background: none;
            }
         }
         &.with-bg {
            padding: 12px 0;
            background: var(--orange);
         }
         &.no-offset {
            margin-bottom: 0;
         }
         h2 {
            min-width: 100%;
            padding: 0;
            text-align: center;
            background: none;
            color: var(--black)
         }
         .title-text {
            text-align: center;
         }
      }
   }
}

@media(max-width: 768px) {
   .title {
      margin-bottom: 20px;
   }
}
</style>
