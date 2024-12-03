import React from 'react';

const New_Arrival = () => {
    return (
        <>
           <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-white p-8">
                {/* <!-- PlayStation 5 Section --> */}
                <div class="relative flex items-end  rounded-lg overflow-hidden h-[420px]">
                    <img
                    src="./galaxy-s24-ultra-titanium-black.webp"
                    alt="Samsung Galaxy S24 Ultra (12/256GB)"
                    class="absolute inset-0 w-auto h-auto object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="relative z-10 p-6">
                        <h2 class="text-2xl font-bold"> Samsung Galaxy S24 Ultra (12/256GB)</h2>
                        <p class="text-sm text-gray-100 mt-2 mb-2"> 6.8" Dynamic LTPO AMOLED 2X 120Hz Display </p>
                        <p class="text-sm text-gray-100 mb-2"> Qualcomm SM8650-AC Snapdragon 8 Gen 3 (4 nm) </p>
                        <p class="text-sm text-gray-100 mb-2"> Quad 200+50+10+12MP on Rear, 12MP Selfie </p>
                        <a href="#" className="text-sm btn btn-sm font-bold"> Shop Now </a>
                    </div>
                </div>

                {/* <!-- Right Section --> */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* <!-- Gaming Collection --> */}
                    <div class="relative flex items-end bg-black rounded-lg overflow-hidden h-[200px]">
                    <img
                        src="logitech-f310-GC.webp"
                        alt="Gaming Collection"
                        class="absolute inset-0 w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="relative z-10 p-4">
                        <h3 class="text-lg font-bold">Gaming Collections</h3>
                        <p class="text-sm text-gray-100 mb-2">
                        Featured gaming collections that give you another vibe.
                        </p>
                        <a href="#" className="text-sm btn btn-sm font-bold">
                        Shop Now
                        </a>
                    </div>
                    </div>

                    {/* <!-- Speakers --> */}
                    <div class="relative flex items-end bg-black rounded-lg overflow-hidden h-[200px]">
                    <img
                        src="./mh83-omni-1.jpg"
                        alt="Speakers"
                        class="absolute inset-0 w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="relative z-10 p-4">
                        <h3 class="text-lg font-bold">Headphones</h3>
                        <p class="text-sm text-gray-100 mb-2">Fantech MH83 Omni RGB Gaming Headphone</p>
                        <a href="#" className="text-sm btn btn-sm font-bold"
                        > Shop Now </a>
                    </div>
                    </div>

                    {/* <!-- Perfume --> */}
                    <div class="relative flex items-end bg-base-100 rounded-lg overflow-hidden h-[200px]">
                    <img
                        src="./mi-a-pro-43-01.webp"
                        alt="Perfume"
                        class="absolute inset-0 w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div class="relative z-10 p-4">
                            <h3 class="text-lg font-bold">4K Smart TV</h3>
                            <p class="text-sm text-gray-100 mb-2">Xiaomi A Pro 43 Inch 4K UHD Smart Android Google TV (Global Version)</p>
                            <a href="#" className="text-sm btn btn-sm font-bold"
                            > Shop Now </a>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default New_Arrival;