import React from 'react';

import Menu from '../../Componets/Navbar/Navbar'
import Carousels from '../../Componets/Carousels/Carousels';
import Grids from '../../Componets/Cards/Cards';
import Footer from '../../Componets/Footer/Footer';

function Home(){
    return (
        <React.StrictMode>
            <Menu/>
            <Carousels/>
            <Grids/>
            <Footer/>
        </React.StrictMode>
    )
}
export default Home;