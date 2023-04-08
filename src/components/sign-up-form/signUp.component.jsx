import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firabase.utils";
import "./signUp.styles.scss";
import FormInput from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`passwords do not match`);
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      console.log(user);
      resetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log(`user creation encoutered an error`, error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account yet?</h2>
      <span>Sign up with Email and Password</span>
      <form onSubmit={onSubmitHandler}>

        <FormInput 
          label={`Name`}
          required
          type="text"
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label={`Email`}
          required
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label={`Password`}
          required
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={password}
        />

        <FormInput
          label={`Confirm Password`}
          required
          type="password"
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <ButtonComponent type="submit" buttonType={`google`}>Sign up</ButtonComponent>
      </form>
    </div>
  );
};

export default SignUpForm;
