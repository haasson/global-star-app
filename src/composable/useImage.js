import {ref} from "vue";
import {getImageUrl} from "../helpers/firebase";

const useImage = image => {
   const cardImage = ref('')
   if (image) getImageUrl(image).then(res => cardImage.value = res)
   return cardImage
}

export default useImage

