import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans";
import "./server"
import VanDetails from "./pages/VanDetails";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className="site-logo">
          #VANLIFE
        </Link>
        <Link to="/vans" className="">
          Vans
        </Link>
        <Link to="/about">About</Link>
      </header>
      <nav>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
