import React from 'react';

const Footer = () => {
    return (
        <>
        <footer className="bg-black text-white py-10">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-5">
                {/* Column 1 */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Exclusive</h3>
                    <p className="text-sm">Subscribe</p>
                    <p className="text-sm">Get 10% off your first order</p>
                    <form className="flex items-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 rounded-l bg-gray-800 text-white outline-none"
                    />
                    <button className="p-2 bg-primary rounded-r">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 14.586V4a1 1 0 011-1z"></path>
                        </svg>
                    </button>
                    </form>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Support</h3>
                    <p className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <p className="text-sm">exclusive@gmail.com</p>
                    <p className="text-sm">+88015-88888-9999</p>
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Account</h3>
                    <ul className="space-y-2 text-sm">
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Quick Link</h3>
                    <ul className="space-y-2 text-sm">
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
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