import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navbar from "./routes/Navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.route";
import Shop from "./routes/shop/shop.component";
import CheckoutRoute from "./routes/checkout/Checkout.route";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckoutRoute />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
