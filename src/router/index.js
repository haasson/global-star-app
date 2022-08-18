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
         meta: {
            title: 'Global Star / Агронавигаторы / Автопилоты для сельхозтехники / Системы Контроля Кормления КРС / Мониторинг Транспорта'
         }
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
   let title

   const childWithTitle = to.matched.find(el => typeof el.meta === 'function')
   if (childWithTitle) {
      title = childWithTitle.meta(to).title
   } else {
      title = to.meta?.title
   }
   document.title = title || 'Global Star'

   globalLoading.value = true
   closeMenu()

   next()
})

router.afterEach((to) => {
   if (to.meta.scrollBehavior === 'hold') return

   scrollTo(0,0)
})

export default router
