import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const[islogin,setIsLogin] = useState("login");
  console.log("Header Render");

  //if no dependency array => useEffect is called on every render
  //if the depencency array is empty = [] => useEffect is called only on initial render just once.
  //if the dependency array has some state variable like this [islogin] => called everytime islogin is updated
  useEffect(()=>{
    console.log("useEffect called");
  }, [islogin]);
  return (
    <div className="header">
      <header>
        <div className="logo">
          <img
            className="logo-img"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <div className="user-profile">
          <button className="login-btn" onClick={() => {setIsLogin(islogin === "login" ? "logout" : "login");}}>{islogin}</button>
        </div>
        
        {/* <div className="user-profile">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
            alt="user"
          />
        </div> */}
      </header>
    </div>
  );
};
export default Header;