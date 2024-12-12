import React, { useState } from 'react';

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    
    // Increment function
    const handleIncrease = () => setQuantity(quantity + 1);
    
    // Decrement function
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        };
    };
      
    return (
        <>
            <div className="max-w-screen-xl mx-auto my-12">
                <table className="table my-8">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product Details</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src="./iPhone_13_pro_max.jpg"
                                alt="Product Image" />
                            </div>
                            </div>
                            <div>
                                <div className="font-bold">iPhone 13 Pro Max 256GB</div>
                            </div>
                        </div>
                        </td>
                        <td>$749</td>
                        <td>Purple</td>
                        <td>
                            <div>
                                <button type="button"
                                    class="flex items-center py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 124 124">
                                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                    </svg>

                                    <span class="mx-2">1</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 42 42">
                                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td>$749</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img src="./airpods-pro-2.jpeg" alt="Product Image" />
                            </div>
                            </div>
                            <div>
                                <div className="font-bold">Airpods Pro 2</div>
                            </div>
                        </div>
                        </td>
                        <td>$249</td>
                        <td>White</td>
                        <td>
                            <div>
                                <button type="button"
                                    class="flex items-center py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 124 124">
                                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                    </svg>

                                    <span class="mx-2">1</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 42 42">
                                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td>$249</td>
                    </tr>
                    </tbody>
                </table>
                <div className="flex justify-between mb-12">
                    <div className="shop_btn">
                        <button type='button' className='btn bg-inherit border-slate-400 px-5 py-2'>Return To Home</button>
                    </div>
                    <div className="update_cart">
                        <button type='button' className='btn bg-inherit border-slate-400 px-5 py-2'>Update Cart</button>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="flex space-x-2 w-2/3">
                        <input type="text" placeholder="Coupon Code" className="w-1/3 h-10 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:bg-primary focus:border-transparent transition duration-200"/>
                        <button className="px-5 h-10 bg-primary text-white rounded-lg hover:bg-primary transition duration-200">Apply</button>
                    </div>
                    <div className="flex-1 p-5 border">
                    <h2 className="text-xl font-bold my-5">Cart Total</h2>
                    <div className="flex flex-col items-center lg:flex-row lg:gap-10">
                    <div className="lg:w-full">
                    <div className="space-y-5 my-5">
                    <div className="flex items-center justify-between">
                        <div className="space-x-4">
                            <h6 className='text-sm font-bold'>Subtotal:</h6>
                            </div>
                            <p className="text-sm font-semibold">$1008</p>
                        </div>
                        <div className='border-b border-slate-800'></div>
                        <div className="flex items-center justify-between">
                            <div className="space-x-4">
                                <h6 className='text-sm font-bold'>Shipping:</h6>
                            </div>
                                <p className="text-sm font-semibold">$15</p>
                        </div>
                        <div className='border-b border-slate-800'></div>
                            <div className="flex items-center justify-between">
                                <div className="space-x-4">
                                    <h6 className='text-sm font-bold'>Total:</h6>
                                </div>
                                    <p className="text-sm font-semibold">$1023</p>
                            </div>
                        </div>
                        <div className="checkout_btn text-center">
                            <button className='btn btn-primary text-white'>Proceed To Checkout</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Cart;