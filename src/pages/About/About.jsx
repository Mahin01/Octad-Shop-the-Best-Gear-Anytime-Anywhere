import React from 'react';

const About = () => {
    return (
        <>
           <div className="max-w-screen-xl mx-auto min-h-screen">
                <div className="breadcrumbs text-sm my-2">
                    <ul>
                        <li><a>Home</a></li>
                        <li>Documents</li>
                    </ul>
                </div>
                <div className="flex lg:justify-between">
                    <div className="w-full max-w-sm lg my-auto">
                        <h1 className="text-5xl font-bold mb-12">Our Story</h1>
                        <p className='mb-5'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p className='mb-5'>
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>   
                    </div>
                    <div className="lg:w-1/2">
                        <img src="login_img.png" alt="Login" className="w-full h-auto" />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-8 p-5 my-5">
                    {/* First Icon */}
                    <div className="flex flex-col items-center justify-center w-48 h-48 border border-slate-400 rounded-lg shadow-md text-black">
                        <div className="flex justify-center items-center w-16 h-16 bg-gray-800 rounded-full">
                            <img
                            src="https://img.icons8.com/ios-filled/50/ffffff/shop.png"
                            alt="Shop Icon"
                            className="w-8 h-8"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mt-2">100k</h2>
                        <p className="text-sm font-medium">Active Users</p>
                    </div>
                    {/* Center Card */}
                    <div className="flex flex-col items-center justify-center w-48 h-48 border border-slate-400 bg-primary rounded-lg shadow-md text-white">
                        <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                        <img
                            src="https://img.icons8.com/ios-filled/50/000000/coin-wallet.png"
                            alt="Dollar Icon"
                            className="w-6 h-6"
                        />
                        </div>
                        <h2 className="text-2xl font-bold mt-2">33k</h2>
                        <p className="text-sm font-medium">Monthly Product Sale</p>
                    </div>
                    {/* Third Icon */}
                    <div className="flex flex-col items-center justify-center w-48 h-48 border border-slate-400 rounded-lg shadow-md text-black">
                        <div className="flex justify-center items-center w-20 h-20 bg-gray-800 rounded-full">
                            <img
                            src="https://img.icons8.com/ios-filled/50/ffffff/gift.png"
                            alt="Gift Icon"
                            className="w-10 h-10"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mt-2">20k</h2>
                        <p className="text-sm font-medium">Monthly Product Sale</p>
                    </div>
                    {/* Fourth Icon */}
                    <div className="flex flex-col items-center justify-center w-48 h-48 border border-slate-400 rounded-lg shadow-md text-black">
                        <div className="flex justify-center items-center w-20 h-20 bg-gray-800 rounded-full">
                            <img
                            src="https://img.icons8.com/ios-filled/50/ffffff/money-bag.png"
                            alt="Money Bag Icon"
                            className="w-10 h-10"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mt-2">100k</h2>
                        <p className="text-sm font-medium">Annual Gross Sale</p>
                    </div>
                </div>
                {/* Team Section */}
                <div className="flex items-center justify-center gap-8 p-5 my-5">
                    {/* First Icon */}
                    <div id='team'>
                        <div className="card bg-base-200 rounded-none">
                            <figure>
                                <img className='w-64 h-96' src="image 46.png" alt="Shoes" />
                            </figure>
                        </div>
                        <div className="body">
                            <h2 className="card-title">Mahin Rahman</h2>
                            <p>Founder & Chairman</p>
                            <div className="flex space-x-4 text-xl">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                    {/* Center Card */}
                    <div id='team'>
                        <div className="card bg-base-200 rounded-none">
                            <figure>
                                <img className='w-64 h-96' src="image 51.png" alt="Shoes" />
                            </figure>
                        </div>
                        <div className="body">
                            <h2 className="card-title">Nusrat Faria</h2>
                            <p>Brand Promoter</p>
                            <div className="flex space-x-4 text-xl">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                    {/* Third Icon */}
                    <div id='team'>
                        <div className="card bg-base-200 rounded-none">
                            <figure>
                                <img className='w-64 h-96' src="image 47.png" alt="Shoes" />
                            </figure>
                        </div>
                        <div className="body">
                            <h2 className="card-title">Eshrak Shuvo</h2>
                            <p>Product Manager</p>
                            <div className="flex space-x-4 text-xl">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div class="flex justify-center items-center space-x-8 py-8">
                    <div class="text-center">
                        <div class="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mx-auto">
                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l-4-4m0 0l4-4m-4 4h16" />
                        </svg>
                        </div>
                        <h3 class="mt-4 text-lg font-semibold text-gray-800">Fast Delivery</h3>
                        <p class="mt-2 text-sm text-gray-600">Quick shipping on all orders.</p>
                    </div>
                    <div class="text-center">
                        <div class="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mx-auto">
                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m2 8h-2a4 4 0 01-8 0H5a7 7 0 0114 0z" />
                        </svg>
                        </div>
                        <h3 class="mt-4 text-lg font-semibold text-gray-800">24/7 Support</h3>
                        <p class="mt-2 text-sm text-gray-600">Always here to help you.</p>
                    </div>
                    <div class="text-center">
                        <div class="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mx-auto">
                        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m2 8h-2a4 4 0 01-8 0H5a7 7 0 0114 0z" />
                        </svg>
                        </div>
                        <h3 class="mt-4 text-lg font-semibold text-gray-800">Secure Payments</h3>
                        <p class="mt-2 text-sm text-gray-600">Safe and trusted transactions.</p>
                    </div>
                </div>

            </div> 
        </>
    );
};

export default About;