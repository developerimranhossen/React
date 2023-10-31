import "./Header.css";
import logo from "../../images/Logo.svg";
function Header(props) {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div className="">
          <a href="/shop">Shop</a>
          <a href="/order">Order</a>
          <a href="/inventory">Inventory</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
