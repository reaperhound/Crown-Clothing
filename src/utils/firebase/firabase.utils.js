import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  writeBatch,
  collection,
  query,
  getDocs
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//Email and password signUp
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

//Email Password SignIn
export const signInAuthUserFromEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

//SIGN OUT
export const signOutUser = async () => await signOut(auth);

//Observing the state of the auth 
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)



export const db = getFirestore(); //directly points to the Database

//One time thing to add  the products to the database/ FireStore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log(`done`);
}

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { items , title } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})

  return categoryMap
}

//create user Document
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) =>  {
  //to insert to displayName if theres any null value

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapShot = await getDoc(userDocRef)

  //creating a new document if user doesn't exist
  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = Date();

    try {
      setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    } catch (error) {
      console.log(error);
    }

  }

  return userDocRef
}


