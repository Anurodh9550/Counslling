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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="absolute left-0 top-full flex w-full flex-col gap-3 border-t p-4 shadow-xl md:hidden"
            style={{
              backgroundColor: "var(--surface-elevated)",
              borderColor: "var(--border)",
            }}
          >
            {menuItems.map((item) => {
              const link = getLink(item);

              return link ? (
                <Link key={item} href={link}>
                  <div
                    onClick={() => setMobileMenu(false)}
                    className="cursor-pointer border-b py-2 text-[var(--text-heading)] border-[var(--border)]"
                  >
                    {item}
                  </div>
                </Link>
              ) : (
                <div
                  key={item}
                  onClick={() => setMobileMenu(false)}
                  className="cursor-pointer border-b py-2 text-[var(--text-heading)] border-[var(--border)]"
                >
                  {item}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}