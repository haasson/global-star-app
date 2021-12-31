import {initializeApp} from "firebase/app";
import {getDownloadURL, getStorage, ref as storageRef, uploadBytes} from "firebase/storage";
import {
   child, equalTo,
   getDatabase, limitToFirst,
   limitToLast,
   onValue, orderByChild,
   query,
   ref as databaseRef,
   remove,
   set,
   update
} from 'firebase/database'

const firebaseConfig = {
   apiKey: "AIzaSyCpNXKCMuPpH4fD2d0NgNFrwdge2aTNJi4",
   authDomain: "global-star-22.firebaseapp.com",
   projectId: "global-star-22",
   databaseURL: "https://global-star-22-default-rtdb.europe-west1.firebasedatabase.app",
   storageBucket: "global-star-22.appspot.com",
   messagingSenderId: "709373139489",
   appId: "1:709373139489:web:d983b71a3c69311842a160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database
const database = getDatabase(app);
const dbRef = databaseRef(database)

const setToDatabase = async (url, data) => {
   return await set(databaseRef(database, url), data)
}

const getFromDatabase = async (url) => {
   console.log(url, database)
   const records = await query(databaseRef(database, url))
   // const records = await query(databaseRef(database, url), orderByChild('title'))
   let res = null

   const promise = new Promise((resolve, reject) => {
      onValue(records, snapshot => {
         res = snapshot.val()
         resolve()
      })
   })

   await promise
   return res
}

const putToDatabase = async (data) => {
   return await update(databaseRef(database), data)
}

const deleteFromDatabase = async (url) => {
   return await remove(child(dbRef, url))
}


// Storage
const storage = getStorage(app);

const putToStorage = async (url, file) => {
   const ref = storageRef(storage, url)
   uploadBytes(ref, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
   });
}

const getFromStorage = async (url) => {
   return await getDownloadURL(storageRef(storage, url))
}


export default app

export {
   storage,
   database,

   getFromDatabase,
   setToDatabase,
   putToDatabase,
   deleteFromDatabase,

   getFromStorage,
   putToStorage,
}

