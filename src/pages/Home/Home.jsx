import React from 'react';
import SideBar from './SideBar/SideBar';
import Banner from './Banner/Banner';
import "./Home.css";
import ProductCarousel from './Flash_Sales/Flash_Product';
import Catergory_Sort from './Category_Sort/Catergory_Sort';
import Best_Selling from './Best_Selling/Best_Selling';
import Products_Showcase from './Products Showcase/Products_Showcase';
import New_Arrival from './New_Arrival/New_Arrival';
import Service from './Service/Service';

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
                <Products_Showcase></Products_Showcase>
                <New_Arrival></New_Arrival>
                <Service></Service>
        </div>
    );
};

export default Home;