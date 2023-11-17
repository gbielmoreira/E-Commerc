import React from 'react';

import Menu from '../../Componets/Navbar/Navbar'
import Footer from '../../Componets/Footer/Footer';

function Carinho(){
    return (
        <React.StrictMode>
            <Menu/>
            <h1 style={{textAlign:'center',margin:40}}>CARINHO</h1>
            <Footer/>
        </React.StrictMode>
    )
}
export default Carinho;