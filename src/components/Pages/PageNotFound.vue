<template>
   <AppPage class="page-not-found">
      <h2>404</h2>
      <p>Ошибка! К сожалению, запрашиваемая вами страница не найдена.</p>
      <AppButton color="orange" to="/">На главную</AppButton>
   </AppPage>
</template>

<script>
import useLoading from "../../composable/loading.js";
import AppPage from "../App/AppPage.vue";
import AppButton from "../App/AppButton.vue";

export default {
   name: "PageNotFound",
   components: {AppButton, AppPage},
   setup() {
      useLoading()
   }
}
</script>

<style lang="scss" scoped>
.page-not-found {
   display: flex;
   flex-direction: column;
   align-items: center;
   color: var(--blue);
}
h2 {
   font-size: 100px;
   @media(max-width: 480px) {
      font-size: 72px;
   }
}
p {
   font-size: var(--subtitle-size);
   font-weight: 500;
   text-align: center;
}
</style>
