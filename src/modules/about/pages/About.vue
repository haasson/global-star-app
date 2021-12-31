<template>
   <PageSection noTopOffset class="menu">
      <div class="menu-inner">
         <MenuItem name="О нас" path="/about/company"/>
         <MenuItem name="Новости" path="/about/news"/>
         <MenuItem name="Проекты" path="/about/projects"/>
         <MenuItem name="Вакансии" path="/about/vacancy"/>
      </div>
   </PageSection>
   <RouterView/>
</template>

<script>
import {useRouter} from "vue-router";
import MenuItem from "../../../components/App/MenuItem.vue";
import PageSection from "../../../components/Providers/PageSection.vue";

export default {
   name: "About",
   components: {PageSection, MenuItem},

   setup() {
      const router = useRouter()
      if (router.currentRoute.value.fullPath === '/about') router.push('/about/company')
   }
}
</script>

<style lang="scss" scoped>
.menu {
   background-color: var(--blue);
   font-size: var(--subtitle-size);
   color: var(--white);
   box-shadow: 0 -18px 50px 45px rgba(0, 0, 0, 0.6);
}

.menu-inner {
   display: flex;
   justify-content: center;
   text-align: center;

   & > * {
      max-width: 300px;
      flex-grow: 1;
   }
}

</style>
