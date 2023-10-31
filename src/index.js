import React from 'react';
import ReactDOM from 'react-dom/client';

import BasicExample from './Componets/Navbar/Navbar';
import DarkVariantExample from './Componets/Carousels/Carousels';
import GridExample from './Componets/Cards/Cards';
import Footer from './Componets/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BasicExample/>
    <DarkVariantExample/>
    <GridExample/>
    <Footer/>
    
  </React.StrictMode>
);