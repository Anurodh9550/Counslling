"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* 🔵 TOP BAR */}
      <div className="bg-teal-500 text-white text-sm px-10 py-2 flex justify-between">
        <div className="flex gap-4">
          <span>📘</span>
          <span>📷</span>
          <span>▶️</span>
        </div>

        <div className="flex gap-6">
          <Link href="#">JOIN OUR SEMINAR</Link>
          <Link href="#">APPLY ONLINE</Link>
          <Link href="#">BLOG</Link>
          <Link href="#">FAQS</Link>
        </div>
      </div>

      {/* 🔴 HEADER */}
      <div className="flex items-center justify-between px-10 py-4 shadow">

        {/* LOGO */}
       

        {/* CONTACT */}
        <div className="hidden md:flex gap-10 items-center text-sm">
          <p>Email: info@bookmyuniversity.com</p>
          <p>Call: 1800-270-8009</p>
        </div>

        {/* LOGIN */}
        <button className="border px-4 py-2 rounded-md hover:bg-gray-100">
          Student Login ▶
        </button>
      </div>

      {/* 🟢 NAVBAR */}
      
      {/* 🔥 HERO IMAGE */}
      <div className="relative h-[300px]">
        <Image
          src="/images/Batumi.jpg"
          alt="hero"
          fill
          className="object-cover"
        />
      </div>

      {/* 🔥 TITLE */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">
          WHAT IS YOUR PREFERRED AREA OF STUDY?
        </h1>
      </div>

      {/* 🔥 CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 pb-20">

        {[
          "Engineering",
          "Medical",
          "Business",
          "Law",
          "Commerce",
          "IT",
          "Arts",
          "Aviation",
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-4xl mb-3">🎓</div>
            <p className="font-medium">{item}</p>
          </div>
        ))}

      </div>
{/* 🔥 STUDY AREA SECTION */}
<div className="px-10 pb-20">

  <h1 className="text-3xl font-bold text-center mb-10">
    WHAT IS YOUR PREFERRED AREA OF STUDY?
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

    {[
      { name: "Medical", icon: "🧑‍⚕️" },
      { name: "Engineering", icon: "🛠️" },
      { name: "Business and Management", icon: "👔" },
      { name: "Architecture", icon: "🏗️" },
      { name: "Commerce", icon: "🛒" },
      { name: "Aviation", icon: "✈️" },
      { name: "Hotel Management", icon: "🏨" },
      { name: "Humanities", icon: "🎨" },
      { name: "Journalism & Media", icon: "🎤" },
      { name: "Law", icon: "⚖️" },
      { name: "Languages & Teaching", icon: "📚" },
      { name: "Arts and Design", icon: "🖌️" },
      { name: "Social Sciences", icon: "🌍" },
      { name: "Agriculture", icon: "🌱" },
      { name: "Computer Science & IT", icon: "💻" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white  rounded-lg p-6 text-center 
        shadow-md hover:shadow-2xl 
        hover:-translate-y-2 hover:scale-105 
        transition-all duration-300 ease-in-out 
        cursor-pointer"
      >
        <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
          {item.icon}
        </div>
        <p className="text-sm font-medium">{item.name}</p>
      </div>
    ))}

  </div>

</div>      
    </div>
  );
}