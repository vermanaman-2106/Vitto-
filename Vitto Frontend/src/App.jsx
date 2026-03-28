import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Navbar from "./components/Navbar";
import Automation from "./pages/Automation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/automation" element={<Automation />} />
      </Routes>
      
    </div>
  );
}

export default App;