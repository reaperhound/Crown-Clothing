import { useContext, useState } from "react"
import ButtonComponent from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import "./signInFrom.styles.scss"
import { createUserDocumentFromAuth, signInWithGooglePopUp, signInAuthUserFromEmailAndPassword } from "../../utils/firebase/firabase.utils"
import { UserContext } from "../../context/user.context"

const defaultFormFields = {
  email : "",
  password : ""
}

const SingInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext)

  const resetField = () =>{
    setFormFields(defaultFormFields)
  }

  const onChangeHandler = (event) =>{
    const {name , value} = event.target;
    setFormFields({...formFields, [name]: value}); 
  }

  const onSubmitHandler = async (event) =>{
    event.preventDefault();

    try{
      const response = await signInAuthUserFromEmailAndPassword(email, password);
      // setCurrentUser(response.user)
      console.log(response);
    }catch(error){
      
      switch (error.code) {
        case 'auth/user-not-found':
          alert(`No user with this account`)
          break;
        case 'auth/wrong-password':
          alert('wrong password')
        default:
          console.log('error while signing in', error);
          break;
      }
    }


    resetField();
  }

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    // createUserDocumentFromAuth(response.user);
    // setCurrentUser(response.user);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={onSubmitHandler} >
      <FormInput 
      label={`Email`}
      required
      type="email"
      name="email"
      onChange={onChangeHandler}
      value={email} />

      <FormInput
      label={`password`}
      type="password"
      name="password"
      onChange={onChangeHandler}
      value={password} />
      <div className="buttons-container">
      <ButtonComponent type="submit">Sign in</ButtonComponent>
      <ButtonComponent type="button" onClick={logGoogleUser} buttonType={`google`}>Google Sign In</ButtonComponent>
      </div>
      </form>
    </div>
  )
}

export default SingInForm