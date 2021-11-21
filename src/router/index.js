import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'
import {pageContent, dbPath} from '../store'
import useDatabase from "../composable/database";
import {toRaw, watch} from "vue";

const router = createRouter({
   history: createWebHistory(),
   routes: []
})

router.beforeEach((to, from, next) => {
   const route = to.path.slice(1) || 'main'

   let dbRoute = route.replaceAll('/', '@')
   dbPath.value = `pages/${dbRoute}`
   console.log(`pages/${dbRoute}`)
   const {get, data, loading} = useDatabase(`pages/${dbRoute}`)
   get()

   watch(loading, () => {
      if (loading.value || !data.value) return
      console.log(data.value)

      // if (data.value.redirect) {
      //    router.push(`${dbRoute}/${data.value.redirect}`)
      //    return
      // }

      pageContent.value = toRaw(data.value.content) || [{name: 'PageNotFound'}]
      next()
   })

})

export default router
