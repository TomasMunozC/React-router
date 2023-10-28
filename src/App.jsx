import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Contacto from "./views/Contacto";


function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
