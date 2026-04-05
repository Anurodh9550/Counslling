"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
      <Image
        src="/images/bg-university.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--overlay-scrim)" }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", damping: 26, stiffness: 280 }}
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-xl border shadow-2xl"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="py-3 text-center text-base font-semibold text-[var(--accent-foreground)]"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {isLogin ? "Login" : "Register"}
        </div>

        <div className="p-6 sm:p-8">
          {isLogin ? (
            <div className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <select className="form-input-official sm:max-w-[160px]">
                  <option>India (+91)</option>
                </select>
                <input
                  type="text"
                  placeholder="Mobile number (10 digits)"
                  className="form-input-official flex-1"
                  inputMode="numeric"
                  autoComplete="tel"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-md py-2.5 text-sm font-semibold text-[var(--accent-foreground)] transition hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Login
              </button>

              <div className="flex flex-col justify-between gap-2 text-sm text-text-muted sm:flex-row sm:items-center">
                <button type="button" className="text-left hover:text-text-heading">
                  Forgot password
                </button>
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-left font-medium text-[var(--accent)] hover:underline sm:text-right"
                >
                  New user? Register
                </button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="First name"
                className="form-input-official"
                autoComplete="given-name"
              />
              <input
                type="text"
                placeholder="Last name"
                className="form-input-official"
                autoComplete="family-name"
              />
              <select className="form-input-official">
                <option>India (+91)</option>
              </select>
              <input
                type="text"
                placeholder="Mobile number"
                className="form-input-official"
                inputMode="numeric"
                autoComplete="tel"
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input-official md:col-span-2"
                autoComplete="email"
              />
              <select className="form-input-official md:col-span-2">
                <option>Select state</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>

              <div className="md:col-span-2">
                <button
                  type="button"
                  className="rounded-md px-6 py-2.5 text-sm font-semibold text-[var(--accent-foreground)] transition hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Register
                </button>
              </div>

              <div className="flex flex-col justify-between gap-2 text-sm text-text-muted md:col-span-2 sm:flex-row sm:items-center">
                <span>Forgot password? Use login flow.</span>
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="font-medium text-[var(--accent)] hover:underline"
                >
                  Already registered? Login
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
