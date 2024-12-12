import React from 'react';

const My_Account = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex flex-row gap-4 items-start w-full my-5">
                {/* Menu (On the Left) */}
                <aside className="w-1/4 p-4">
                    <div className="manage_account mb-5">
                        <h2 className="text-lg font-bold mb-2">Manage My Account</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-700 hover:underline">My Profile</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:underline">Payment Method</a>
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

                {/* Card Content */}
                <main className="flex-1 bg-white p-8 border shadow-sm rounded-lg">
                    <h2 className="text-xl mb-5 font-bold">Edit Your Profile Info</h2>
                    <form>
                        {/* Name Fields */}
                        <div className="flex mb-4 gap-4">
                            <div className="form-control w-1/2">
                                <label className="mb-2 text-sm font-bold">First Name</label>
                                <input className="input w-full bg-base-200 border rounded" type="text"/>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="mb-2 text-sm font-bold">Last Name</label>
                                <input className="input w-full bg-base-200 border rounded"  type="text" />
                            </div>
                        </div>

                        {/* Email and Address Fields */}
                        <div className="flex gap-4 mt-4">
                            <div className="form-control w-1/2">
                                <label className="mb-2 text-sm font-bold">Email</label>
                                <input className="input w-full bg-base-200 border rounded" type="email"/>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="mb-2 text-sm font-bold">Address</label>
                                <input className="input w-full bg-base-200 border rounded" type="text" />
                            </div>
                        </div>
                        {/* Password Change Fields */}
                        <div className="form-control mt-6">
                            <label className="mb-2 text-sm font-bold">Change Password</label>
                            <input className="input w-full bg-base-200 mb-2 border rounded" type="password" placeholder="Current Password"/>
                            <input className="input w-full bg-base-200 mb-2 border rounded" type="password" placeholder="New Password"/>
                            <input className="input w-full bg-base-200 border rounded" type="password" placeholder="Re-type Password"/>
                        </div>
                        {/* Buttons */}
                        <div className="flex justify-end mt-4 gap-2">
                            <button type="button" className="hover:underline">Cancel</button>
                            <button type="submit" className="btn btn-primary text-white p-2">Save Changes</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default My_Account;
