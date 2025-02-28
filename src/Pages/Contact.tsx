import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, Phone } from "lucide-react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement;
  }

  const handleSubmit = async (e: HandleSubmitEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Đang gửi tin nhắn...",
      html: "Vui lòng chờ trong khi chúng tôi gửi tin nhắn của bạn",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Get form data
      const form = e.target;

      // Submit form
      await form.submit();

      // Show success message
      Swal.fire({
        title: "Thành công!",
        text: "Tin nhắn của bạn đã được gửi thành công!",
        icon: "success",
        confirmButtonColor: "#6366f1",
        timer: 2000,
        timerProgressBar: true,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: "Lỗi!",
        text: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] sm-mt-0 bg-[#030014]">
        <div className="text-center lg:mt-[5%] mb-2 sm:px-0 px-[5%]">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          >
            <span
              style={{
                color: "#6366f1",
                backgroundImage:
                  "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
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
            Có câu hỏi? Gửi tin nhắn cho tôi, tôi sẽ phản hồi sớm.
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
                  <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                    Liên Lạc
                  </h2>
                  <p className="text-gray-400">
                    Có điều gì muốn thảo luận? Gửi tin nhắn cho tôi và chúng ta
                    sẽ nói chuyện.
                  </p>
                </div>
                <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
              </div>

              <form
                action="https://formsubmit.co/minhquanpm1610@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
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
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Tên của bạn"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                    required
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="relative group"
                >
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email của bạn"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                    required
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="relative group"
                >
                  <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Số điện thoại của bạn"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                    required
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="relative group"
                >
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <textarea
                    name="message"
                    placeholder="Tin nhắn của bạn"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
                    required
                  />
                </div>
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
