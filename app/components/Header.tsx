"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("HOME");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    "HOME",
    "COURSES",
    "ABOUT US",
    "FIND UNIVERSITY",
    "COUNTRIES",
    "COMMUNITY",
    "EVENTS",
    "CONTACT US",
  ];

  // ✅ COURSES LIST
  const courses = [
    { name: "Medical", icon: "🩺" },
    { name: "Engineering", icon: "⚙️" },
    { name: "Business Management", icon: "💼" },
    { name: "Architecture", icon: "🏗️" },
    { name: "Commerce", icon: "📊" },
  ];

  // ✅ COURSE LINKS
  const getCourseLink = (course: string) => {
    if (course === "Medical") return "/medical";
    if (course === "Engineering") return "/courses/engineering";
    
    if (course === "Architecture") return "/courses/architecture";
    if (course === "Commerce") return "/courses/commerce";
    if (course === "Business Management") return "/courses/business";
    return "#";
  };

  const countries = [
    { name: "Russia", flag: "https://flagcdn.com/w40/ru.png" },
    { name: "Georgia", flag: "https://flagcdn.com/w40/ge.png" },
    { name: "Kazakhstan", flag: "https://flagcdn.com/w40/kz.png" },
    { name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
    { name: "Italy", flag: "https://flagcdn.com/w40/it.png" },
    { name: "Poland", flag: "https://flagcdn.com/w40/pl.png" },
    { name: "Nepal", flag: "https://flagcdn.com/w40/np.png" },
  ];

  const baseClass = "px-3 py-1.5 text-sm rounded transition";
  const activeClass = "bg-teal-600 text-white";
  const inactiveClass = "text-gray-700 hover:text-teal-600";

  const getLink = (item: string) => {
    if (item === "HOME") return "/";
    if (item === "FIND UNIVERSITY") return "/find-university";
    if (item === "CONTACT US") return "/contact";
    if (item === "ABOUT US") return "/about";
    
    return null;
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-8 
    bg-white/70 backdrop-blur-md shadow-sm 
    sticky top-0 z-50 border-b border-white/20">

      {/* LOGO */}
      <Link href="/">
        <Image
          src="/images/logo55.png"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer"
        />
      </Link>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex gap-2 font-medium relative">
        {menuItems.map((item) => {
          const link = getLink(item);

          return (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => {
                if (item === "COURSES") setShowDropdown(true);
                if (item === "COUNTRIES") setShowCountryDropdown(true);
              }}
              onMouseLeave={() => {
                if (item === "COURSES") setShowDropdown(false);
                if (item === "COUNTRIES") setShowCountryDropdown(false);
              }}
            >
              {link ? (
                <Link href={link}>
                  <button
                    onClick={() => setActive(item)}
                    className={`${baseClass} ${active === item ? activeClass : inactiveClass
                      }`}
                  >
                    {item}
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => setActive(item)}
                  className={`${baseClass} ${active === item ? activeClass : inactiveClass
                    }`}
                >
                  {item}
                </button>
              )}

              {/* ✅ COURSES DROPDOWN */}
              {item === "COURSES" && showDropdown && (
                <div className="absolute top-full left-0  w-64 
bg-white/95 backdrop-blur-xl 
shadow-2xl rounded-xl border border-gray-100 
z-50 overflow-hidden animate-fadeIn">
                  {courses.map((c, i) => (
                    <Link key={i} href={getCourseLink(c.name)}>
                      <div
                        className="flex items-center gap-3 px-5 py-3 
      hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 
      hover:text-white transition duration-300 cursor-pointer group"
                      >
                        <span>{c.icon}</span>
                        <span>{c.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* COUNTRIES DROPDOWN */}
              {item === "COUNTRIES" && showCountryDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 
                w-[90vw] md:w-[700px] bg-white shadow-xl rounded-xl p-6 z-50 
                max-h-[60vh] overflow-y-auto">

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {countries.map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full overflow-hidden border">
                          <Image
                            src={c.flag}
                            alt={c.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm">{c.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-6">
                    <button className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white">
                      Explore More
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden ml-auto">
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-2xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* LOGIN */}
      <Link href="/register">
        <button className="hidden md:block bg-teal-600 text-white px-4 py-1.5 text-sm rounded">
          Login
        </button>
      </Link>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col gap-3 md:hidden">
          {menuItems.map((item) => {
            const link = getLink(item);

            return link ? (
              <Link key={item} href={link}>
                <div
                  onClick={() => setMobileMenu(false)}
                  className="py-2 border-b cursor-pointer"
                >
                  {item}
                </div>
              </Link>
            ) : (
              <div
                key={item}
                onClick={() => setMobileMenu(false)}
                className="py-2 border-b cursor-pointer"
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}