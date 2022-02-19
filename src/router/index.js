import {createRouter, createWebHistory} from 'vue-router'

import solutionRoutes from "../modules/solution/routes";
import productsRoutes from "../modules/products/routes";
import programSolutionRoutes from "../modules/product-solution/routes";
import serviceRoutes from "../modules/service/routes"
import aboutRoutes from "../modules/about/routes";
import contactsRoutes from "../modules/contacts/routes";
import useMenuMode from "../composable/menuMode.js";
import {globalLoading} from "../store";

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         name: 'main',
         component: () => import("../components/Pages/MainPage.vue"),
      },
      {
         path: '/search',
         name: 'search',
         component: () => import("../components/Pages/SearchPage.vue"),
      },

      ...solutionRoutes,
      ...productsRoutes,
      ...programSolutionRoutes,
      ...serviceRoutes,
      ...aboutRoutes,
      ...contactsRoutes,

      { path: '/:pathMatch(.*)',  component: () => import("../components/Pages/PageNotFound.vue") }
   ]
})

const {closeMenu} = useMenuMode()

router.beforeEach((to, from, next) => {
   globalLoading.value = true
   closeMenu()

   next()
})

router.afterEach(() => {
   scrollTo(0,0)
})

export default router
