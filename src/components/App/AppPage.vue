<template>
   <main>
      <div class="bg"></div>
      <Component
          v-for="component in pageContent"
          :is="component.is"
          v-bind="component.props"
      />

      <AppList :items="[]" />
   </main>
</template>

<script>
import {getCurrentInstance, defineComponent, computed, defineAsyncComponent} from 'vue'
import {pageContent} from '../../store'
import AppList from "./AppList.vue";


export default defineComponent({
   name: "AppPage",
   components: {AppList},
   setup() {
      pageContent.value.forEach(component => component.is = defineAsyncComponent(() => import(`../${component.name}.vue`)))
      return {pageContent}
   }
})
</script>

<style lang="scss" scoped>
main {
   position: relative;
   flex-grow: 1;
}
.bg {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: -1;
   height: 100vh;
   background: linear-gradient(315deg, #ececec 0%, #ececec 400px, #ffffff 400px, #fff calc(100% - 400px), #ececec calc(100% - 400px), #ececec 100%);

}
</style>
