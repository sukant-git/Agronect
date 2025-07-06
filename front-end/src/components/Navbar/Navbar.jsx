import { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

export const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("");
  const { gettotalCartAmt, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenu(id); 
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" />
      </Link>

      
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("explore-menu")}
            className={menu === "explore-menu" ? "active" : ""}
          >
            product
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("footer")}
            className={menu === "footer" ? "active" : ""}
          >
            contact-us
          </a>
          <Link
            to="/agricare"
            onClick={() => setMenu("agricare")}
            className={menu === "agricare" ? "active" : ""}
          >
            Agricare
          </Link>
        </ul>
      

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={gettotalCartAmt() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logOut}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
