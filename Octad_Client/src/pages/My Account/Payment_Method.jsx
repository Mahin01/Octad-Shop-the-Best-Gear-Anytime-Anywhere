import React from 'react';
import Profile_Menu from './profile_menu';

const Payment_Method = () => {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex flex-row gap-4 items-start w-full my-5">
                    <Profile_Menu></Profile_Menu>
                <main className="flex-1 bg-white p-8 border shadow-sm rounded-lg">
                    <h2 className="text-xl mb-5 font-bold">Manage Payment Methods</h2>
                    <form>
                        {/* Password Change Fields */}
                        <section className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-3">
                                Your Payment Methods
                            </h2>
                            <div className="space-y-4">
                                {/* Example of a saved card */}
                                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border">
                                <div className="flex items-center">
                                    <img
                                    src="https://img.icons8.com/color/48/visa.png"
                                    alt="Visa"
                                    className="w-12 h-8 mr-4"
                                    />
                                    <span className="text-gray-800 font-medium">
                                    Visa Ending in 1234
                                    </span>
                                </div>
                                <button className="text-red-600 hover:underline text-sm">
                                    Remove
                                </button>
                                </div>

                                {/* Another payment method */}
                                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border">
                                <div className="flex items-center">
                                    <img
                                    src="https://img.icons8.com/color/48/mastercard-logo.png"
                                    alt="Mastercard"
                                    className="w-12 h-8 mr-4"
                                    />
                                    <span className="text-gray-800 font-medium">
                                    Mastercard Ending in 5678
                                    </span>
                                </div>
                                <button className="text-red-600 hover:underline text-sm">
                                    Remove
                                </button>
                                </div>
                            </div>
                            </section>

                            {/* Add Payment Method */}
                            <section>
                            <h2 className="text-xl font-semibold text-gray-700 mb-3">
                                Add New Payment Method
                            </h2>
                            <form className="space-y-4">
                                <div>
                                <label
                                    htmlFor="cardName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name on Card
                                </label>
                                <input
                                    id="cardName"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full p-2 mt-1 border rounded-lg"
                                />
                                </div>
                                <div>
                                <label
                                    htmlFor="cardNumber"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Card Number
                                </label>
                                <input
                                    id="cardNumber"
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    className="w-full p-2 mt-1 border rounded-lg"
                                />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                    htmlFor="expiryDate"
                                    className="block text-sm font-medium text-gray-700"
                                    >
                                    Expiry Date
                                    </label>
                                    <input
                                    id="expiryDate"
                                    type="text"
                                    placeholder="MM/YY"
                                    className="w-full p-2 mt-1 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label
                                    htmlFor="cvv"
                                    className="block text-sm font-medium text-gray-700"
                                    >
                                    CVV
                                    </label>
                                    <input
                                    id="cvv"
                                    type="text"
                                    placeholder="123"
                                    className="w-full p-2 mt-1 border rounded-lg"
                                    />
                                </div>
                                </div>
                                <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
                                >
                                Add Card
                                </button>
                            </form>
                            </section>
                                            {/* Buttons */}
                        <div className="flex justify-end mt-4 gap-2">
                            <button type="button" className="hover:underline">Cancel</button>
                            <button type="submit" className="btn btn-primary text-white p-2">Save Changes</button>
                        </div>
                    </form>
                </main>
                </div> 
            </div>
        </>
    );
};

export default Payment_Method;