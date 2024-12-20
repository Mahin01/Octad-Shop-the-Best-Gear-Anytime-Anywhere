import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const NavMenu = () => {
    const {logoutUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser()
        .then(result => {
            navigate("/login");
        })
    }
    return (
        <>
            <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    {/* Hamburger Menu for Small Screens */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        {/* Dropdown Menu */}
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/"}>Home</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/shop"}>Shop</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/contact"}>Contact</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/about"}>About</Link></li>
                            <li><Link className='hover:bg-transparent hover:text-primary' to={"/signup"}>Register</Link></li>
                        </ul>
                    </div>

                {/* Brand Logo */}
                    <a href="/" className="text-3xl font-bold uppercase">Octad</a>
                </div>

                {/* Navbar Links for Larger Screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/"}>Home</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/shop"}>Shop</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/contact"}>Contact</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/about"}>About</Link></li>
                        <li><Link className='hover:bg-transparent hover:text-primary' to={"/signup"}>Register</Link></li>
                    </ul>
                </div>

                <div className="navbar-end gap-4">
                    <div className="form-control">
                        <div class="relative">
                            <input type="search" name="q" class="input input-bordered text-sm rounded w-24 md:w-auto h-8 outline-none focus:outline-none" placeholder="Search..." autocomplete="off" />
                            <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                                <button type="submit" class="p-1">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                            </span>
                        </div>                    
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                            <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <Link to={"/cart"} lassName="btn btn-primary btn-block">View cart</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                        <Link to={"/My_Account"} className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><button type='submit' onClick={handleLogout}>Logout</button></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavMenu;