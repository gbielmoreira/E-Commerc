import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Produto from './Pages/Produto/Produto';
import Carinho from "./Pages/Carinho/Carinho";

function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/produto" element={<Produto/>}/>
                <Route path="/carinho" element={<Carinho/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers;