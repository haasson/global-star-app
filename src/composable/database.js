import {ref} from 'vue'
import {deleteFromDatabase, getFromDatabase, putToDatabase, setToDatabase} from '../plugins/firebase'


const useDatabase = (url) => {
   const data = ref(null)
   const loading = ref(true)
   const error = ref(null)

   const get = async () => {
      loading.value = true
      getFromDatabase(url)
         .then((res) => data.value = res)
         .catch(e => error.value = e)
         .finally(() => loading.value = false)
   }
   const set = async (data) => {
      await setToDatabase(url, data)
         .then((res) => data.value = res)
         .catch(e => error.value = e)
         .finally(() => loading.value = false)
   }

   const put = async (data) => {
      await putToDatabase(data)
         .then((res) => data.value = res)
         .catch(e => error.value = e)
         .finally(() => loading.value = false)
   }

   const del = async () => {
      await deleteFromDatabase(url)
         .then((res) => data.value = res)
         .catch(e => error.value = e)
         .finally(() => loading.value = false)
   }

   return {data, get, set, put, del, loading, error}
}

export default useDatabase
