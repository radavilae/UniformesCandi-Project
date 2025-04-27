import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/en-construccion">Otra Página</Link>
        </li>
        <li>
          <Link to="/acerca">Acerca de Nosotros</Link>
          <li></li>
          <Link to="/en-construccion"></Link>
        </li>

        <li>
          <a href="#producto">Producto</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
