import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import NuevaTarea from "./components/NuevaTarea";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/mostrar" element={<h1>Hola Mundo</h1>} />
        <Route path="/agregar" element={<NuevaTarea/>} />
      </Routes>
    </Router>
  );
}
