"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../components/motion-ui";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : false;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you. Your message has been recorded.");
  };

  return (
    <div className="min-h-screen min-w-0 bg-app-bg">
      <header className="page-inner-hero px-4 py-12 text-center shadow-lg sm:py-14">
        <FadeUp hero className="mx-auto max-w-xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-3 text-sm text-[var(--text-on-dark-muted)] sm:text-base">
            Reach our counselling team for admissions, documentation, and
            programme queries.
          </p>
        </FadeUp>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:gap-10 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-2 rounded-xl border p-6 shadow-xl sm:p-8"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <h2 className="text-lg font-semibold text-text-heading sm:text-xl">
            Enquiry form
          </h2>
          <p className="mt-1 text-sm text-text-muted">
            Fields marked with accurate details help us respond faster.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="form-input-official"
                onChange={handleChange}
                autoComplete="given-name"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="form-input-official"
                onChange={handleChange}
                autoComplete="family-name"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="form-input-official"
                onChange={handleChange}
                autoComplete="email"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="form-input-official"
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              className="form-input-official"
              onChange={handleChange}
            />

            <label className="flex items-center gap-2 text-sm text-text-muted">
              <input
                type="checkbox"
                name="agree"
                onChange={handleChange}
                className="h-4 w-4 rounded border-[var(--border)]"
              />
              I agree to be contacted regarding my enquiry.
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full rounded-md py-3 text-sm font-semibold text-[var(--accent-foreground)] shadow-md transition hover:opacity-90 sm:text-base"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Send message
            </motion.button>
          </form>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="h-fit rounded-xl border p-6 shadow-xl"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <h2 className="border-b pb-3 text-lg font-semibold text-text-heading border-[var(--border)]">
            Head office
          </h2>
          <div className="mt-5 space-y-4 text-sm text-text-muted">
            <p>
              <span className="font-medium text-text-heading">Address</span>
              <br />
              Please update your registered office address here.
            </p>
            <p>
              <span className="font-medium text-text-heading">Phone</span>
              <br />
              9560616699
            </p>
            <p>
              <span className="font-medium text-text-heading">Email</span>
              <br />
              supportbookmyglobal@gmail.com
            </p>
          </div>
          <a
            href="mailto:supportbookmyglobal@gmail.com"
            className="mt-6 block w-full rounded-md border py-2.5 text-center text-sm font-semibold transition border-[var(--border)] text-text-heading hover:bg-[var(--surface-muted)]"
          >
            Email the team
          </a>
        </motion.aside>
      </div>
    </div>
  );
}
