import React from "react";

const ProductCarousel = () => {
  const products = [
    { id: 1, name: "Logitech f310 Game Controller", price: 120, discount: "40%", rating: 5, img: "logitech-f310-GC.webp" },
    { id: 2, name: "iPhone 13 Pro Max", price: 960, discount: "35%", rating: 4, img: "iPhone_13_pro_max.jpg" },
    { id: 3, name: "Apple Airpods Pro 2", price: 370, discount: "30%", rating: 5, img: "airpods-pro-2.jpeg" },
    { id: 4, name: "iPhone-15-Plus", price: 375, discount: "25%", rating: 4.5, img: "iPhone-15-Plus.jpg" },
    { id: 5, name: "Xiaomi 13 Ultra", price: 499, discount: "10%", rating: 4, img: "xiaomi-13-ultra.jpg"}
  ];

  return (
    <>
    <section className="flash_sales my-12">
        <div className="flex items-center justify-between my-5">
            <div className="section_title">
                <h2 className="text-3xl font-bold">Flash Sale</h2>
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
        <div className="flex space-x-10 overflow-x-auto no-scrollbar">
          {products.map((product) => (
            <div className="card rounded-none max-w-[220px] shadow-lg relative">
            <div key={product.id} className="card-body p-4">
              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>

              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="h-48 w-full mb-4"
              />

              {/* Favorite & View Icons */}
              <div className="absolute top-2 right-2 flex space-x-2">
                <a role="button" className="p-1 bg-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-red-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.172 5.172a4 4 0 015.656 0L12 8.344l3.172-3.172a4 4 0 115.656 5.656L12 21 3.172 10.828a4 4 0 010-5.656z"/>
                </svg>
                </a>
              </div>

              {/* Product Details */}
              <div>
                <h3 className="text-lg font-bold truncate">{product.name}</h3>
                <p className="text-red-500 font-bold">${product.price}</p>
                <div className="flex">
                  {/* Star Ratings */}
                  {"⭐".repeat(Math.floor(product.rating))}
                  {product.rating % 1 !== 0 && "⭐"}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="card-actions items-end mt-auto">
                  <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-800">
                    Add To Cart
                  </button>
              </div>
            </div>
            </div>
          ))}
        </div>
        <div className="view_all_btn text-center my-12">
          <button className="btn items-center bg-red-500 text-white">View All Products</button>
        </div>
        </section>
    </>
  );
};

export default ProductCarousel;
