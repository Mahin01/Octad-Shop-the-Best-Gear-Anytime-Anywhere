import React from 'react';
import { Link } from 'react-router-dom';

const Profile_Menu = () => {
    return (
        <>
            <aside className="w-1/4 p-4">
                <div className="manage_account mb-5">
                    <h2 className="text-lg font-bold mb-2">Manage My Account</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="/My_Account" className="text-gray-700 hover:underline">My Profile</a>
                        </li>
                        <li>
                            <Link to={"/My_Account/Payment_Method"} className="text-gray-700 hover:underline">Payment Method</Link>
                        </li>
                    </ul>
                </div>
                <div className="manage_orders mb-5">
                    <h2 className="text-lg font-bold mb-2">Manage Orders</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-gray-700 hover:underline">My Returns</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:underline">My Cancellations</a>
                        </li>
                    </ul>
                </div>
                <div className="manage_wishlist">
                    <a href="#" className="font-bold text-lg hover:underline">My Wishlist</a>
                </div>
            </aside>
        </>
    );
};

export default Profile_Menu;