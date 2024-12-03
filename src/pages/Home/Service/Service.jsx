import { faCertificate, faHeadset, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Service = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-8 p-5 my-5">
                {/* First Icon */}
                <div className="flex flex-col items-center justify-center w-1/3 text-black">
                    <div className="flex justify-center items-center w-16 h-16 bg-black rounded-full">
                        <FontAwesomeIcon className="text-white" icon={faTruckFast} />
                    </div>
                    <h2 className="text-xl font-bold mt-2">FREE AND FAST DELIVERY</h2>
                    <p className="text-sm font-medium">Free delivery for all orders over $200</p>
                </div>
                {/* Center Card */}
                <div className="flex flex-col items-center justify-center w-1/3 text-black">
                    <div className="flex justify-center items-center w-16 h-16 bg-black rounded-full">
                        <FontAwesomeIcon className="text-white" icon={faHeadset} />
                    </div>
                    <h2 className="text-xl font-bold mt-2">24/7 CUSTOMER SERVICE</h2>
                    <p className="text-sm font-medium">Friendly 24/7 customer support</p>
                </div>
                {/* Third Icon */}
                <div className="flex flex-col items-center justify-center w-1/3 text-black">
                    <div className="flex justify-center items-center w-16 h-16 bg-black rounded-full">
                        <FontAwesomeIcon className="text-white" icon={faCertificate} />
                    </div>
                    <h2 className="text-xl font-bold mt-2">MONEY BACK GUARANTEE</h2>
                    <p className="text-sm font-medium">We reurn money within 30 days</p>
                </div>
            </div>  
        </>
    );
};

export default Service;