import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(()=>{
    console.log("header render")
  },[btnName]
  )

  return (
    <div className="header">
      <div className="logo">
        <img src={CDN_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"> About us</ Link ></li>
          <li><Link to = "/contact">Contact us</Link></li>
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
