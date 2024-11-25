import React, { useState } from 'react';

const Product_Details = () => {
    const [value, setValue] = useState(0);

    // Handlers for increment and decrement
    const handleIncrement = () => setValue((prev) => prev + 1);
    const handleDecrement = () => setValue((prev) => (prev > 0 ? prev - 1 : 0));
    return (
        <>
           <div className="max-w-screen-xl mx-auto h-auto">
                <div className="flex items-start my-5 gap-5">
                    <div className="flex flex-col items-center">
                        <div className="space-y-2">
                            <div className="img-1 flex items-center w-24 h-24 bg-base-200 p-2"><img src="./apple-iphone-13-pro-max-1.jpg" alt="" /></div>
                            <div className="img-2 flex items-center w-24 h-24 bg-base-200 p-2"><img src="./apple-iphone-13-pro-max-2.jpg" alt="" /></div>
                            <div className="img-3 flex items-center w-24 h-24 bg-base-200 p-2"><img src="./apple-iphone-13-pro-max-3.jpg" alt="" /></div>
                            <div className="img-4 flex items-center w-24 h-24 bg-base-200 p-2"><img src="./apple-iphone-13-pro-max-4.jpg" alt="" /></div>
                            </div>
                        </div>
                    <div className="product_img bg-base-200 flex items-center mr-12">
                        <img className='w-full h-96' src="./apple-iphone-13-pro-max-1.jpg" alt="" />
                    </div>
                    <div className="space-y-5 md:w-3/4">
                        <h1 className="product-title text-3xl font-semibold">iPhone 13 Pro Max</h1>
                        <div className="rating_reviews flex items-center">
                            <div className="rating rating-sm mr-2 ">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2"className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        <div className="reviews text-sm"> (180 reviews) | <span className='text-indigo-500'> In stock</span></div>
                        </div>
                        <div className="price">
                            <p className="price text-3xl">$799.00</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="colors">
                                <p className='text-lg mr-5'>Colors:</p>
                            </div>
                            <div className="color_picker flex gap-2">
                                <div className="flex space-x-2">
                                    <button type="button" class="border-2 bg-base-200 border-slate-600 shrink-0 transition-all">Graphite</button>
                                    <button type="button" class="border-2 bg-base-200 border-slate-600 shrink-0 transition-all">Gold</button>
                                    <button type="button" class="border-2 bg-base-200 border-slate-600 shrink-0 transition-all">Silver</button>
                                    <button type="button" class="border-2 bg-base-200 border-slate-600 shrink-0 transition-all">Sierra Blue</button>
                                    <button type="button" class="border-2 bg-base-200 border-slate-600 shrink-0 transition-all">Alpine Green</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="colors">
                                <p className='text-lg mr-2'>Variants:</p>
                            </div>
                            <div className="color_picker flex gap-2">
                                <div className="flex space-x-2">
                                    <button type="button" class="border-2 bg-base-200 border-slate-600 shrink-0 transition-all">128GB</button>
                                    <button type="button" class="border-2 bg-base-200 border-slate-600 shrink-0 transition-all">256GB</button>
                                    <button type="button" class="border-2 bg-base-200 border-slate-600 shrink-0 transition-all">512GB</button>
                                    <button type="button" class="border-2 bg-base-200 border-slate-600 shrink-0 transition-all">1TB</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="colors">
                                <p className='text-lg'>Quantity:</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="flex items-center space-x-2">
                                    {/* Minus Button */}
                                    <button onClick={handleDecrement} className="text-neutral-500 text-2xl font-bold rounded"> − </button> 
                                    {/* Input Field */}
                                    <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-16 text-center text-2xl border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/> 
                                    {/* Plus Button */}
                                    <button onClick={handleIncrement} className="bg-black text-white text-xl font-bold rounded"> + </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="order_btn">
                                <button className='btn btn-primary text-white'>Buy Now</button>
                            </div>
                            <div tabIndex={0} role="button" className="btn btn-ghost border-2 border-slate-700">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div tabIndex={0} role="button" className="btn btn-ghost border-2 border-slate-700">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.172 5.172a4 4 0 015.656 0L12 8.344l3.172-3.172a4 4 0 115.656 5.656L12 21 3.172 10.828a4 4 0 010-5.656z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Description & Rating Tab group */}
                <div role="tablist" className="tabs tabs-lifted my-5">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl text-semibold whitespace-nowrap w-full text-center" aria-label="Product Description" />
                    <div role="tabpanel" className="tab-content border-base-300 p-6"> 
                    The iPhone 13 Pro Max features a 6.7-inch Super Retina XDR display with ProMotion (120Hz refresh rate) and is powered by the A15 Bionic chip for exceptional performance. It has a triple 12MP camera system with Telephoto, Wide, and Ultra Wide lenses, offering features like Night Mode and Cinematic Mode. With a battery life of up to 28 hours of video playback, storage options ranging from 128GB to 1TB, and a surgical-grade stainless steel frame with Ceramic Shield, it is both durable and stylish. The device is water and dust-resistant (IP68) and comes in Graphite, Gold, Silver, Sierra Blue, and Alpine Green, running iOS 15 (upgradeable). </div>
                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab text-xl text-semibold"
                        aria-label="Reviews"
                        defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        Tab content 2
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product_Details;