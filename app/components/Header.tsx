"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [active, setActive] = useState("HOME");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);
   const [openCountry, setOpenCountry] = useState(false);

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
  const activeClass = "bg-[var(--accent)] text-[var(--accent-foreground)]";
  const inactiveClass =
    "text-[var(--text-body)] hover:text-[var(--accent)]";

  const getLink = (item: string) => {
    if (item === "HOME") return "/";
    if (item === "FIND UNIVERSITY") return "/find-university";
    if (item === "CONTACT US") return "/contact";
    if (item === "ABOUT US") return "/about";
    
    return null;
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 shadow-md md:px-8 sticky top-0"
      style={{
        backgroundColor: "var(--header-bg)",
        borderColor: "var(--header-border)",
      }}
    >

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
      <nav className="hidden md:flex flex-1 justify-center gap-1 lg:gap-2 font-medium relative min-w-0">
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
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="absolute top-full left-0 z-50 w-64 overflow-hidden rounded-lg border shadow-xl"
                  style={{
                    backgroundColor: "var(--surface-elevated)",
                    borderColor: "var(--border)",
                  }}
                >
                  {courses.map((c, i) => (
                    <Link key={i} href={getCourseLink(c.name)}>
                      <div
                        className="flex items-center gap-3 px-5 py-3
      hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]
      transition duration-300 cursor-pointer group"
                      >
                        <span>{c.icon}</span>
                        <span>{c.name}</span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}

              {/* COUNTRIES DROPDOWN */}
              {item === "COUNTRIES" && showCountryDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="absolute top-full left-1/2 z-50 max-h-[60vh] w-[90vw] -translate-x-1/2 overflow-y-auto rounded-lg border p-6 shadow-xl md:w-[700px]"
                  style={{
                    backgroundColor: "var(--surface-elevated)",
                    borderColor: "var(--border)",
                  }}
                >

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {countries.map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-[var(--surface-muted)]"
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
                        <span className="text-sm text-[var(--text-body)]">
                          {c.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      type="button"
                      className="border border-[var(--accent)] px-5 py-2 rounded-full text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition"
                    >
                      Explore More
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="flex items-center gap-2 md:ml-0 ml-auto">
        <ThemeToggle />
        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-2xl text-[var(--text-heading)]"
            aria-expanded={mobileMenu}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* LOGIN */}
        <Link href="/register" className="hidden md:block">
          <button
            type="button"
            className="bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-1.5 text-sm rounded hover:opacity-90 transition"
          >
            Login
          </button>
        </Link>
      </div>

      <AnimatePresence>
  {mobileMenu && (
    <div className="fixed inset-0 z-[60] md:hidden">
      
      {/* OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setMobileMenu(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* SIDEBAR */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="absolute left-0 top-0 h-full w-[280px] bg-[var(--surface-elevated)] shadow-xl flex flex-col overflow-y-auto"
      >
        
        {/* HEADER */}
        <div className="flex justify-between items-center p-4 border-b border-[var(--border)]">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setMobileMenu(false)}>✕</button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col">

          {/* HOME */}
          <Link href="/" onClick={() => setMobileMenu(false)}>
            <div className="px-4 py-3 border-b">HOME</div>
          </Link>

          {/* COURSES */}
          <div
            onClick={() => setOpenCourse(!openCourse)}
            className="px-4 py-3 border-b flex justify-between items-center cursor-pointer"
          >
            COURSES
            <span>{openCourse ? "▲" : "▼"}</span>
          </div>

          {openCourse && (
            <div className="bg-[var(--surface-muted)]">
              {courses.map((c, i) => (
                <Link key={i} href={getCourseLink(c.name)}>
                  <div
                    onClick={() => setMobileMenu(false)}
                    className="px-8 py-2 border-b text-sm flex gap-2"
                  >
                    <span>{c.icon}</span>
                    {c.name}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* COUNTRIES */}
          <div
            onClick={() => setOpenCountry(!openCountry)}
            className="px-4 py-3 border-b flex justify-between items-center cursor-pointer"
          >
            COUNTRIES
            <span>{openCountry ? "▲" : "▼"}</span>
          </div>

          {openCountry && (
            <div className="bg-[var(--surface-muted)]">
              {countries.map((c, i) => (
                <div
                  key={i}
                  className="px-8 py-2 border-b text-sm flex items-center gap-2"
                >
                  <img src={c.flag} className="w-5 h-5 rounded-full" />
                  {c.name}
                </div>
              ))}
            </div>
          )}

          {/* OTHER MENU ITEMS */}
          {menuItems
            .filter(
              (item) =>
                item !== "HOME" &&
                item !== "COURSES" &&
                item !== "COUNTRIES"
            )
            .map((item) => {
              const link = getLink(item);

              return link ? (
                <Link key={item} href={link}>
                  <div
                    onClick={() => setMobileMenu(false)}
                    className="px-4 py-3 border-b"
                  >
                    {item}
                  </div>
                </Link>
              ) : (
                <div key={item} className="px-4 py-3 border-b">
                  {item}
                </div>
              );
            })}
        </div>

      </motion.div>
    </div>
  )}
</AnimatePresence>
    </motion.header>
  );
}