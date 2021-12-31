import {ref} from 'vue'
import {getFromStorage, putToStorage} from '../plugins/firebase'


const useStorage = () => {
   const data = ref(null)
   const loading = ref(false)
   const error = ref(null)

   const get = async (url) => {
      loading.value = true

      const fileName = url.split('/').reverse()[0]
      getFromStorage(url)
         .then((res) => {
            data.value = {src: res, fileName}
         })
         .catch(e => error.value = e)
         .finally(() => {
            loading.value = false
         })
   }
   const set = (url, files) => {
      loading.value = true

      if (!Array.isArray(files)) files = [files]
      files.forEach(file => {
         const imageUrl = `${url}/${file.name}`
         putToStorage(imageUrl, file)
            .then((res) => {
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
