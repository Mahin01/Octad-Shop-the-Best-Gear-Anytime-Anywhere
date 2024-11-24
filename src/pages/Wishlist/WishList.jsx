import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const WishList = () => {
    return (
        <>
           <div className="max-w-screen-xl mx-auto">
                <div className="flex items-center justify-between my-5">
                    <div className="wishlist_total">
                        <h2 className='text-xl'>Wishlist(4)</h2>
                    </div>
                    <div className="move_bag">
                        <button className='btn bg-black text-white hover:bg-black'>Move All To Bag</button>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="card">
                        <div className="card-body">
                            <div class="relative bg-base-200">
                                <img src="./iPhone_13_pro_max.jpg" alt="Product Image" class="w-full h-48 object-cover"/>
                                <div class="absolute top-2 bg-black text-white text-sm px-2 py-1 rounded">-10%</div>
                                <button class="absolute top-1 right-0">
                                    <FontAwesomeIcon className='h-5 w-5 text-gray-600' icon={faTrashAlt} />
                                </button>
                            </div>
                            <div class="bg-black text-white text-center cursor-pointer hover:bg-gray-800">
                                <button class="flex justify-center items-center space-x-2">
                                <span><FontAwesomeIcon icon={faCartShopping} /> Add To Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div class="relative bg-base-200">
                                <img src="./airpods-pro-2.jpeg" alt="Product Image" class="w-full h-48 object-cover"/>
                                <div class="absolute top-2 bg-black text-white text-sm px-2 py-1 rounded">-20%</div>
                                <button class="absolute top-2 right-0">
                                    <FontAwesomeIcon className='h-5 w-5 text-gray-600' icon={faTrashAlt} />
                                </button>
                            </div>
                            <div class="bg-black text-white text-center cursor-pointer hover:bg-gray-800">
                                <button class="flex justify-center items-center space-x-2">
                                <span><FontAwesomeIcon icon={faCartShopping} /> Add To Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between my-5">
                    <div className="wishlist_total">
                        <h2 className='text-xl'>Only For You</h2>
                    </div>
                    <div className="move_bag">
                        <button className='btn bg-black text-white hover:bg-black'>View All</button>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="card">
                        <div className="card-body">
                            <div class="relative bg-base-200">
                                <img src="./iPhone-15-Plus.jpg" alt="Product Image" class="w-full h-48 object-cover"/>
                                <div class="absolute top-2 bg-black text-white text-sm px-2 py-1 rounded">-10%</div>
                                <button class="absolute top-1 right-0">
                                    <FontAwesomeIcon className='h-5 w-5 text-gray-600' icon={faTrashAlt} />
                                </button>
                            </div>
                            <div class="bg-black text-white text-center cursor-pointer hover:bg-gray-800">
                                <button class="flex justify-center items-center space-x-2">
                                <span><FontAwesomeIcon icon={faCartShopping} /> Add To Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div class="relative bg-base-200">
                                <img src="./pixel-9.webp" alt="Product Image" class="w-full h-48 object-cover"/>
                                <div class="absolute top-2 bg-black text-white text-sm px-2 py-1 rounded">-20%</div>
                                <button class="absolute top-2 right-0">
                                    <FontAwesomeIcon className='h-5 w-5 text-gray-600' icon={faTrashAlt} />
                                </button>
                            </div>
                            <div class="bg-black text-white text-center cursor-pointer hover:bg-gray-800">
                                <button class="flex justify-center items-center space-x-2">
                                <span><FontAwesomeIcon icon={faCartShopping} /> Add To Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div class="relative bg-base-200">
                                <img src="./xiaomi-13-ultra.jpg" alt="Product Image" class="w-full h-48 object-cover"/>
                                <div class="absolute top-2 bg-black text-white text-sm px-2 py-1 rounded">-20%</div>
                                <button class="absolute top-2 right-0">
                                    <FontAwesomeIcon className='h-5 w-5 text-gray-600' icon={faTrashAlt} />
                                </button>
                            </div>
                            <div class="bg-black text-white text-center cursor-pointer hover:bg-gray-800">
                                <button class="flex justify-center items-center space-x-2">
                                <span><FontAwesomeIcon icon={faCartShopping} /> Add To Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div class="relative bg-base-200">
                                <img src="./Asus_vivobook_15.webp" alt="Product Image" class="w-full h-48 object-cover"/>
                                <div class="absolute top-2 bg-black text-white text-sm px-2 py-1 rounded">-20%</div>
                                <button class="absolute top-2 right-0">
                                    <FontAwesomeIcon className='h-5 w-5 text-gray-600' icon={faTrashAlt} />
                                </button>
                            </div>
                            <div class="bg-black text-white text-center cursor-pointer hover:bg-gray-800">
                                <button class="flex justify-center items-center space-x-2">
                                <span><FontAwesomeIcon icon={faCartShopping} /> Add To Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default WishList;