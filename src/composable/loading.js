import {onMounted} from "vue";
import {globalLoading} from "../store";

const useLoading = () => {
   onMounted(() => globalLoading.value = false)
}

export default useLoading
