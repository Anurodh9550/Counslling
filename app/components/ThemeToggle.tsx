"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const t = root.getAttribute("data-theme");
    if (t === "dark" || t === "light") setTheme(t);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  };

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-heading)] shadow-md transition hover:bg-[var(--surface-muted)]"
    >
      {theme === "dark" ? (
        <HiOutlineSun className="h-5 w-5" aria-hidden />
      ) : (
        <HiOutlineMoon className="h-5 w-5" aria-hidden />
      )}
    </motion.button>
  );
}
