import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

import Logo from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firabase.utils";

const Navbar = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <>
      <div className="navigation">
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
          
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
