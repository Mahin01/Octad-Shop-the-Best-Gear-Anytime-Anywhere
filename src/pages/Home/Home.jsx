import React from 'react';
import SideBar from '../shared/SideBar/SideBar';
import Banner from '../shared/Banner/Banner';
import "./Home.css";
import ProductCarousel from '../shared/Flash_Sales/Flash_Product';
import Catergory_Sort from '../shared/Category_Sort/Catergory_Sort';
import Best_Selling from './Best_Selling/Best_Selling';

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center">
                <SideBar></SideBar>
                <Banner></Banner>
            </div>
                <ProductCarousel></ProductCarousel>
                <Catergory_Sort></Catergory_Sort>
                <Best_Selling></Best_Selling>
        </div>
    );
};

export default Home;