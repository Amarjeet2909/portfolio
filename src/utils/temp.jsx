import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Gallery,
} from "./components";
import Achievement from "./components/Achievement.jsx";

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <Routes>
            <Route path="/" element={<>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
            </div>
            <About />
            <Tech />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Works />} />
          <Route path="/Achievement" element={<Achievement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;