import {AuthenticationSTL} from "./authentication.styles";
import SignUpForm from "../../components/sign-up-form/signUp.component"; 
import SingInForm from "../../components/sign-in-form/signInForm.component";

const Authentication = () => {

  return (
    <AuthenticationSTL>
      <SingInForm />
      <SignUpForm />
    </AuthenticationSTL>
  );
};

export default Authentication;
