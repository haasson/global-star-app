import {getDownloadURL, getStorage, ref} from "firebase/storage";
const storage = getStorage();

const getImageUrl = async (image) => {
   const url = await getDownloadURL(ref(storage, 'images/photo.png'))
   return url
}

export {
   getImageUrl
}
