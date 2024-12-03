import React from 'react';

const SideBar = () => {
    return (
        <>
            <div class="p-4 w-1/5 pl-0 border-r border-gray-200">
                <ul class="space-y-2">
                    <li><a href="#" class="block p-2 rounded">Smartphones</a></li>
                    <li><a href="#" class="block p-2 rounded">Laptops</a></li>
                    <li><a href="#" class="block p-2 rounded">Smartwatches</a></li>
                    <li><a href="#" class="block p-2 rounded">Camera</a></li>
                    <li><a href="#" class="block p-2 rounded">Headphones</a></li>
                    <li><a href="#" class="block p-2 rounded">Mouse</a></li>
                    <li><a href="#" class="block p-2 rounded">Keyboards</a></li>
                    <li><a href="#" class="block p-2 rounded">Gaming Accessories</a></li>
                </ul>
            </div>
        </>
    );
};

export default SideBar;