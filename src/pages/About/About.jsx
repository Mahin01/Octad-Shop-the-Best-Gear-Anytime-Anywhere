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
            </div> 
        </>
    );
};

export default About;