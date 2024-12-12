import React from 'react';
import SideBar from '../shared/SideBar/SideBar';
import Shop_Banner from './Shop_Banner/Shop_Banner';
import Products_Showcase from '../shared/Products Showcase/Products_Showcase';
import FLashProduct from '../shared/Flash_Sales/Flash_Product';
import Catergory_Sort from '../shared/Category_Sort/Catergory_Sort';
import Best_Selling from '../shared/Best_Selling/Best_Selling';
import New_Arrival from '../shared/New_Arrival/New_Arrival';



const Shop = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <div className="flex items-center">
                    <SideBar></SideBar>
                    <Shop_Banner></Shop_Banner>
                </div>
                <Best_Selling></Best_Selling>
                <Products_Showcase></Products_Showcase>
                <FLashProduct></FLashProduct>
                <Catergory_Sort></Catergory_Sort>
                <New_Arrival></New_Arrival>
            </div>
        </>
    );
};

export default Shop;