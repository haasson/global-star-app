<template>
   <div class="item">
      <div class="square">
         <AppIcon
             class="icon"
             :style="{top: `${icon.shift.top}px`, left: `${icon.shift.left}px`}"
             :name="icon.name"
             :width="icon.width || 64"
             :height="icon.height || icon.width || 64"
         />
      </div>
      <div class="content">
         <h3 v-if="title">{{title}}</h3>
         <p>{{ text }}</p>
      </div>

   </div>
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
      title: {
         type: String,
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
   display: flex;
   align-items: flex-start;
}

.square {
   position: relative;
   width: 64px;
   height: 64px;
   border: 5px solid var(--orange);
   flex-shrink: 0;
}

.content {
   margin-left: 16px;
}
h3 {
   font-weight: 600;
}
p {
   font-weight: 300;
}

.icon {
   position: absolute;
}
</style>
