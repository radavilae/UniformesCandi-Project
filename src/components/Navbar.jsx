import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-brand"></div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              INICIO
            </Link>
          </li>
          <li>
            <Link to="/productos" onClick={() => setIsMenuOpen(false)}>
              PRODUCTOS
            </Link>
          </li>
          <li>
            <Link to="/catalogo" onClick={() => setIsMenuOpen(false)}>
              CATÁLOGO
            </Link>
          </li>
          <li>
            <Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>
              NOSOTROS
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
