import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "2348127059934"; // International format for 08127059934

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Direct WhatsApp redirect helper
  const openWhatsApp = (customMsg = "") => {
    const defaultMsg = "Hello Law Books! I would like to make an inquiry.";
    const textToSend = customMsg || defaultMsg;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, "_blank");
  };

  // Form submission sends formatted message straight to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `Hello, my name is ${formData.name}.\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    openWhatsApp(formattedMessage);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-24 pb-16">
      {/* Container aligned directly under the Navbar logo */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#0B1F3A] font-bold text-xs uppercase tracking-widest bg-[#0B1F3A]/10 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] mt-3">
            We'd Love to Hear From You
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Have questions about law textbooks, legal resources, or your order? Chat with us directly on WhatsApp or leave us a message below.
          </p>
        </div>

        {/* Highlighted WhatsApp Banner */}
        <div className="bg-[#0B1F3A] text-white rounded-2xl p-6 sm:p-8 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-3xl">
              <FaWhatsapp />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Fastest Response on WhatsApp</h2>
              <p className="text-gray-300 text-sm mt-1">
                Need immediate assistance or book inquiries? Connect with us directly at <span className="font-semibold text-white">08127059934</span>.
              </p>
            </div>
          </div>
          <button
            onClick={() => openWhatsApp()}
            className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </button>
        </div>

        {/* Main Content Grid: Info Cards + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Column: Contact Details Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#0B1F3A]/5 text-[#0B1F3A] rounded-xl text-xl shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</h3>
                <p className="text-[#0B1F3A] font-semibold text-base mt-1">+234 812 705 9934</p>
                <p className="text-gray-500 text-xs mt-1">Mon - Sat: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#0B1F3A]/5 text-[#0B1F3A] rounded-xl text-xl shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Us</h3>
                <p className="text-[#0B1F3A] font-semibold text-base mt-1">almiraofubu@gmail.com</p>
                <p className="text-gray-500 text-xs mt-1">We respond within 24 hours</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#0B1F3A]/5 text-[#0B1F3A] rounded-xl text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Location</h3>
                <p className="text-[#0B1F3A] font-semibold text-base mt-1">Law Bookstore, Nigeria</p>
                <p className="text-gray-500 text-xs mt-1">Nationwide Delivery Available</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form below and it will open directly in WhatsApp with your details pre-filled.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F3A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F3A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Inquiry about Criminal Law Textbook"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F3A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message or book request here..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F3A] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0B1F3A] hover:bg-[#16365f] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <FaPaperPlane className="text-sm" />
                Send via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;