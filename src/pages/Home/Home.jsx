import React from 'react';
import SideBar from '../shared/SideBar/SideBar';
import Banner from '../shared/Banner/Banner';
import "./Home.css";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div class="flex min-h-auto">
                <SideBar></SideBar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;