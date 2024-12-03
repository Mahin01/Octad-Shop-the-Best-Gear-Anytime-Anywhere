import { faCamera, faComputer, faDesktop, faGamepad, faHeadphones, faLaptop, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons/faStopwatch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Catergory_Sort = () => {
    const categories = [
        { id: 1, category_name: "Smartphones", cat_img: faMobile },
        { id: 2, category_name: "Headphones", cat_img: faHeadphones },
        { id: 3, category_name: "Monitor", cat_img: faDesktop },
        { id: 4, category_name: "Dekstop", cat_img: faComputer },
        { id: 5, category_name: "Laptops", cat_img: faLaptop},
        { id: 6, category_name: "Smartwatches", cat_img: faStopwatch},
        { id: 7, category_name: "Camera", cat_img: faCamera},
        { id: 8, category_name: "Gaming Accessories", cat_img: faGamepad},
      ];
    
      return (
        <>
        <section className="flash_sales my-12">
            <div className="flex items-center justify-between my-5">
                <div className="section_title">
                    <h2 className="text-3xl font-bold">Browse By Category</h2>
                </div>
                <div className="arrow_btn">
                <div class="flex justify-center items-center space-x-4">
                    {/* <!-- Left Arrow --> */}
                    <div role="button" class="flex justify-center items-center w-12 h-12 rounded-full bg-gray-200 text-black hover:bg-gray-300 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    {/* <!-- Right Arrow --> */}
                    <div role="button" class="flex justify-center items-center w-12 h-12 rounded-full bg-gray-200 text-black hover:bg-gray-300 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>                
                </div>
            </div>
            {/* Product Cards */}
            <div className="flex space-x-6 overflow-x-auto no-scrollbar">
              {categories.map((categories) => (
                <div className="card rounded-none max-w-[140px] border border-slate-900">
                <div key={categories.id} className="card-body p-auto">
                  {/* Category Image */}
                  <FontAwesomeIcon icon={categories.cat_img} alt={categories.category_name} className="mx-auto h-16 w-16 mb-4"/>

                  {/* Product Details */}
                  <div>
                    <h6 className="text-md font-bold truncate">{categories.category_name}</h6>
                  </div>
                </div>
                </div>
              ))}
            </div>
            <div className="view_all_btn text-center my-12">
              <button className="btn items-center bg-red-500 text-white">View All Categories</button>
            </div>
            </section>
        </>
    );
};

export default Catergory_Sort;