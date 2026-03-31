"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-teal-50 to-gray-200">

      {/* 🔷 HEADER */}
      <div className="py-16 text-center bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 shadow">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          CONTACT US
        </h1>
        <p className="mt-3 text-white/90">
          Let’s help you find the best university 🌍
        </p>
      </div>

      {/* 🔷 MAIN */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* 🟢 FORM */}
        <div className="md:col-span-2 backdrop-blur-md bg-white/70 border border-white/30 rounded-2xl shadow-xl p-8">

          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input-style"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input-style"
                onChange={handleChange}
              />
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input-style"
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input-style"
                onChange={handleChange}
              />
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Write your message..."
              rows={4}
              className="input-style rounded-xl"
              onChange={handleChange}
            ></textarea>

            {/* CHECKBOX */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="agree"
                onChange={handleChange}
              />
              <span>I agree to receive updates</span>
            </div>

            {/* BUTTON */}
            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 transition text-white py-3 rounded-xl font-semibold shadow-lg">
              Send Message 🚀
            </button>

          </form>
        </div>

        {/* 🟢 CONTACT INFO */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl shadow-xl p-8">

          <h2 className="text-xl font-semibold mb-6">Head Office</h2>

          <div className="space-y-5 text-sm">

            <p className="flex gap-2">
              📍 <span>
                74 Link Road, 1st Floor,<br />
                Opposite Metro Pillar No.27,<br />
                Lajpat Nagar III,<br />
                New Delhi-110024
              </span>
            </p>

            <p className="flex gap-2">📞 1800-270-8009</p>
            <p className="flex gap-2">✉️ info@bookmyuniversity.com</p>

          </div>

          {/* EXTRA */}
          <div className="mt-8">
            <button className="w-full bg-white text-teal-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Chat with us 💬
            </button>
          </div>

        </div>
      </div>

      {/* 🔥 INPUT STYLE (Reusable) */}
      <style jsx>{`
        .input-style {
          padding: 12px;
          width: 100%;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          outline: none;
          transition: 0.3s;
        }
        .input-style:focus {
          border-color: #14b8a6;
          box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.2);
        }
      `}</style>

    </div>
  );
}