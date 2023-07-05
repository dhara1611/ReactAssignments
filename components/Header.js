import { CDN_URL } from "../utils/constant";
const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src={CDN_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  
  export default Header;