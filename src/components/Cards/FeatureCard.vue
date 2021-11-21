<template>
   <PageSection>
      <div class="inner">
         <div class="item">
            <div class="square">
               <AppIcon
                   class="icon"
                   :style="{top: `${icon.shift.top}px`, left: `${icon.shift.left}px`}"
                   :name="icon.name"
                   width="64"
                   height="64"
               />
            </div>
            <p class="text">{{text}}</p>
         </div>
      </div>
   </PageSection>
</template>

<script>
import {ref} from "vue";
import Card from "./Card.vue";
import PageSection from "../Providers/PageSection.vue";
import AppIcon from "../App/AppIcon.vue";

export default {
   name: "FeatureCard",
   components: {AppIcon, PageSection, Card},
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
.item{
   display: flex;
   align-items: center;
}
.square{
   position: relative;
   width: 64px;
   height: 64px;
   border: 5px solid var(--orange);
   flex-shrink: 0;
}
.text{
   font-weight: 300;
   margin-left: 16px;
}
.icon{
   position: absolute;
}
</style>
