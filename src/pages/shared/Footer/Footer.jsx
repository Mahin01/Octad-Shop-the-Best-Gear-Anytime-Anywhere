import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className="bg-black text-white py-10">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-5">
                {/* Column 1 */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Octad</h3>
                    <p className="text-lg">Subscribe</p>
                    <p className="text-sm">Get 10% off your first order</p>
                    <form className="flex items-center">
                        <div className="relative">
                        <input type="email" placeholder="Enter your email" className="p-1 text-sm rounded-l bg-gray-800 text-white outline-none"/>
                        <span class="absolute inset-y-0 right-0 flex items-center">
                            <button type="submit" class="p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                                <path d="M2.5 2.5L21.5 11.5C22 11.75 22 12.25 21.5 12.5L2.5 21.5C2 21.75 1.5 21.5 1.5 21L2.5 14.5L14.5 12L2.5 9.5L1.5 3C1.5 2.5 2 2.25 2.5 2.5ZM14 12.25L2.5 14.5L14 12.25Z"/>
                            </svg>
                            </button>
                        </span>
                        </div>
                    </form>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Support</h3>
                    <p className="text-sm">GEC Circle, Chattogram</p>
                    <p className="text-sm">octad@gmail.com</p>
                    <p className="text-sm">+88012-0000-9999</p>
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Account</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link className='hover:underline' to={"/My_account"}>My Account</Link></li>
                        <li><Link className='hover:underline' to={"/login"}>Login</Link> / <Link className='hover:underline' to={"/register"}>Register</Link></li>
                        <li><Link className='hover:underline' to={"/cart"}>Cart</Link></li>
                        <li><Link className='hover:underline' to={"/wishlist"}>Wishlist</Link></li>
                        <li><Link className='hover:underline' to={"/shop"}>Shop</Link></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Quick Link</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link className='hover:underline' to={"/privacy-policy"}>Privacy Policy</Link></li>
                        <li><Link className='hover:underline' to={"/terms-of-policy"}>Terms Of Policy</Link></li>
                        <li><Link className='hover:underline' to={"/faq"}>FAQ</Link></li>
                        <li><Link className='hover:underline' to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>

                {/* Column 5 */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Download App</h3>
                    <p className="text-sm">Save $3 with App New User Only</p>
                    <div className="flex items-center space-x-2">
                    <img
                        src="https://via.placeholder.com/100x100"
                        alt="QR Code"
                        className="w-20 h-20"
                    />
                    <div className="space-y-2">
                        <img
                        src="https://via.placeholder.com/150x50"
                        alt="Google Play"
                        className="w-28"
                        />
                        <img
                        src="https://via.placeholder.com/150x50"
                        alt="App Store"
                        className="w-28"
                        />
                    </div>
                    </div>
                    <div className="flex space-x-4 text-xl">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                    </div>
                </div>
                </div>
        </footer>
        </>
    );
};

export default Footer;