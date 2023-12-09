import "./App.css";
import HeroSection from "./pages/HeroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
