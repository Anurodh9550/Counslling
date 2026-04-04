"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const courses = [
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
  ];
  const getCourseLink = (name: string) => {
  if (name === "Medical") return "/medical";
  if (name === "Engineering") return "/courses/engineering";
  if (name === "Business and Management") return "/courses/business";
  if (name === "Architecture") return "/courses/architecture";
  if (name === "Commerce") return "/courses/commerce";
  if (name === "Aviation") return "/courses/aviation";
  if (name === "Hotel Management") return "/courses/hotel";
  if (name === "Humanities") return "/courses/humanities";
  if (name === "Journalism & Media") return "/courses/media";
  if (name === "Law") return "/courses/law";
  if (name === "Languages & Teaching") return "/courses/language";
  if (name === "Arts and Design") return "/courses/arts";
  if (name === "Social Sciences") return "/courses/social";
  if (name === "Agriculture") return "/courses/agriculture";
  if (name === "Computer Science & IT") return "/courses/it";
  return "#";
};
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
          <p>Email:supportbookmyglobal@gmail.com</p>
          <p>Call: 9560616699 </p>
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


      {/* 🔥 CARDS */}

      {/* 🔥 STUDY AREA SECTION */}
      <div className="px-10 pb-20 mt-6">

        <h1 className="text-3xl font-bold text-center mb-10">
          WHAT IS YOUR PREFERRED AREA OF STUDY?
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          

  {courses.map((item, i) => (
    
    <Link key={i} href={getCourseLink(item.name)}>

      <div
        className="bg-white rounded-lg p-6 text-center 
        shadow-md hover:shadow-2xl 
        hover:-translate-y-2 hover:scale-105 
        transition-all duration-300 ease-in-out 
        cursor-pointer group"
      >
        <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
          {item.icon}
        </div>

        <p className="text-sm font-medium">
          {item.name}
        </p>
      </div>

    </Link>
  ))}

</div>

        </div>


      </div>
    
  );
}