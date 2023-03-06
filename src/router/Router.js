
import React from 'react';
import { BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
 import Login from "../pages/Login"
 import Precios from '../pages/Precios'
 import Home from '../pages/Home'
function Rutas() {
  return (
    <Router>
    <Routes>
        <Route path="/login" element={ <Login/>}/>  
        <Route path="/" element={<Precios/>}/>
        <Route path="/Home" element={<Home/>}/>  
         
    
    </Routes>
</Router>
  );
}

export default Rutas;