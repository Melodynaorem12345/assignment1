import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
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