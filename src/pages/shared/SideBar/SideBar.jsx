import React from 'react';

const SideBar = () => {
    return (
        <>
           <div className="drawer lg:drawer-open">
                <div id="my-drawer-2" type="checkbox" className="drawer-toggle"></div>
                <div className="drawer-content">
                    {/* Page content here */}
                    <ul className="menu menu-vertical w-full p-0 lg:hidden text-center">
                    {/* Sidebar content here */}
                        <li><a>Smartphones</a></li>
                        <li><a>Laptops</a></li>
                        <li><a>Smartwatches</a></li>
                        <li><a>Camera</a></li>
                        <li><a>Headphones</a></li>
                        <li><a>Mouse</a></li>
                        <li><a>Keyboards</a></li>
                    </ul>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu menu-vertical min-h-full w-80 p-0">
                    {/* Sidebar content here */}
                        <li><a>Smartphones</a></li>
                        <li><a>Laptops</a></li>
                        <li><a>Smartwatches</a></li>
                        <li><a>Camera</a></li>
                        <li><a>Headphones</a></li>
                        <li><a>Mouse</a></li>
                        <li><a>Keyboards</a></li>
                    </ul>
                </div>
            </div> 
        </>
    );
};

export default SideBar;