import "./signIn.styles.scss";
import {
  auth,
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firabase.utils";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/signUp.component"; 

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    createUserDocumentFromAuth(response.user);
    console.log(`response = `, response);
  };

  return (
    <>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>SignIn with Google</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
