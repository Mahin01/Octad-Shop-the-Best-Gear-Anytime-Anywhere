import React from 'react';
import Banner from './Banner/Banner';
import "./Home.css";
import Service from './Service/Service';
import Catergory_Sort from '../shared/Category_Sort/Catergory_Sort';
import Best_Selling from '../shared/Best_Selling/Best_Selling';
import Products_Showcase from '../shared/Products Showcase/Products_Showcase';
import New_Arrival from '../shared/New_Arrival/New_Arrival';
import ProductCarousel from '../shared/Flash_Sales/Flash_Product';
import SideBar from '../shared/SideBar/SideBar';
import FLashProduct from '../shared/Flash_Sales/Flash_Product';


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center">
                <SideBar></SideBar>
                <Banner></Banner>
            </div>
                <FLashProduct></FLashProduct>
                <Catergory_Sort></Catergory_Sort>
                <Best_Selling></Best_Selling>
                <Products_Showcase></Products_Showcase>
                <New_Arrival></New_Arrival>
                <Service></Service>
        </div>
    );
};

export default Home;