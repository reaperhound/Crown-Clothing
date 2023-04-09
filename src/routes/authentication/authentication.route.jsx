import "./authentication.styles.scss";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/signUp.component"; 
import SingInForm from "../../components/sign-in-form/signInForm.component";

const Authentication = () => {

  return (
    <div className="authentication-container">
      <SingInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
