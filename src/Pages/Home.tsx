import React, { useState, useEffect, useCallback, memo } from "react";
// import { Sparkles } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowDown } from "lucide-react";

// Memoized Components
// const StatusBadge = memo(() => (
//   <div
//     className="inline-block animate-float  lg:mx-0"
//     data-aos="zoom-in"
//     data-aos-delay="400"
//   >
//     <div className="relative group">
//       <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A7E1] to-white rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
//       <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
//         <span className="bg-gradient-to-r from-[#00A7E1] to-white text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
//           <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-[#00A7E1]" />
//           Sẵn sàng khám phá nào
//         </span>
//       </div>
//     </div>
//   </div>
// ));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#00A7E1] to-white blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-[#00A7E1] to-white bg-clip-text text-transparent">
          Chúng mình
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#00A7E1] to-white blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#00A7E1] to-white bg-clip-text text-transparent">
          là Vicky
        </span>
      </span>
    </h1>
  </div>
));

// const SocialLink = memo(({ icon: Icon, link }) => (
//   <a href={link} target="_blank" rel="noopener noreferrer">
//     <button className="group relative p-3">
//       <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
//       <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
//         <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
//       </div>
//     </button>
//   </a>
// ));

// Constants
const TYPING_SPEED = 10;
const ERASING_SPEED = 10;
const PAUSE_DURATION = 1000;
const WORDS = [
  "Nhóm sinh viên trải nghiệm thực chiến ",
  "Professional Selling event",
];
// const SOCIAL_LINKS = [
//   { icon: Github, link: "https://github.com/EkiZR" },
//   { icon: Linkedin, link: "https://www.linkedin.com/in/ekizr/" },
//   { icon: Instagram, link: "https://www.instagram.com/ekizr_/?hl=id" },
// ];
const Home: React.FC = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Optimize AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener("resize", initAOS);
    return () => window.removeEventListener("resize", initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  // Lottie configuration
  const lottieOptions = {
    src: "https://lottie.host/bbd979da-84dc-46da-9515-0a917377a96e/L6eZR2Dzy4.lottie", // Thay bằng URL của animation mới
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: true,
    },
    style: { width: "100%", height: "100%" },
    className: `w-full h-full transition-all duration-500 ${
      isHovering
        ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
        : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
    }`,
  };

  return (
    <div
      className={`min-h-screen bg-[#00052c] px-5 sm:px-10 pt-20 sm:pt-32 md:pt-40 lg:pt-30 xl:pt-56 overflow-hidden 
        transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      id="Home"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 sm:gap-16 md:gap-20 lg:gap-24">
        {/* ✅ Left Column - Nội dung */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 order-2 lg:order-1">
          <MainTitle />

          {/* 🖋️ Typing Effect */}
          <div className="h-8 flex justify-center lg:justify-start items-center">
            <span className="text-lg sm:text-xl md:text-2xl text-gray-400 animate-pulse">
              {text}
            </span>
            <span className="w-[3px] h-6 bg-gradient-to-t from-[#00A7E1] to-white ml-1 animate-blink"></span>
          </div>

          {/* 📌 Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Với sự kiện lần này chúng mình đồng hành cùng thương hiệu COWAY -
            Máy lọc nước, máy lọc không khí số 1 Hàn Quốc.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Mỗi người đều xứng đáng tận hưởng một không gian sống trong lành và
            tiện nghi! COWAY sử dụng công nghệ bộ lọc tiên tiến, cam kết với
            tiêu chí “Hơn cả một sản phẩm, đó là sự chăm sóc dành riêng cho
            bạn!"
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Chỉ từ{" "}
            <span className="text-[#00A7E1] font-medium">
              360.000 đồng/tháng
            </span>
            , bạn đã có thể sở hữu ngay một giải pháp chăm sóc sức khỏe toàn
            diện cho không gian sống.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Hãy cùng Vicky khám phá và nhận ngay những ưu đãi độc quyền.
            <span className="inline-flex items-center ml-2 text-[#00A7E1] animate-bounce">
              <ArrowDown className="w-4 h-4" />
            </span>
          </p>
        </div>

        {/* 🎬 Right Column - Lottie Animation */}
        <div
          className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 mt-10 sm:mt-16 md:mt-0"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative w-[250px] sm:w-[300px] md:w-[400px] lg:w-[600px] xl:w-[700px]">
            <DotLottieReact {...lottieOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
