import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    image: "https://via.placeholder.com/150",
    price: "100,000 VND",
    description: "Mô tả sản phẩm 1",
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    image: "https://via.placeholder.com/150",
    price: "200,000 VND",
    description: "Mô tả sản phẩm 2",
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    image: "https://via.placeholder.com/150",
    price: "300,000 VND",
    description: "Mô tả sản phẩm 3",
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    image: "https://via.placeholder.com/150",
    price: "400,000 VND",
    description: "Mô tả sản phẩm 4",
  },
  {
    id: 5,
    name: "Sản phẩm 5",
    image: "https://via.placeholder.com/150",
    price: "500,000 VND",
    description: "Mô tả sản phẩm 5",
  },
];

const ProductCarousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleProducts = 5;

  const nextProduct = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const getVisibleProducts = () => {
    return [...products, ...products].slice(
      startIndex,
      startIndex + visibleProducts
    );
  };

  return (
    <section
      id="Product"
      className="min-h-screen flex flex-col items-center justify-center pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] sm-mt-0 bg-[#030014]"
    >
      <h1 className="relative inline-block mt-2 text-4xl font-bold mb-8 md:text-2xl sm:text-xl">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Sản phẩm
        </span>
      </h1>
      <div className="relative w-full flex items-center">
        <button
          onClick={prevProduct}
          className="absolute left-0 z-10 p-3 bg-white/20 hover:bg-white/40 rounded-full"
        >
          <ChevronLeft size={32} className="text-white" />
        </button>
        <div className="flex overflow-hidden w-full justify-center space-x-6 px-4">
          {getVisibleProducts().map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col items-center p-4 transition-all duration-300 rounded-lg shadow-lg transform ${
                index === Math.floor(visibleProducts / 2)
                  ? "scale-125 bg-white text-black z-20"
                  : "bg-gray-700 text-white opacity-50 scale-90 z-10"
              }`}
              style={{ minWidth: "200px", maxWidth: "300px", height: "350px" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <p className="mt-2 text-lg font-semibold">{product.name}</p>
              <p className="mt-1 text-sm">{product.description}</p>
              <p className="mt-1 text-md font-bold">{product.price}</p>
            </div>
          ))}
        </div>
        <button
          onClick={nextProduct}
          className="absolute right-0 z-10 p-3 bg-white/20 hover:bg-white/40 rounded-full"
        >
          <ChevronRight size={32} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
