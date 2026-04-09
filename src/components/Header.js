import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"; 

const Header = () => {
  const[islogin,setIsLogin] = useState("login");
  const onlineStatus = useOnlineStatus();
  console.log("Header Render");
  console.log("UseState called:",useState())

  //if no dependency array => useEffect is called on every render
  //if the depencency array is empty = [] => useEffect is called only on initial render just once.
  //if the dependency array has some state variable like this [islogin] => called everytime islogin is updated
  useEffect(()=>{
    console.log("useEffect called");
  }, [islogin]);
  return (
    <div className="header h-35 w-auto">
      <header className="flex items-center justify-between p-4 bg-blue-50 shadow">
        <div className="logo">
          <img
            className="logo-img w-25"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul className="flex items-center justify-between gap-7">
            <li>Online Status {onlineStatus ? "✅" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <div className="user-profile">
          <button className="login-btn bg-emerald-800 color- px-4 py-2 rounded font-medium text-white text-sm" onClick={() => {setIsLogin(islogin === "login" ? "logout" : "login");}}>{islogin}</button>
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