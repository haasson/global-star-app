import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'
import {pageContent, dbPath} from '../store'
import useDatabase from "../composable/database";
import {toRaw, watch} from "vue";
import MainPage from "../components/Pages/MainPage.vue";

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/404',
         name: '404',
         component: MainPage
      }
   ]
})

router.beforeEach((to, from, next) => {
   const route = to.path.slice(1) || 'main'

   console.log(route)

   if (route === '404') return next()
   // if (router.hasRoute(route)) {
   //    console.log(to.path, from.path)
   //    console.log('here', route)
   //    return next(route)
   // }

   let dbRoute = route.replaceAll('/', '@')
   dbPath.value = `pages/${dbRoute}`
   console.log(`pages/${dbRoute}`)

   const {get, data, loading} = useDatabase(`pages/${dbRoute}`)
   get()

   watch(loading, () => {
      console.log(data.value)
      if (loading.value || !data.value) return next('/404')

      // if (data.value.redirect) {
      //    router.push(`${dbRoute}/${data.value.redirect}`)
      //    return
      // }

      pageContent.value = toRaw(data.value.content) || [{name: 'PageNotFound'}]
      next()
   })

})

export default router
