import React, { useEffect, memo } from "react";
import { Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../assets/images/heart.jpg"; // Hình gốc

// Header Component
const Header = memo(() => (
  <div className="text-center lg:mb-6 mb-3 px-[5%]">
    <h2
      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00A7E1] drop-shadow-lg"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      Dịch Vụ Từ Trái Tim ❤️
    </h2>
    <p
      className="mt-2 text-gray-300 text-sm sm:text-base flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-4 h-4 text-[#00A7E1]" />
      Chuyên chăm sóc - Vệ sinh máy lọc
      <Sparkles className="w-4 h-4 text-[#00A7E1]" />
    </p>
  </div>
));

// Profile Image Component - Hình nhỏ lại nhưng vẫn full nội dung
const ProfileImage = memo(() => (
  <div className="w-full flex justify-center items-center">
    <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px]">
      <img
        src={image}
        alt="Dịch vụ chăm sóc"
        className="w-full h-auto object-contain rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
    </div>
  </div>
));

// About Page Component
const AboutPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div
      className="h-auto pb-16 text-white overflow-hidden bg-[#00052c]"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-6 px-10 sm:pt-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 lg:gap-5 items-center">
          {/* Content Section */}
          <div
            className="space-y-4 text-left bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/20"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed">
              <div className="grid grid-cols-1 gap-3">
                <span className="flex items-center gap-2 p-3 rounded-lg bg-[#ffffff18] hover:bg-[#ffffff30] transition-all duration-300">
                  🔹 Máy mới 100% – Nguyên seal, chuẩn Hàn Quốc 🇰🇷
                </span>
                <span className="flex items-center gap-2 p-3 rounded-lg bg-[#ffffff18] hover:bg-[#ffffff30] transition-all duration-300">
                  🔹 Miễn phí gói dịch vụ Heart Service trong suốt thời gian
                  thuê
                </span>
                <span className="flex items-center gap-2 p-3 rounded-lg bg-[#ffffff18] hover:bg-[#ffffff30] transition-all duration-300">
                  🔹 Miễn phí thay lõi lọc/ màng lọc (theo chu kỳ thay lõi)
                </span>
                <span className="flex items-center gap-2 p-3 rounded-lg bg-[#ffffff18] hover:bg-[#ffffff30] transition-all duration-300">
                  🔹 Miễn phí khảo sát & lắp đặt tận nơi – Nhanh chóng, tiện
                  lợi!
                </span>
                <span className="flex items-center gap-2 p-3 rounded-lg bg-[#ffffff18] hover:bg-[#ffffff30] transition-all duration-300">
                  🔹 Thiết bị chăm sóc máy lọc đảm bảo vệ sinh và an toàn
                </span>
                <span className="flex items-center gap-2 p-3 rounded-lg bg-[#ffffff18] hover:bg-[#ffffff30] transition-all duration-300">
                  🔹 Công nghệ thông minh – Tiết kiệm điện, cảm biến ánh sáng
                </span>
                <span className="flex items-center gap-2 p-3 rounded-lg bg-[#ffffff18] hover:bg-[#ffffff30] transition-all duration-300">
                  🔹 Không cần đặt cọc – Chỉ thanh toán 1 tháng, sử dụng ngay!
                </span>
                <span className="flex items-center gap-2 p-3 rounded-lg bg-[#ffffff18] hover:bg-[#ffffff30] transition-all duration-300">
                  🔹 Trải nghiệm máy mới cao cấp mà không cần đầu tư lớn ban
                  đầu!
                </span>
              </div>
            </h2>
          </div>

          {/* Profile Image Section */}
          <ProfileImage />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);
