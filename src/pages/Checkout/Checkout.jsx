import React from 'react';

const Checkout = () => {
    return (
        <>
            <div className="checkout-details max-w-screen-xl mx-auto my-8">
                <h2 className="text-3xl font-bold mb-8">Billing Information</h2>
                    <div className="min-h-screen flex w-full justify-center">
                        <div className="w-1/2">
                            <form>
                                <div className="form-control mb-5">
                                    <label className='text-sm font-bold mb-2'>Name <span className='text-red-400'> *</span></label>
                                    <input type="text" name="name" placeholder='Enter Your Name' className='input border rounded-md bg-base-200 p-2' />
                                </div>
                                <div className="form-control mb-5">
                                    <label className='text-sm font-bold mb-2'>Billing Address<span className='text-red-400'> *</span></label>
                                    <input type="text" name="name" placeholder='Street Address' className='input border rounded-md bg-base-200 p-2 mb-2' />
                                    <input type="text" name="name" placeholder='House No' className='input border rounded-md bg-base-200 p-2' />
                                </div>
                                <div className="form-control mb-5">
                                    <label className='text-sm font-bold mb-2'>City<span className='text-red-400'> *</span></label>
                                    <select name="city" className='select border rounded-md bg-base-200 p-2'>
                                        <option value="Choose Your City">Choose Your City</option>
                                    </select>
                                </div>
                                <div className="form-control mb-5">
                                    <label className='text-sm font-bold mb-2'>Contact Number<span className='text-red-400'> *</span></label>
                                    <input type="text" name="name" placeholder='Enter Your Name' className='input border rounded-md bg-base-200 p-2' />
                                </div>
                                <div className="form-control mb-5">
                                    <label className='text-sm font-bold mb-2'>E-mail Address<span className='text-red-400'> *</span></label>
                                    <input type="text" name="name" placeholder='Enter Your Name' className='input border rounded-md bg-base-200 p-2' />
                                </div>
                            </form>
                        </div>
                    <div className="flex-1 px-8 w-1/2">
                    <div className="flex flex-col lg:flex-row lg:gap-10 min-h-screen">
                            <div className="lg:w-2/3 p-5">
                                <div className="space-y-5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <img className='w-16 h-16 object-cover rounded' src="./iPhone_13_pro_max.jpg" alt="" />
                                            <h6 className='text-sm font-bold'>iPhone 13 Pro Max 256GB</h6>
                                        </div>
                                            <p className="text-sm font-semibold">$759</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <img className='w-16 h-16 object-cover rounded' src="./airpods-pro-2.jpeg" alt="" />
                                            <h6 className='text-sm font-bold'>Apple Airpods Pro 2</h6>
                                        </div>
                                            <p className="text-sm font-semibold">$249</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="space-x-4">
                                            <h6 className='text-sm font-bold'>Subtotal :</h6>
                                        </div>
                                        <p className="text-sm font-semibold">$1008</p>
                                    </div>
                                    <div className='border-b border-slate-800'></div>
                                    <div className="flex items-center justify-between">
                                        <div className="space-x-4">
                                            <h6 className='text-sm font-bold'>Shipping :</h6>
                                        </div>
                                            <p className="text-sm font-semibold">$15</p>
                                    </div>
                                    <div className='border-b border-slate-800'></div>
                                    <div className="flex items-center justify-between">
                                        <div className="space-x-4">
                                            <h6 className='text-sm font-bold'>Total :</h6>
                                        </div>
                                            <p className="text-sm font-semibold">$1023</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <input type="radio" name="bank" className="radio" />
                                            <h6 className='text-sm font-bold'>Bank</h6>
                                        </div>
                                        <div className="payment_options">
                                            <ul className="menu menu-horizontal px-1">
                                                <li><a href="#"><img className='w-10 h-10' src="./visa.png" alt="" /></a></li>
                                                <li><a href="#"><img className='w-10 h-10' src="money.png" alt="" /></a></li>
                                                <li><a href="#"><img className='w-10 h-10' src="paypal.png" alt="" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <input type="radio" name="cod" className="radio" />
                                            <h6 className='text-sm font-bold'>Cash On Delivery</h6>
                                        </div>
                                        <div className="payment_options">
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input type="text" placeholder="Enter Coupon Code" className="w-full h-10 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:bg-primary focus:border-transparent transition duration-200"/>
                                        <button className="px-5 h-10 bg-primary text-white rounded-lg hover:bg-primary transition duration-200"> Apply </button>
                                    </div>
                                    <div className="order_btn">
                                        <button className='btn btn-primary text-white'>Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;