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
          src="/images/college.jpg"
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
        className="bg-white border rounded-lg p-6 text-center 
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

</div>      <footer className="bg-gradient-to-r from-teal-500 to-teal-400 text-white pt-16 pb-10 px-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* COUNTRIES */}
          <div>
            <h3 className="font-semibold mb-4">BEST COUNTRIES TO STUDY ABROAD</h3>
            <ul className="space-y-2 text-sm">
              <li>Study in Armenia</li>
              <li>Study in Bangladesh</li>
              <li>Study in Belarus</li>
              <li>Study in China</li>
              <li>Study in Croatia</li>
              <li>Study in Germany</li>
              <li>Study in Italy</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Contact us</li>
              <li>Blog</li>
              <li>How it works</li>
              <li>Gallery</li>
            </ul>
          </div>

          {/* IMPORTANT */}
          <div>
            <h3 className="font-semibold mb-4">IMPORTANT INFORMATION</h3>
            <ul className="space-y-2 text-sm">
              <li>Find a University</li>
              <li>Screening Exam</li>
              <li>PLAB</li>
              <li>USMLE</li>
              <li>MBBS Abroad</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-4">BMU SERVICES</h3>
            <ul className="space-y-2 text-sm">
              <li>Career Counselling</li>
              <li>Visa Assistance</li>
              <li>Air Ticket Assistance</li>
              <li>Apply Now</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/30 my-10"></div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* LOGO */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
            <p className="text-sm mt-2">BOOK MY UNIVERSITY</p>
          </div>

          {/* APP */}
          <div className="text-center">
            <p className="font-semibold">DOWNLOAD BMU APP NOW</p>
            <p className="mt-2">ANDROID</p>
            <Image
              src="/images/playstore.png"
              alt="playstore"
              width={150}
              height={50}
              className="mx-auto mt-2"
            />
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-right">
            <p>CALL</p>
            <p className="font-semibold">1800-270-8009</p>
            <p className="mt-2">MAIL</p>
            <p className="font-semibold">info@bookmyuniversity.com</p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm mt-10">
          © 2025 Book My University. All rights reserved
        </div>

      </footer>
    </div>
  );
}