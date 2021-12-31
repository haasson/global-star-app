import {createRouter, createWebHistory} from 'vue-router'

import MainPage from "../components/Pages/MainPage.vue";

import solutionRoutes from "../modules/solution/routes";
import productsRoutes from "../modules/products/routes";
import aboutRoutes from "../modules/about/routes";

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         name: 'main',
         component: MainPage
      },

      ...solutionRoutes,
      ...productsRoutes,

      ...aboutRoutes
   ]
})




router.beforeEach((to, from, next) => {
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
