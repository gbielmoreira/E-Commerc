import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Produto from './Pages/Produto/Produto';

function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/produto" element={<Produto/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers;