<template>
   <AppPage>
      <HeadImage :src="image" class="image"/>
      <TextBlock :text="content.text"/>
   </AppPage>
</template>

<script>
import image from '../../../../assets/images/solution/pages/transport.jpg'
import HeadImage from "../../../../components/App/HeadImage.vue";
import TextBlock from "../../../../components/TextBlock.vue";
import AppPage from "../../../../components/App/AppPage.vue";
import {ref} from "vue";

export default {
   name: "Navigation",
   components: {AppPage, TextBlock, HeadImage},
   setup() {
      const content = ref({
         text: 'Some text here'
      })

      return {image, content}
   }
}
</script>

<style lang="scss" scoped>
.image {
   //margin-bottom: 60px;
}
</style>
