import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Firstpage = () => {
    return (
        <div>
            {/* Header section */} 
            <Header></Header> 
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Firstpage;