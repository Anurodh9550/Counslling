"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative min-h-screen flex items-center justify-center">

      {/* 🔥 BACKGROUND */}
      <Image
        src="/images/bg-university.jpg"
        alt="bg"
        fill
        className="object-cover"
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* 🔥 CARD */}
      <div className="relative z-10 w-[90%] max-w-4xl bg-white shadow-xl rounded-md overflow-hidden">

        {/* HEADER */}
        <div className="bg-teal-500 text-white text-center py-3 text-lg font-semibold">
          {isLogin ? "LOGIN" : "REGISTER NOW"}
        </div>

        {/* FORM */}
        <div className="p-6">

          {isLogin ? (
            /* 🔐 LOGIN FORM */
            <div className="space-y-4">

              <div className="flex gap-2">
                <select className="border px-3 py-2 rounded">
                  <option>India (+91)</option>
                </select>

                <input
                  type="text"
                  placeholder="10 DIGITS MOBILE NUMBER"
                  className="border px-4 py-2 rounded w-full"
                />
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded">
                LOGIN
              </button>

              <div className="flex justify-between text-sm text-gray-600">
                <span className="cursor-pointer">❓ Forgot password</span>

                <span
                  onClick={() => setIsLogin(false)}
                  className="text-blue-500 cursor-pointer"
                >
                  Register here
                </span>
              </div>

            </div>
          ) : (
            /* 📝 REGISTER FORM */
            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="FIRST NAME"
                className="border px-4 py-2 rounded"
              />

              <input
                type="text"
                placeholder="LAST NAME"
                className="border px-4 py-2 rounded"
              />

              <select className="border px-4 py-2 rounded">
                <option>India (+91)</option>
              </select>

              <input
                type="text"
                placeholder="10 DIGITS MOBILE NUMBER"
                className="border px-4 py-2 rounded"
              />

              <input
                type="email"
                placeholder="EMAIL"
                className="border px-4 py-2 rounded"
              />

              <select className="border px-4 py-2 rounded">
                <option>--Select State--</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>

              <div className="col-span-2">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
                  REGISTER
                </button>
              </div>

              <div className="col-span-2 flex justify-between text-sm text-gray-600">
                <span>❓ Forgot password</span>

                <span
                  onClick={() => setIsLogin(true)}
                  className="text-blue-500 cursor-pointer"
                >
                  Already Register ? Login here
                </span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}