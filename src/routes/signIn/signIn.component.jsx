import "./signIn.styles.scss";
import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firabase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    createUserDocumentFromAuth(response.user)
  }

  return (
    <>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>SignIn with Google</button>
    </>
  );
};

export default SignIn;
