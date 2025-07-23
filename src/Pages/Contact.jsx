import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const form = e.target;
      await form.submit();

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#6366f1",
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="Contact" className="flex items-center justify-center min-h-screen px-4 py-16">
      <div className="max-w-4xl w-full p-6 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl space-y-8">
        <div className="text-center space-y-4">
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          >
            Contact Me
          </h2>
          <p data-aos="fade-up" className="text-slate-400">
            Got a question? Send me a message, and I'll get back to you soon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch relative">
          <form action="n/a" method="POST" onSubmit={handleSubmit} className="space-y-6 bg-white/5 rounded-2xl p-6 shadow-lg">
            <div data-aos="fade-up" className="relative group">
              <User className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white focus:ring-2 focus:ring-[#6366f1]/30"
                required
              />
            </div>
            <div data-aos="fade-up" className="relative group">
              <Mail className="absolute left-4 top-4 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white focus:ring-2 focus:ring-[#6366f1]/30"
                required
              />
            </div>
            <div data-aos="fade-up" className="relative group">
              <MessageSquare className="absolute left-4 top-4 text-gray-400" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-white h-[9.9rem] focus:ring-2 focus:ring-[#6366f1]/30"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 transition-all duration-300"
            >
              <Send className="inline w-5 h-5 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Divider */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#6366f1]/30 via-white/20 to-[#a855f7]/30" style={{height: '100%'}} />
          <div className="block md:hidden w-full h-px my-6 bg-gradient-to-r from-[#6366f1]/30 via-white/20 to-[#a855f7]/30" />

          <div data-aos="fade-left" className="flex items-center">
            <div className="w-full">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4 text-center md:text-left">Connect With Me</h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
