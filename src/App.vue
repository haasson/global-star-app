<template>
   <AppHeader />
   <AppMenu />

   <AppPage />

   <AppFooter />
</template>

<script>
import AppHeader from "./components/App/AppHeader.vue";
import AppFooter from "./components/App/AppFooter.vue";
import AppPage from "./components/App/AppPage.vue";
import AppMenu from "./components/App/AppMenu.vue";

export default {
   components: {AppMenu, AppPage, AppFooter, AppHeader}
}
</script>

<style lang="scss">
@import 'reset-css/sass/_reset.scss';

@import './assets/styles/vars.scss';
@import './assets/styles/mixins.scss';
@import './assets/styles/fonts.scss';
@import './assets/styles/base.scss';

#app {
   display: flex;
   flex-direction: column;
   min-height: 100vh;
}

.v-text-left {
   text-align: left;
}

.v-text-right {
   text-align: right;
}

.v-text-white {
   color: var(--white)
}

</style>


