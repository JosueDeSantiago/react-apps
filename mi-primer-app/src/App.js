import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./pages/Contact";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Profile from "./pages/Profile";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome message="Hola Welcome props" name="Karla" />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                <Link to="/about">Acerca de mi</Link>
              </li>
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/profile/:name" element={<Profile />} />

          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
