"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [current, setCurrent] = useState(0);

  const images = [
    "/images/01.png",
    "/images/02.png",
    "/images/03.png",
    "/images/06.png",
  ];

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { title: "Admission", angle: 0, icon: "📍", color: "bg-pink-500" },
    { title: "Visa", angle: 40, icon: "📄", color: "bg-red-500" },
    { title: "Fly", angle: 80, icon: "🧑‍✈️", color: "bg-red-400" },
    { title: "Airport Pick up", angle: 120, icon: "🤝", color: "bg-orange-500" },
    { title: "Accommodation", angle: 160, icon: "🏠", color: "bg-green-500" },
    { title: "Registration", angle: 200, icon: "👤", color: "bg-cyan-500" },
    { title: "Study", angle: 240, icon: "🏫", color: "bg-yellow-500" },
    { title: "Introduce", angle: 280, icon: "🌐", color: "bg-blue-500" },
    { title: "Advice", angle: 320, icon: "✈️", color: "bg-teal-500" },
  ];

  return (
    <div className="bg-gray-100">

      {/* 🔥 HERO SECTION */}
     <section className="relative h-[600px]  bg-gray-100  overflow-hidden">

        {/* 🔥 SLIDER BACKGROUND */}
        <div className="absolute inset-0">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="background"
              fill
              priority
              className={`object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
        </div>

        {/* 🔥 DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* 🔥 CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-5">

          <h1 className="text-5xl md:text-6xl font-bold">
            FIND YOUR <span className="text-teal-400">FUTURE</span> TODAY
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            The Ultimate Guide to Universities Worldwide
          </p>

          {/* 🔍 SEARCH BAR */}
          <div className="mt-8 flex w-full max-w-3xl shadow-lg rounded-md overflow-hidden">

            <select className="px-4 py-3 bg-teal-600 text-white outline-none">
              <option>Select Destination</option>
              <option>India</option>
              <option>Russia</option>
              <option>UK</option>
            </select>

            <input
              type="text"
              placeholder="Search Universities..."
              className="flex-1 px-4 py-3 text-black outline-none"
            />

            <button className="bg-teal-600 px-6 text-white">
              🔍
            </button>
          </div>
        </div>

        {/* 👉 SIDE BUTTON */}
        <div className="fixed -right-10 top-1/2 -translate-y-1/2 rotate-90 z-50">
          <div
            onClick={() => setShowPopup(true)}
            className="bg-teal-600 text-white px-5 py-2 rounded-t-md cursor-pointer 
shadow-xl hover:shadow-2xl hover:shadow-teal-500/40 
hover:bg-teal-700 hover:scale-105 
transition-all duration-300"
          >
            GET FREE COUNSELLING
          </div>
        </div>
        {/* 👉 WHATSAPP BUTTON */}
        <div className="fixed bottom-5 left-5 bg-green-500 text-white p-4 rounded-full shadow-lg">
          💬
        </div>

      </section>

      {/* 🔥 STATS SECTION */}
      <section className="py-16 bg-gray-100 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          WE ARE THE WORLD’S LARGEST UNIVERSITY CATALOG
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover university pages with information on study programs and tuition fees in just 60 seconds, for free!
        </p>

        {/* STATS GRID */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 px-10">

          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-gray-800">10+</span>
            <p className="text-gray-600 mt-2 text-sm">Years Industry Experience</p>
          </div>

          <div className="flex flex-col items-center md:border-l border-gray-300">
            <span className="text-4xl font-bold text-gray-800">10+</span>
            <p className="text-gray-600 mt-2 text-sm">Branches in India</p>
          </div>

          <div className="flex flex-col items-center md:border-l border-gray-300">
            <span className="text-4xl font-bold text-gray-800">2K+</span>
            <p className="text-gray-600 mt-2 text-sm">Applications Processed</p>
          </div>

          <div className="flex flex-col items-center md:border-l border-gray-300">
            <span className="text-4xl font-bold text-gray-800">229+</span>
            <p className="text-gray-600 mt-2 text-sm">Top Universities</p>
          </div>

        </div>

      </section>



      {/* 🔥 POPULAR DISCIPLINES */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-teal-400">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          POPULAR DISCIPLINES
        </h2>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-52">
              <Image src="/images/01.png" alt="course" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Medical</h3>
              <p className="text-gray-600 text-sm mt-2">Explore MBBS and healthcare programs worldwide.</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-52">
              <Image src="/images/engineering22.jpg" alt="course" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Engineering</h3>
              <p className="text-gray-600 text-sm mt-2">Top engineering universities across the globe.</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-52">
              <Image src="/images/management23.jpg" alt="course" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Business</h3>
              <p className="text-gray-600 text-sm mt-2">Study management and MBA programs abroad.</p>
            </div>
          </div>

        </div>
      </section>
      {/* 🔥 POPULAR DISCIPLINES */}
      <section className="py-16 ">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-black">
          Most Popular Courses
        </h2>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 bg-gray-100 ">

          {/* CARD */}
          {[
            { title: "Medical", img: "/images/medical.jpg" },
            { title: "Engineering", img: "/images/engineering2.jpg" },
            { title: "Management", img: "/images/management.jpg" },


          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 "
            >
              {/* IMAGE */}
              <div className="relative h-48">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <div className="bg-gray-100 text-center py-3 font-medium text-gray-700">
                {item.title}
              </div>
            </div>
          ))}

        </div>
      </section>
      {/* 🔥 MOST POPULAR COURSES */}
      <section className="py-16 bg-white">

        {/* 🔥 TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 ">
          TOP RANKING UNIVERSITIES
        </h2>

        {/* 🔥 LINE */}
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-3 rounded"></div>

        {/* 🔥 GRID */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-10 bg-gray-100 ">

          {/* CARD */}
          {[
            {
              name: "Batumi Shota Rustaveli State University",
              img: "/images/Batumi.jpg",
            },
            {
              name: "European University",
              img: "/images/European.jpg",
            },
            {
              name: "Belarusian State Medical University",
              img: "/images/belarusian.jpg",
            },
            {
              name: "Tbilisi State Medical University",
              img: "/images/tbilisi.jpg",
            },
            {
              name: "Osh International Medical University",
              img: "/images/Osh.png",
            },
            {
              name: "North-Western State Medical University",
              img: "/images/North.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative h-52">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              {/* TEXT */}
              <div className="flex items-center gap-2 px-4 py-3">

                <p className="text-sm text-gray-700 font-medium">
                  {item.name}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
      <div className="flex justify-center items-center py-32 bg-gray-100">
        <div className="relative w-[550px] h-[550px]">

          {/* 🔥 CENTER LOGO */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/logo55.png" // 👈 ye correct hai tumhare code me
              alt="logo"
              width={460}
              height={460}
              className="object-contain"
            />
          </div>

          {/* 🔥 STEPS */}
          {steps.map((item, i) => {
            const radius = 280;
            const angleRad = (item.angle * Math.PI) / 180;

            const x = radius * Math.cos(angleRad);
            const y = radius * Math.sin(angleRad);

            return (
              <div
                key={i}
                className="absolute text-center w-36"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
              >
                {/* 🔵 ICON CIRCLE */}
                <div className={`w-16 h-16 mx-auto rounded-full ${item.color} flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition`}>
                  {item.icon}
                </div>

                {/* 📝 TITLE */}
                <h3 className="mt-3 font-semibold text-gray-800">
                  {item.title}
                </h3>

                {/* 📄 DESC */}
                <p className="text-sm text-gray-500 leading-tight mt-1">
                  Sample description here
                </p>
              </div>
            );
          })}
        </div>
      </div>
{showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          {/* BOX */}
          <div className="bg-white w-[400px] rounded-lg shadow-lg relative">

            {/* HEADER */}
            <div className="bg-teal-600 text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
              <h2 className="font-semibold">Get Free Counselling</h2>
              <button onClick={() => setShowPopup(false)}>✖</button>
            </div>

            {/* FORM */}
            <div className="p-5 space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="w-full border px-3 py-2 rounded"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-2 rounded"
              />

              <input
                type="text"
                placeholder="Mobile"
                className="w-full border px-3 py-2 rounded"
              />

              <select className="w-full border px-3 py-2 rounded">
                <option>Select State</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>

              {/* BUTTON */}
              <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                ENQUIRE NOW
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}