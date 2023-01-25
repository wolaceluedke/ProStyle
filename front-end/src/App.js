import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Cadastro from "./components/pages/Cadastro.jsx"


import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
