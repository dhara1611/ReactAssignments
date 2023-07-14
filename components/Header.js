import { useState } from "react";
import { CDN_URL } from "../utils/constant";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={CDN_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
