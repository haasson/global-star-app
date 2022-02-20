import {useRouter} from "vue-router";

const useSearch = () => {
   const router = useRouter()
   const search = (query) => {

      router.push({
         path: '/search',
         query: {query}
      })
   }

   return {search}
}

export default useSearch
