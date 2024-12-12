import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const MainLayout = () => {
    return (
        <>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default MainLayout;