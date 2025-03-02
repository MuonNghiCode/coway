import React from "react";
import { X, CheckCircle, Settings } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  detailImage: string;
  features: string[];
  specifications: string[];
}

const ProductCardDetail: React.FC<{
  product: Product;
  onClose: () => void;
}> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm z-50 px-4">
      <div
        className="relative bg-white p-6 rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row text-gray-900 
                   max-h-[90vh] overflow-y-auto custom-scrollbar"
      >
        {/* Nút đóng modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full p-2 shadow-md hover:scale-110 transition-transform"
        >
          <X className="w-6 h-6 text-gray-800" />
        </button>

        {/* Hình ảnh chi tiết */}
        <div className="w-full md:w-1/2">
          <img
            src={product.detailImage}
            alt={product.name}
            className="w-full max-h-56 md:max-h-full object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          />
        </div>

        {/* Nội dung sản phẩm */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-6 space-y-4">
          {/* Tiêu đề & Giá */}
          <div className="border-b pb-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              {product.name}
            </h2>
            <p className="mt-2 text-lg text-[#00A7E1] font-semibold">
              {product.price}
            </p>
            <p className="mt-2 text-gray-700 text-sm md:text-base">
              {product.description}
            </p>
          </div>

          {/* Tính năng nổi bật */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
              <CheckCircle className="text-green-500 w-6 md:w-7 h-6 md:h-7" />{" "}
              Tính năng nổi bật:
            </h3>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.features.length > 0 ? (
                product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-sm md:text-base"
                  >
                    <CheckCircle className="text-blue-600 w-4 md:w-5 h-4 md:h-5 mr-2" />
                    <p className="text-gray-800">{feature}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Không có thông tin.</p>
              )}
            </div>
          </div>

          {/* Thông số kỹ thuật */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
              <Settings className="text-blue-500 w-6 md:w-7 h-6 md:h-7" /> Thông
              số kỹ thuật:
            </h3>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.specifications.length > 0 ? (
                product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gradient-to-r from-gray-100 to-gray-50 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-sm md:text-base"
                  >
                    <Settings className="text-gray-700 w-4 md:w-5 h-4 md:h-5 mr-2" />
                    <p className="text-gray-800">{spec}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Không có thông tin.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetail;
