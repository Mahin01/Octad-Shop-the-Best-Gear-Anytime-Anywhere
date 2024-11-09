import React from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="navbar bg-neutral-950 text-white min-h-1 py-0">
                <div className="navbar-start"></div>
                    <div className="navbar-center">
                        <p className="text-sm">11.11 Sale is live now <u><Link to={"/"}> Shop Now!</Link></u></p>
                    </div>
                    <div className="navbar-end">
                    <ul className="menu menu-horizontal">
                        <li>
                            <details>
                            <summary>English</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Bangla</a></li>
                            </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <NavMenu></NavMenu>
        </>
    );
};

export default Header;