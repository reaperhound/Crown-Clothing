import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firabase.utils";
import "./signUp.styles.scss";

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
    <div>
      <h1>Sign up withEmail and Password</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="">Name</label>
        <input
          required
          type="text"
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />

        <label htmlFor="">Email</label>
        <input
          required
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <label htmlFor="">Password</label>
        <input
          required
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={password}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          required
          type="password"
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
