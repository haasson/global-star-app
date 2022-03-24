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
   apiKey: "AIzaSyCuoHOf7xExCNBY_8Ml6FBDHqPhL28oNeQ",
   authDomain: "gstar-su.firebaseapp.com",
   databaseURL: "https://gstar-su-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "gstar-su",
   storageBucket: "gstar-su.appspot.com",
   messagingSenderId: "595357973398",
   appId: "1:595357973398:web:dad79d446697535fa0fbb7"
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

