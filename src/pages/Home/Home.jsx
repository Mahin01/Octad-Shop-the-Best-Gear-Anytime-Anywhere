import React from 'react';
import SideBar from '../shared/SideBar/SideBar';
import Banner from '../shared/Banner/Banner';
import "./Home.css";
import ProductCarousel from '../shared/Flash_Sales/Flash_Product';

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center">
                <SideBar></SideBar>
                <Banner></Banner>
            </div>
                <ProductCarousel></ProductCarousel>
        </div>
    );
};

export default Home;