import { Link, Outlet } from "react-router-dom";
import {
  LogoSTL,
  NavLinksSTL,
  NavLinkSTl,
  NavigationSTL,
  SpanSTL,
} from "./navigation.styles.js";

import Logo from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firabase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cartdropdown.context";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { cartClicked, setCartClicked } = useContext(CartContext);

  const cartDropHandler = () => {
    setCartClicked(!cartClicked);
  };
  return (
    <>
      <NavigationSTL
        onClick={() => {
          cartClicked && setCartClicked(false);
        }}
      >
        <LogoSTL to={`/`}>
          <img src={Logo} alt="Logo" />
        </LogoSTL>

        <NavLinksSTL>
          <NavLinkSTl to={`/shop`}>SHOP</NavLinkSTl>
          {currentUser ? (
            <SpanSTL onClick={signOutUser}>SIGN OUT</SpanSTL>
          ) : (
            <NavLinkSTl to={`/auth`} className="nav-link">
              SIGN IN
            </NavLinkSTl>
          )}
          {/* //Cart Clicking */}
          <CartIcon onClick={cartDropHandler} />
        </NavLinksSTL>
        {/* cartDropDown */}
        {cartClicked && <CartDropDown />}
      </NavigationSTL>
      <Outlet />
    </>
  );
};

export default Navbar;
