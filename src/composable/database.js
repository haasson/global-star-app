import {ref} from 'vue'
import {deleteFromDatabase, getFromDatabase, putToDatabase, setToDatabase} from '../plugins/firebase'


const useDatabase = () => {
   const data = ref(null)
   const loading = ref(true)
   const error = ref(null)

   const get = async (url) => {
      loading.value = true
      return await getFromDatabase(url)
         .then((res) => {
            return data.value = res
         })
         .catch(e => error.value = e)
         .finally(() => loading.value = false)
   }
   const set = async (url, payload) => {
      await setToDatabase(url, payload)
         .then((res) => data.value = res)
         .catch(e => {
            console.log(e)
            error.value = e
         })
         .finally(() => loading.value = false)
   }

   const put = async (payload) => {
      await putToDatabase(payload)
         .catch(e => {
            console.log(e)
            error.value = e
         })
         .finally(() => loading.value = false)
   }

   const del = async (url) => {
      await deleteFromDatabase(url)
         .catch(e => error.value = e)
         .finally(() => loading.value = false)
   }

   return {data, get, set, put, del, loading, error}
}

export default useDatabase
