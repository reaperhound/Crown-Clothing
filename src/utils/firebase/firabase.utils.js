import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAfwi5jpNsg_7P7fMFUjSj896LwZV5wp2A",
  authDomain: "crwn-clothing-db-4982b.firebaseapp.com",
  projectId: "crwn-clothing-db-4982b",
  storageBucket: "crwn-clothing-db-4982b.appspot.com",
  messagingSenderId: "60548783307",
  appId: "1:60548783307:web:92afdfa8146b037091cf4e",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

//FireStore

export const db = getFirestore(); //directly points to the Database

export const createUserDocumentFromAuth = async (userAuth) =>  {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef)
  console.log("userSnapShot",userSnapShot);
  console.log(userSnapShot.exists());

  //creating a new document if user doesn't exist
  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = Date();

    try {
      setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log(error);
    }

  }

  return userDocRef
}
