"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [current, setCurrent] = useState(0);
  const [start, setStart] = useState(false);

  const sectionRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // 1 second baad popup open

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const Counter = ({ target }: any) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let startValue = 0;
      const duration = 2000;
      const increment = target / (duration / 50);

      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(startValue));
        }
      }, 50);

      return () => clearInterval(timer);
    }, [start, target]);

    return <span>{count}</span>;
  };
  const images = [
    "/images/01.png",
    "/images/02.png",
    "/images/03.png",
    "/images/06.png",
    "/images/newbackground.jpg"
  ];



  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { title: "Admission", angle: 0, icon: "📍", color: "bg-pink-500", desc: "Ensuring proper documentation to secure you seat" },

    { title: "Visa", angle: 40, icon: "📄", color: "bg-red-500", desc: "Adhering to embassy guidelines for successful visa stamping" },

    { title: "Fly", angle: 80, icon: "🧑‍✈️", color: "bg-red-400", desc: "Assistance to fly economically" },

    { title: "Airport Pick up", angle: 120, icon: "🤝", color: "bg-orange-500", desc: "We arrange someone to welcome you at airport" },

    { title: "Accommodation", angle: 160, icon: "🏠", color: "bg-green-500", desc: "Booking your stay in govt/private hostel" },

    { title: "Registration", angle: 200, icon: "👤", color: "bg-cyan-500", desc: "Our reps will help you in college and other registration" },

    { title: "Study", angle: 240, icon: "🏫", color: "bg-yellow-500", desc: "We wish you best for your future." },

    { title: "Introduce", angle: 280, icon: "🌐", color: "bg-blue-500", desc: "We introduce you to all the universities in the world which provide the course you desire" },

    { title: "Advice", angle: 320, icon: "✈️", color: "bg-teal-500", desc: "We advise you the best university according to your profile" },
  ];

  return (
    <div className="bg-gray-100">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[650px] overflow-hidden">

        {/* 🔥 SLIDER WITH ZOOM */}
        <div className="absolute inset-0">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="background"
              fill
              priority
              className={`
          object-cover transition-all duration-[5000ms] ease-in-out
          ${i === current
                  ? "opacity-100 scale-110 blur-[1px]"
                  : "opacity-0 scale-100"}
        `}
            />
          ))}
        </div>

        {/* 🔥 GRADIENT OVERLAY (CLASSIC LOOK) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

        {/* 🔥 CONTENT LEFT SIDE (OFFICE STYLE) */}
        <div className="relative z-10 h-full flex items-center px-10 md:px-20">

          <div className="max-w-xl text-white">

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build Your <br />
              <span className="text-teal-400">Global Career</span>
            </h1>

            <p className="mt-4 text-gray-300 text-lg">
              Study abroad with top universities. Explore courses, apply easily and shape your future.
            </p>

            {/* 🔥 BUTTONS */}
            <div className="mt-6 flex gap-4">
              <button className="bg-teal-600 px-6 py-3 rounded-md hover:bg-teal-700 transition">
                Explore Courses
              </button>

              <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                Learn More
              </button>

              <button
                onClick={() => setShowPopup(true)}
                className="fixed right-5 top-1/2 -translate-y-1/2 z-50 
  bg-gradient-to-b from-teal-500 to-teal-700 
  text-white px-4 py-3 
  rotate-[-90deg] origin-right 
  rounded-t-xl shadow-xl tracking-wide text-sm font-semibold
  hover:scale-105 transition"
              >
                GET FREE COUNSELLING
              </button>
            </div>

            {/* 🔍 SEARCH BAR */}
            <div className="mt-8 flex w-full max-w-lg shadow-xl rounded-md overflow-hidden">

              <select className="px-4 py-3 bg-teal-600 text-white outline-none">
                <option>Destination</option>
                <option>Russia</option>
                <option>Georgia</option>
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
        </div>

        {/* 🔥 LEFT BUTTON */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition"
        >
          ◀
        </button>

        {/* 🔥 RIGHT BUTTON */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev + 1) % images.length)
          }
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition"
        >
          ▶
        </button>

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
        <div ref={sectionRef} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 px-10">

          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-gray-800">
              <Counter target={10} />+
            </span>
            <p className="text-gray-600 mt-2 text-sm">Years Industry Experience</p>
          </div>

          <div className="flex flex-col items-center md:border-l border-gray-300">
            <span className="text-4xl font-bold text-gray-800">
              <Counter target={10} />+
            </span>
            <p className="text-gray-600 mt-2 text-sm">Branches in India</p>
          </div>

          <div className="flex flex-col items-center md:border-l border-gray-300">
            <span className="text-4xl font-bold text-gray-800">
              <Counter target={2000} />+
            </span>
            <p className="text-gray-600 mt-2 text-sm">Applications Processed</p>
          </div>

          <div className="flex flex-col items-center md:border-l border-gray-300">
            <span className="text-4xl font-bold text-gray-800">
              <Counter target={229} />+
            </span>
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
              <Image src="/images/07.png" alt="course" fill className="object-cover" />
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
              img: "/images/Tbilisi.jpg",
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
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

          {/* BOX */}
          <div className="bg-white w-[90%] md:w-[450px] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden relative">

            {/* HEADER */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-4 flex justify-between items-center">
              <h2 className="font-semibold text-lg tracking-wide">
                Get Free Counselling
              </h2>
              <button
                onClick={() => setShowPopup(false)}
                className="text-xl hover:rotate-90 transition duration-300"
              >
                ✖
              </button>
            </div>

            {/* FORM */}
            <div className="p-6 space-y-4">

              {/* NAME */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />

              {/* MOBILE */}
              <div className="flex gap-2">
                <select className="border border-gray-300 px-3 py-2.5 rounded-lg w-[35%]">
                  <option>+91</option>
                  <option>+1</option>
                </select>

                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* STATE */}
              <select className="w-full border border-gray-300 px-4 py-2.5 rounded-lg">
                <option>Select State</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>

              {/* CAPTCHA */}
              <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg border">
                <span className="text-sm font-medium text-gray-600">1 + 2 = ?</span>
                <input
                  type="text"
                  className="border px-2 py-1 rounded w-20"
                />
              </div>

              {/* BUTTON */}
              <button
                onClick={() => alert("Form Submitted 🚀")}
                className="w-full bg-gradient-to-r from-blue-900 to-blue-700 
          text-white py-3 rounded-lg font-semibold 
          hover:scale-[1.02] hover:shadow-lg transition duration-300"
              >
                ENQUIRE NOW
              </button>

            </div>
          </div>
        </div>
      )}


    </div>
  );
}