import React from 'react';
import ReactDom from 'react-dom';
import './EstiloFaq2.css';
import LinkDefaut from './fac1';

import Footer from '../Footer';
import Navbar from '../NavBar';





export default function fac7(){
    
    
    return(
        <div className="faq2Container">
        <div className="resolverBug"><Navbar/></div>
    
        <LinkDefaut/>
        <Footer/>
    </div>
    )
}