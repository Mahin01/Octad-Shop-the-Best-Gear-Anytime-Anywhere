import React from 'react';

const My_Account = () => {
    return (
        <>
        <div className="max-w-screen-xl mx-auto flex min-h-screen my-auto">
          <aside class="p-4 w-2/5 pl-0 border-gray-200 my-auto">
          <div className="manage_account mb-5">
          <h2 className="text-lg font-bold mb-2">Manage My Account</h2>
                <ul class="space-y-2">
                    <li><a href="#" class="block">My Profile</a></li>
                    <li><a href="#" class="block">Payment Mehod</a></li>
                </ul>
            </div>
            <div className="manage_orders mb-5">
                <h2 className="text-lg font-bold mb-2">Manage Orders</h2>
                <ul class="space-y-2">
                    <li><a href="#" class="block">My Returns</a></li>
                    <li><a href="#" class="block">My Cancellations</a></li>
                </ul>
            </div>
            <div className="manage_orders">
                <a href="#"><h2 className="text-lg font-bold mb-2">My Wishlist</h2></a>
            </div>
            </aside>
            <main className='my-auto ml-auto w-3/5'>
            <div className="card w-full mx-auto bg-white border border-gray-200 shadow-lg rounded-lg px-8 py-5">
                        <div className="card-body">
                            <h2 className="text-xl mb-5 font-bold">Edit your profile info</h2>
                            <form>
                                <div className="flex max-w-screen-xl mx-auto gap-8">
                                    <div className="form-control mb-5 w-1/2">
                                        <label className="flex items-center mb-2 text-sm font-bold">
                                            First Name
                                        </label>
                                        <input className='input bg-base-200' type="text" />
                                    </div>
                                    <div className="form-control mb-5 w-1/2">
                                        <label className="flex items-center mb-2 text-sm font-bold">
                                            Last Name
                                        </label>
                                        <input className='input bg-base-200' type="text" />
                                    </div>
                                </div>
                                <div className="flex max-w-screen-xl mx-auto gap-8">
                                    <div className="form-control mb-5 w-1/2">
                                        <label className="flex items-center mb-2 text-sm font-bold">
                                        Email</label>
                                        <input className='input bg-base-200' type="email" />
                                    </div>
                                    <div className="form-control mb-5 w-1/2">
                                        <label className="flex items-center mb-2 text-sm font-bold">
                                        Address</label>
                                        <input className='input bg-base-200' type="text" />
                                    </div>
                                </div>
                                <div className="form-control mb-5">
                                    <label className="flex items-center mb-2 text-sm font-bold">
                                    Change Password</label>
                                    <input className='input bg-base-200 mb-2' type="password" placeholder='Current Password'/>
                                    <input className='input bg-base-200 mb-2' type="password" placeholder='New Password'/>
                                    <input className='input bg-base-200' type="password" placeholder='Re-type Password'/>
                                </div>
                                <div className="align-right">
                                    <button className='btn btn-primary text-white'>Save Changes</button>
                                    <button type='link'>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </main>
        </div> 
        </>
    );
};

export default My_Account;