import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../plugins/firebase";

const getImageUrl = async (image) => {
   const url = await getDownloadURL(ref(storage, image))
   return url
}

export {
   getImageUrl
}
