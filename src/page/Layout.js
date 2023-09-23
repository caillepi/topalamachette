import React from 'react';
import NavBar from '../component/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';

const Layout = () => {
    return (
        <div className = 'Layout'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;