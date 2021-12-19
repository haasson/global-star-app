import {ref} from 'vue'
import {getFromStorage, putToStorage} from '../plugins/firebase'


const useStorage = () => {
   const data = ref(null)
   const loading = ref(false)
   const error = ref(null)

   const get = async (url) => {
      loading.value = true

      if (!Array.isArray(url)) url = [url]
      data.value = []
      url.forEach(urlItem => {
         getFromStorage(urlItem)
            .then((res) => {
               if (url.length === 1) data.value = res
               else data.value === null ? data.value = [res] : data.value.push(res)
            })
            .catch(e => error.value = e)
            .finally(() => {
               loading.value = false
            })
      })

   }
   const set = (url, files) => {
      loading.value = true

      if (!Array.isArray(files)) files = [files]
      files.forEach(file => {
         const imageUrl = `${url}/${file.name}`
         putToStorage(imageUrl, file)
            .then((res) => {
               console.log(res)
               data.value = res
            })
            .catch(e => error.value = e)
            .finally(() => loading.value = false)
      })

   }
   const del = () => {

   }

   return {data, get, set, del, loading, error}
}

export default useStorage
