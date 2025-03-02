import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Product1 from "../assets/images/1.jpg";
import Product2 from "../assets/images/2.jpg";
import Product3 from "../assets/images/3.jpg";
import Product4 from "../assets/images/4.jpg";
import Product5 from "../assets/images/5.jpg";
import Detail1 from "../assets/images/1.1.jpg";
import Detail2 from "../assets/images/2.1.jpg";
import Detail3 from "../assets/images/3.1.jpg";
import Detail4 from "../assets/images/4.1.jpg";
import Detail5 from "../assets/images/5.1.jpg";
import ProductCardDetail from "../Components/ProductCardDetail";

const products = [
  {
    id: 1,
    name: "Máy lọc nước Coway NEO PLUS (CHP-264L)",
    image: Product1,
    price: "495,000 VND",
    description: "Lõi lọc RO cao cấp đem lại nguồn nước sạch, tinh khiết",
    detailImage: Detail1,
    features: [
      "3 chế độ nước: nóng - lạnh - thường, được cung cấp từ bình chứa dung tích 5.8 lít tiện lợi.",
      "Việc lấy nước đơn giản là xoay núm vặn gạt cần, với nút vận chuyển đổi lấy nước lạnh/nước thường tiện lợi.",
      "Chế độ tiết kiệm điện ECO và chế độ bật/tắt nước nóng - lạnh giúp tiết kiệm điện tối ưu.",
      "Khóa trẻ em an toàn cho trẻ nhỏ, tránh khỏi các tai nạn bỏng nước nóng.",
    ],
    specifications: [
      "Công suất lọc: 3.2L/giờ",
      "Dung tích bình chứa: Tổng: 5.8L",
      "Nước thường: 2.5L",
      "Nước nóng: 1L",
      "Nước lạnh: 2.3L",
      "Điện năng tiêu thụ: Tổng: 470W",
      "Nước lạnh: 0.7A",
      "Nước nóng: 380W",
      "Điện áp: 220V/50Hz",
      "Kích thước: 260 × 500 × 505 mm",
      "Trọng lượng: 18 kg",
    ],
  },
  {
    id: 2,
    name: "Máy lọc không khí Coway STORM (AP-1516D)",
    image: Product2,
    price: "630,000 VND",
    description: "Chỉ báo hiện thị chất lượng không khí theo thời gian thực ",
    detailImage: Detail2,
    features: [
      "Đa luồng khí thông minh, vươn xa tới 6 mét giúp làm sạch không khí tối đa, điều chỉnh chiều không gian.",
      "Nhiều chế độ khác nhau cho phép người dùng lựa chọn nhiều chế độ đáp ứng nhu cầu đa dạng.",
      "Chế độ Haze giúp tối đa hóa mức độ lọc khí để tạo ra một không gian trong lành trong thời gian ngắn.",
      "Tính năng hẹn giờ tiện lợi sau 1/4/8 giờ, giúp dễ dàng kiểm soát thời gian hoạt động của máy.",
    ],
    specifications: [
      "Diện tích sử dụng: 49.5m²",
      "Công suất lọc: 8.2m³/phút",
      "Độ ồn tối đa: 44.3 dB",
      "Điện năng: 65 W",
      "Điện áp: 220V240V/50Hz60Hz",
      "Kích thước: 410 x 765 x 240 mm",
      "Trọng lượng: 12 kg",
    ],
  },
  {
    id: 3,
    name: "Máy lọc không khí Coway CLASSIC (AP-1516D)",
    image: Product3,
    price: "450,000 VND",
    description: "Đèn LED hiển thị chất lượng không khí tức thời",
    detailImage: Detail3,
    features: [
      "Cảm biến bụi cảm biến nồng độ bụi trong không khí một cách hiệu quả giúp tăng hiệu suất lọc.",
      "Cảm biến ánh sáng tự động tắt chức năng hiển thị đèn LED khi ánh sáng xung quanh yếu trong vòng 3 phút.",
      "Nút khóa trẻ em an toàn khi được kích hoạt sẽ vô hiệu hóa thay đổi các chế độ lọc, tránh các thao tác vô tình của trẻ nhỏ.",
      "Thiết kế mỏng, nhỏ gọn, dễ dàng di chuyển và phù hợp với mọi không gian.",
    ],
    specifications: [
      "Diện tích sử dụng: 33m²",
      "Công suất lọc: 5.1m³/phút",
      "Độ ồn tối đa: 47.4 dB",
      "Điện năng: 38 W",
      "Điện áp: 220V240V/50Hz60Hz",
      "Kích thước: 376 x 641 x 183 mm",
      "Trọng lượng: 7.25 kg",
    ],
  },
  {
    id: 4,
    name: "Máy lọc nước Coway OMBAK (CHP-7310R)",
    image: Product4,
    price: "720,000 VND",
    description: "Cảm biến ánh sáng giúp tiết kiệm điện tối ưu",
    detailImage: Detail4,
    features: [
      "4 chế độ nước với 50 tùy chọn lấy nước, dễ dàng tùy chỉnh nhiệt độ và lượng nước phù hợp đa dạng nhu cầu.",
      "Đèn UV diệt khuẩn hoạt động khi lấy nước ở vòi nước lạnh/thường, giúp bảo vệ nước và vòi nước luôn sạch khuẩn.",
      "Cảm biến ánh sáng tự động giảm hoạt động của hệ thống làm nóng và làm lạnh vào ban đêm giúp tiết kiệm điện tối ưu.",
      "Khóa trẻ em an toàn cho trẻ nhỏ, tránh khỏi các tai nạn bỏng nước nóng.",
    ],
    specifications: [
      "Công suất lọc: 3.2L/giờ",
      "Dung tích bình chứa: Tổng: 13.5L",
      "Nước thường: 7.8L",
      "Nước nóng: 3.4L",
      "Nước lạnh: 2.3L",
      "Điện năng tiêu thụ: Tổng: 765W",
      "Nước lạnh: 0.6A",
      "Nước nóng: 672W",
      "Điện áp: 220V/50Hz",
      "Kích thước: 340 × 518 × 523 mm",
      "Trọng lượng: 21.9 kg",
    ],
  },
  {
    id: 5,
    name: "Máy lọc nước Coway CINNAMON (P-6320R)",
    image: Product5,
    price: "360,000 VND",
    description: "Dễ dàng vệ sinh sạch sẽ với đầu vòi tháo rời",
    detailImage: Detail5,
    features: [
      "Lấy nước 1 chạm với chế độ lấy tự động 3 mức nước: 250ml, 500ml, 1000ml.",
      "Độ cao tiện lợi, dễ dàng lấy nước với các vật dụng có kích thước cao.",
      "Nhỏ gọn chỉ 20cm, dễ dàng lắp đặt, tinh tế, phù hợp với mọi không gian bếp.",
      "Vòi nước tháo rời, cực kỳ đơn giản, thuận tiện vệ sinh và lau chùi.",
    ],
    specifications: [
      "Công suất lọc: 3.2L/giờ",
      "Dung tích bình chứa: 5L",
      "Điện năng tiêu thụ: 20W",
      "Điện áp: 220V/50Hz",
      "Kích thước: 200 × 400 × 405 mm",
      "Trọng lượng: 6.5 kg",
    ],
  },
];

const ProductCarousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
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
    const endIndex = startIndex + visibleProducts;
    return products
      .slice(startIndex, endIndex)
      .concat(
        endIndex > products.length
          ? products.slice(0, endIndex - products.length)
          : []
      );
  };

  const handleProductClick = (product: any) => {
    console.log("Selected product:", product);
    setSelectedProduct(product);
  };

  return (
    <section
      id="Product"
      className="min-h-screen flex flex-col items-center justify-center pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] sm-mt-0 bg-[#00052c]"
    >
      <h1 className="relative inline-block mt-2 text-4xl font-bold mb-8 md:text-2xl sm:text-xl">
        <span className="relative bg-gradient-to-r from-white to-[#00A7E1] bg-clip-text text-transparent">
          Sản phẩm
        </span>
      </h1>
      <div className="relative w-full flex items-center">
        <button
          onClick={prevProduct}
          className="absolute left-0 z-20 p-3 bg-white/20 hover:bg-white/40 rounded-full"
          style={{ zIndex: 20 }}
        >
          <ChevronLeft size={32} className="text-white" />
        </button>
        <div className="flex overflow-hidden w-full justify-center space-x-6 px-4">
          {getVisibleProducts().map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col items-center p-4 transition-all duration-300 rounded-lg shadow-lg transform ${
                index === Math.floor(visibleProducts / 2)
                  ? "scale-110 bg-white text-black z-20 "
                  : "bg-gray-700 text-white opacity-70"
              } hover:scale-105`}
              style={{ minWidth: "250px", maxWidth: "300px", height: "450px" }}
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-70 object-cover rounded-lg"
              />
              <div className="mt-2 text-center">
                <p className="mt-1 text-lg font-bold text-[#00A7E1]">
                  {product.price}
                </p>
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="mt-1 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextProduct}
          className="absolute right-0 z-20 p-3 bg-white/20 hover:bg-white/40 rounded-full"
          style={{ zIndex: 20 }}
        >
          <ChevronRight size={32} className="text-white" />
        </button>
      </div>
      {selectedProduct && (
        <ProductCardDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductCarousel;
