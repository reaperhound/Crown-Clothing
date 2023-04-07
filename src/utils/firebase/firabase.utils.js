import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAfwi5jpNsg_7P7fMFUjSj896LwZV5wp2A",
  authDomain: "crwn-clothing-db-4982b.firebaseapp.com",
  projectId: "crwn-clothing-db-4982b",
  storageBucket: "crwn-clothing-db-4982b.appspot.com",
  messagingSenderId: "60548783307",
  appId: "1:60548783307:web:92afdfa8146b037091cf4e"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt : "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);