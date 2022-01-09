<template>
   <AppTabs :tabs="tabs" maxTabWidth="300"/>
   <RouterView/>
</template>

<script>
import {useRouter} from "vue-router";
import AppTabs from "../../../components/App/AppTabs.vue";

const tabs = [
   {name: 'О нас', path: '/about/company'},
   {name: 'Новости', path: '/about/news'},
   {name: 'Проекты', path: '/about/projects'},
   {name: 'Вакансии', path: '/about/vacancy'},
]
export default {
   name: "About",
   components: {AppTabs},

   setup() {
      const router = useRouter()
      if (router.currentRoute.value.fullPath === '/about') router.push('/about/company')

      return {tabs}
   }
}
</script>

