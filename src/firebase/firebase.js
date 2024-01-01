import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCwFjr9i40nJIYLgAqHi45fxPnrkKT5kZc",
	authDomain: "instaclone-5376c.firebaseapp.com",
	projectId: "instaclone-5376c",
	storageBucket: "instaclone-5376c.appspot.com",
	messagingSenderId: "166461920204",
	appId: "1:166461920204:web:cea558b09b2ddda6834369",
	measurementId: "G-1J1YKH5TLN"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
