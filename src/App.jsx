import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.jpg";
import Navbar from "./components/Navbar";
import EnConstruccion from "./components/EnConstruccion";
import Carousel from "./components/Carousel";

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
                <Carousel />
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
