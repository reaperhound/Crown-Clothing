import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

import Logo from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firabase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cartdropdown.context";

const Navbar = () => {
  const { currentUser } = useContext(UserContext)
  const { cartClicked, setCartClicked } = useContext(CartContext)

  const cartDropHandler = () => {
    setCartClicked(!cartClicked)
  }
  return (
    <>
      <div 
        className="navigation" onClick={() => {
          cartClicked && setCartClicked(false) 
          }}
      >
        <Link to={`/`} className="logo-container">
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="nav-links-container">
          <Link to={`/shop`} className="nav-link">
            SHOP
          </Link>
          {
            currentUser ?
            (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ) :
            (
              <Link to={`/auth`} className="nav-link">
                SIGN IN
              </Link>
            )
          }
          {/* //Cart Clicking */}
          <CartIcon onClick={cartDropHandler} />
          
        </div>
          {/* cartDropDown */}
          {
            cartClicked && <CartDropDown />
          } 
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
