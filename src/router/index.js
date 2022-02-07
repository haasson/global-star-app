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
   scrollTo(0,0)
   closeMenu()

   // globalLoading.value = true
   next()



   // const route = to.path.slice(1) || 'main'
   //
   // let dbRoute = route.replaceAll('/', '@')
   // dbPath.value = `pages/${dbRoute}`
   // console.log(`pages/${dbRoute}`)
   // const {get, data, loading} = useDatabase(`pages/${dbRoute}`)
   // get()
   //
   // watch(loading, () => {
   //    if (loading.value || !data.value) return
   //    console.log(data.value)
   //
   //    // if (data.value.redirect) {
   //    //    router.push(`${dbRoute}/${data.value.redirect}`)
   //    //    return
   //    // }
   //
   //    pageContent.value = toRaw(data.value.content) || [{name: 'PageNotFound'}]
   //    next()
   // })

})

export default router
