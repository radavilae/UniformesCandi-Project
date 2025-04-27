import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.jpg";
import img40 from "./assets/40años.jpeg";
import foto1 from "./assets/foto1.jpg";
import foto2 from "./assets/foto2.jpg";
import foto3 from "./assets/foto3.jpg";
import Navbar from "./components/Navbar";
import EnConstruccion from "./components/EnConstruccion"; // lo vamos a crear ahora

function App() {
  return (
    <Router>
      <div className="contenedor">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="App">
        <nav className="var">
          <Navbar />
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <header className="cuarentaAnios">
                <section className="carrusel">
                  <div className="carrusel-track">
                    <img src={img40} alt="40años" />
                    <img src={foto1} alt="Imagen 1" />
                    <img src={foto2} alt="Imagen 2" />
                    <img src={foto3} alt="Imagen 3" />
                  </div>
                </section>
              </header>
            }
          />
          <Route path="/en-construccion" element={<EnConstruccion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
