import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navbar from "./routes/Navigation/navigation.component";
import SignIn from "./routes/signIn/signIn.component";

const Shop = () => {
  return (
    <h1>This is the shop page</h1>
  )
}



const App = () => {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} /> 
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;