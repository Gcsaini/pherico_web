import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Career from "./pages/career";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  );
}

export default App;
