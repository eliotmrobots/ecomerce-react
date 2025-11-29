import CartWidget from "../CartWidget/CartWidget.jsx";
import "./navBar.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router";

function NavBar() {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <img className="nav-logo" src={logo} alt="Logo" />

        <ul className="links">
          <li className="link">
            <Link to="/">Inicio</Link>
          </li>

          <li className="link">
            <Link to="/productos">Productos</Link>
          </li>
          <li className="link">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </div>
  );
}

export default NavBar;
