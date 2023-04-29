import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navbar from "./routes/Navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.route";
import CheckoutRoute from "./routes/checkout/Checkout.route";
import Shop from "./routes/Shop/Shop.route";
import Category from "./routes/Category/Category.route";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:category" element={<Category />}/>
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckoutRoute />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
