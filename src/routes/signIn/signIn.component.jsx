import "./signIn.styles.scss";
import { signInWithGooglePopUp } from "../../utils/firebase/firabase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  }

  return (
    <>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>SignIn with Google</button>
    </>
  );
};

export default SignIn;
