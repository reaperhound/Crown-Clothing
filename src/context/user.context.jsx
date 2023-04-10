import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firabase.utils";

//actual value I want to access
export const UserContext = createContext({
  currentUser : null,
  setCurrentUser : () => null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser};

  useEffect(()=> {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      if(user){
        createUserDocumentFromAuth(user)
      }
      //if the user has any value then the signOut will show, otherwise if the user value is null it will be null
      setCurrentUser(user);
      //This helps in when refreshing the state don't change and if one user is logged in he will be logged in even if he refreshes the page
    })
    
    //return runs just before the component unmounts 
    return unsubscribe;
  }, [])

  return (
    <UserContext.Provider value={value} >
      {children}
    </UserContext.Provider>
  )
}