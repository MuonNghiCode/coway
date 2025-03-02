import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Share2, User, Mail, Send, Phone } from "lucide-react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  productType: string;
  contactReason: string;
}

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const onSubmit = async (data: FormData, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault(); // Ngăn chặn hành động mặc định của form

    setIsSubmitting(true);

    Swal.fire({
      title: "Đang gửi tin nhắn...",
      html: "Vui lòng chờ trong khi chúng tôi gửi tin nhắn của bạn",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // Log the form data to the console
    console.log("Form data:", data);

    // Kiểm tra giá trị của form trước khi submit
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.productType ||
      !data.contactReason
    ) {
      Swal.fire({
        title: "Lỗi!",
        text: "Vui lòng điền đầy đủ thông tin trước khi gửi.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
      setIsSubmitting(false);
      return;
    }

    // Nếu dữ liệu hợp lệ, submit form
    const form = document.getElementById("contactForm") as HTMLFormElement;
    form.submit();

    Swal.fire({
      title: "Thành công!",
      text: "Tin nhắn của bạn đã được gửi thành công!",
      icon: "success",
      confirmButtonColor: "#6366f1",
      timer: 2000,
      timerProgressBar: true,
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] sm-mt-0 bg-[#00052c]">
        <div className="text-center lg:mt-[5%] mb-2 sm:px-0 px-[5%]">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00A7E1]"
          >
            <span
              style={{
                color: "#ffffff",
                backgroundImage:
                  "linear-gradient(45deg, #ffffff 10%, #00A7E1 93%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Liên Hệ
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1100"
            className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
          >
            Điền thông tin để chúng mình hỗ trợ bạn nhanh nhất nhé!
          </p>
        </div>

        <div
          className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0"
          id="Contact"
        >
          <div className="container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 gap-12">
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00A7E1] to-white">
                    Liên Lạc
                  </h2>
                  <p className="text-gray-400">
                    Khách hàng nếu có nhu cầu hãy điền thông tin để chúng mình
                    hỗ trợ tư vấn nhanh nhất nhé!
                  </p>
                </div>
                <Share2 className="w-10 h-10 text-[#00A7E1] opacity-50" />
              </div>

              <form
                id="contactForm"
                action="https://formsubmit.co/ngocphuong070404@gmail.com"
                method="POST"
                onSubmit={handleSubmit((data, e) => onSubmit(data, e))}
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="relative group"
                >
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#00A7E1] transition-colors" />
                  <input
                    type="text"
                    {...register("name", {
                      required: "Tên của bạn là bắt buộc",
                      minLength: {
                        value: 6,
                        message: "Tên phải có ít nhất 6 ký tự",
                      },
                    })}
                    placeholder="Tên của bạn"
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#00A7E1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="relative group"
                >
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#00A7E1] transition-colors" />
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email của bạn là bắt buộc",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Email không hợp lệ",
                      },
                    })}
                    placeholder="Email của bạn"
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#00A7E1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="relative group"
                >
                  <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#00A7E1] transition-colors" />
                  <input
                    type="tel"
                    {...register("phone", {
                      required: "Số điện thoại của bạn là bắt buộc",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Số điện thoại không hợp lệ",
                      },
                    })}
                    placeholder="Số điện thoại của bạn"
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#00A7E1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="relative group"
                >
                  <p className="text-gray-400 mb-2">Loại sản phẩm:</p>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("productType", {
                          required: "Loại sản phẩm là bắt buộc",
                        })}
                        value="Máy lọc không khí"
                        disabled={isSubmitting}
                        className="hidden"
                      />
                      <div
                        className={`p-4 border rounded-xl cursor-pointer ${
                          watch("productType") === "Máy lọc không khí"
                            ? "border-[#00A7E1] bg-[#00A7E1]/10"
                            : "border-gray-400"
                        }`}
                      >
                        <span className="text-white">Máy lọc không khí</span>
                      </div>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("productType", {
                          required: "Loại sản phẩm là bắt buộc",
                        })}
                        value="Máy lọc nước"
                        disabled={isSubmitting}
                        className="hidden"
                      />
                      <div
                        className={`p-4 border rounded-xl cursor-pointer ${
                          watch("productType") === "Máy lọc nước"
                            ? "border-[#00A7E1] bg-[#00A7E1]/10"
                            : "border-gray-400"
                        }`}
                      >
                        <span className="text-white">Máy lọc nước</span>
                      </div>
                    </label>
                  </div>
                  {errors.productType && (
                    <p className="text-red-500">{errors.productType.message}</p>
                  )}
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="relative group"
                >
                  <p className="text-gray-400 mb-2">Lựa chọn của bạn:</p>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("contactReason", {
                          required: "Lựa chọn của bạn là bắt buộc",
                        })}
                        value="Thuê"
                        disabled={isSubmitting}
                        className="hidden"
                      />
                      <div
                        className={`p-4 border rounded-xl cursor-pointer ${
                          watch("contactReason") === "Thuê"
                            ? "border-[#00A7E1] bg-[#00A7E1]/10"
                            : "border-gray-400"
                        }`}
                      >
                        <span className="text-white">Thuê</span>
                      </div>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...register("contactReason", {
                          required: "Lựa chọn của bạn là bắt buộc",
                        })}
                        value="Mua"
                        disabled={isSubmitting}
                        className="hidden"
                      />
                      <div
                        className={`p-4 border rounded-xl cursor-pointer ${
                          watch("contactReason") === "Mua"
                            ? "border-[#00A7E1] bg-[#00A7E1]/10"
                            : "border-gray-400"
                        }`}
                      >
                        <span className="text-white">Mua</span>
                      </div>
                    </label>
                  </div>
                  {errors.contactReason && (
                    <p className="text-red-500">
                      {errors.contactReason.message}
                    </p>
                  )}
                </div>
                <button
                  data-aos="fade-up"
                  data-aos-delay="600"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00A7E1]/60 to-[#00A7E1] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00A7E1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
