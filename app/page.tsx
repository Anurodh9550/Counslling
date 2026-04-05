"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, LiftCard, FadeItem } from "./components/motion-ui";

const HERO_IMAGES = [
  "/images/01.png",
  "/images/02.png",
  "/images/03.png",
  "/images/06.png",
  "/images/newbackground.jpg",
] as const;

const ORBIT_RADIUS_PX = 232;

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [current, setCurrent] = useState(0);
  const [start, setStart] = useState(false);

  const sectionRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);

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

  const Counter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let startValue = 0;
      const duration = 1000;
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "Admission",
      angle: 0,
      icon: "📍",
      dotVar: "var(--step-admission)",
      desc: "Ensuring proper documentation to secure you seat",
    },
    {
      title: "Visa",
      angle: 40,
      icon: "📄",
      dotVar: "var(--step-visa)",
      desc: "Adhering to embassy guidelines for successful visa stamping",
    },
    {
      title: "Fly",
      angle: 80,
      icon: "🧑‍✈️",
      dotVar: "var(--step-fly)",
      desc: "Assistance to fly economically",
    },
    {
      title: "Airport Pick up",
      angle: 120,
      icon: "🤝",
      dotVar: "var(--step-airport)",
      desc: "We arrange someone to welcome you at airport",
    },
    {
      title: "Accommodation",
      angle: 160,
      icon: "🏠",
      dotVar: "var(--step-accommodation)",
      desc: "Booking your stay in govt/private hostel",
    },
    {
      title: "Registration",
      angle: 200,
      icon: "👤",
      dotVar: "var(--step-registration)",
      desc: "Our reps will help you in college and other registration",
    },
    {
      title: "Study",
      angle: 240,
      icon: "🏫",
      dotVar: "var(--step-study)",
      desc: "We wish you best for your future.",
    },
    {
      title: "Introduce",
      angle: 280,
      icon: "🌐",
      dotVar: "var(--step-introduce)",
      desc: "We introduce you to all the universities in the world which provide the course you desire",
    },
    {
      title: "Advice",
      angle: 320,
      icon: "✈️",
      dotVar: "var(--step-advice)",
      desc: "We advise you the best university according to your profile",
    },
  ];

  return (
    <div className="bg-app-bg text-text-body min-w-0">
      {/* HERO */}
      <section className="relative min-h-[min(72vh,560px)] md:h-[650px] md:min-h-0 overflow-hidden">
        <div className="absolute inset-0">
          {HERO_IMAGES.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt=""
              fill
              priority={i === 0}
              className={`object-cover transition-all duration-[5000ms] ease-in-out ${
                i === current
                  ? "opacity-100 scale-110 blur-[1px]"
                  : "opacity-0 scale-100"
              }`}
            />
          ))}
        </div>

        <div className="hero-overlay absolute inset-0" aria-hidden />

        <div className="relative z-10 flex min-h-[min(72vh,560px)] md:h-full items-center px-4 pb-28 pt-8 sm:px-8 sm:pb-20 md:px-16 md:pb-0 lg:px-20">
          <FadeUp
            hero
            className="max-w-xl text-[var(--text-on-dark)]"
          >
            <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Build Your <br />
              <span style={{ color: "var(--hero-accent)" }}>
                Global Career
              </span>
            </h1>

            <p className="mt-4 text-base text-[var(--text-on-dark-muted)] sm:text-lg">
              Study abroad with top universities. Explore courses, apply easily
              and shape your future.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <button
                type="button"
                className="rounded border border-transparent bg-[var(--accent)] px-6 py-3 text-[var(--accent-foreground)] transition hover:opacity-90"
              >
                Explore Courses
              </button>

              <button
                type="button"
                className="rounded border px-6 py-3 transition"
                style={{
                  borderColor: "var(--btn-secondary-border)",
                  color: "var(--text-on-dark)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--btn-secondary-hover-bg)";
                  e.currentTarget.style.color =
                    "var(--btn-secondary-hover-text)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--text-on-dark)";
                }}
              >
                Learn More
              </button>
            </div>

            <div className="mt-8 flex w-full max-w-lg flex-col overflow-hidden rounded-md border border-[var(--border)] shadow-xl sm:flex-row">
              <select
                className="px-4 py-3 text-sm outline-none sm:w-auto sm:min-w-[140px]"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-foreground)",
                }}
              >
                <option>Destination</option>
                <option>Russia</option>
                <option>Georgia</option>
              </select>

              <input
                type="search"
                placeholder="Search Universities..."
                className="min-h-[48px] flex-1 px-4 py-3 text-sm outline-none sm:min-h-0"
                style={{
                  backgroundColor: "var(--input-bg)",
                  color: "var(--text-heading)",
                }}
              />

              <button
                type="button"
                className="px-5 py-3 text-[var(--accent-foreground)] sm:px-6"
                style={{ backgroundColor: "var(--accent)" }}
                aria-label="Search"
              >
                🔍
              </button>
            </div>
          </FadeUp>
        </div>

        {/* Desktop counselling tab */}
        <motion.button
          type="button"
          onClick={() => setShowPopup(true)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 origin-right rotate-[-90deg] rounded-t-xl px-4 py-3 text-sm font-semibold tracking-wide text-[var(--accent-foreground)] shadow-lg transition hover:opacity-90 md:block"
          style={{ backgroundColor: "var(--accent)" }}
        >
          GET FREE COUNSELLING
        </motion.button>

        {/* Mobile / small tablet CTA */}
        <motion.button
          type="button"
          onClick={() => setShowPopup(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="fixed bottom-4 left-1/2 z-40 w-[min(calc(100vw-2rem),380px)] -translate-x-1/2 rounded-md px-4 py-3 text-center text-sm font-semibold text-[var(--accent-foreground)] shadow-lg transition hover:opacity-90 md:hidden"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Get free counselling
        </motion.button>

        <motion.button
          type="button"
          onClick={() =>
            setCurrent((prev) =>
              prev === 0 ? HERO_IMAGES.length - 1 : prev - 1
            )
          }
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full p-2.5 text-white shadow-lg transition sm:left-4 sm:p-3 md:left-5"
          style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
          aria-label="Previous slide"
        >
          ◀
        </motion.button>

        <motion.button
          type="button"
          onClick={() =>
            setCurrent((prev) => (prev + 1) % HERO_IMAGES.length)
          }
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full p-2.5 text-white shadow-lg transition sm:right-4 sm:p-3 md:right-5"
          style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
          aria-label="Next slide"
        >
          ▶
        </motion.button>
      </section>

      {/* STATS */}
      <section className="bg-surface-muted py-12 text-center shadow-inner sm:py-16">
        <FadeUp className="px-4">
          <h2 className="text-2xl font-semibold text-text-heading sm:text-3xl md:text-4xl">
            WE ARE THE WORLD&apos;S LARGEST UNIVERSITY CATALOG
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Discover university pages with information on study programs and
            tuition fees in just 60 seconds, for free!
          </p>
        </FadeUp>

        <div
          ref={sectionRef}
          className="mt-10 grid grid-cols-2 gap-6 px-4 sm:mt-12 sm:gap-8 sm:px-8 md:grid-cols-4 md:px-10"
        >
          <FadeItem index={0} className="flex flex-col items-center">
            <span className="text-3xl font-bold text-text-heading sm:text-4xl">
              <Counter target={10} />+
            </span>
            <p className="mt-2 text-xs text-text-muted sm:text-sm">
              Years Industry Experience
            </p>
          </FadeItem>

          <FadeItem index={1} className="flex flex-col items-center border-[var(--border)] md:border-l md:pl-4">
            <span className="text-3xl font-bold text-text-heading sm:text-4xl">
              <Counter target={10} />+
            </span>
            <p className="mt-2 text-xs text-text-muted sm:text-sm">
              Branches in India
            </p>
          </FadeItem>

          <FadeItem index={2} className="flex flex-col items-center border-[var(--border)] md:border-l md:pl-4">
            <span className="text-3xl font-bold text-text-heading sm:text-4xl">
              <Counter target={2000} />+
            </span>
            <p className="mt-2 text-xs text-text-muted sm:text-sm">
              Applications Processed
            </p>
          </FadeItem>

          <FadeItem index={3} className="flex flex-col items-center border-[var(--border)] md:border-l md:pl-4">
            <span className="text-3xl font-bold text-text-heading sm:text-4xl">
              <Counter target={229} />+
            </span>
            <p className="mt-2 text-xs text-text-muted sm:text-sm">
              Top Universities
            </p>
          </FadeItem>
        </div>
      </section>

      {/* POPULAR DISCIPLINES */}
      <section className="discipline-band py-12 text-[var(--text-on-dark)] shadow-lg sm:py-16">
        <FadeUp className="px-4 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            POPULAR DISCIPLINES
          </h2>
        </FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-6 px-4 sm:mt-12 sm:grid-cols-2 sm:gap-8 sm:px-8 md:grid-cols-3 md:px-10">
          {[
            {
              title: "Medical",
              img: "/images/07.png",
              desc: "Explore MBBS and healthcare programs worldwide.",
            },
            {
              title: "Engineering",
              img: "/images/engineering22.jpg",
              desc: "Top engineering universities across the globe.",
            },
            {
              title: "Business",
              img: "/images/management23.jpg",
              desc: "Study management and MBA programs abroad.",
            },
          ].map((card) => (
            <LiftCard
              key={card.title}
              className="shadow-card shadow-card-hover overflow-hidden rounded-xl border"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="relative h-48 sm:h-52">
                <Image
                  src={card.img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-text-heading">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{card.desc}</p>
              </div>
            </LiftCard>
          ))}
        </div>
      </section>

      {/* MOST POPULAR COURSES */}
      <section className="bg-app-bg py-12 sm:py-16">
        <FadeUp className="px-4 text-center">
          <h2 className="text-2xl font-bold text-text-heading sm:text-3xl md:text-4xl">
            Most Popular Courses
          </h2>
        </FadeUp>

        <div className="mt-8 grid grid-cols-1 gap-6 px-4 sm:mt-10 sm:grid-cols-2 sm:gap-8 sm:px-8 md:grid-cols-3 md:px-10">
          {[
            { title: "Medical", img: "/images/medical.jpg" },
            { title: "Engineering", img: "/images/engineering2.jpg" },
            { title: "Management", img: "/images/management.jpg" },
          ].map((item) => (
            <LiftCard
              key={item.title}
              className="shadow-card shadow-card-hover overflow-hidden rounded-xl border transition hover:border-[var(--border-strong)]"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="relative h-44 sm:h-48">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="py-3 text-center text-sm font-medium text-text-heading"
                style={{ backgroundColor: "var(--surface-muted)" }}
              >
                {item.title}
              </div>
            </LiftCard>
          ))}
        </div>
      </section>

      {/* TOP UNIVERSITIES */}
      <section
        className="py-12 shadow-inner sm:py-16"
        style={{ backgroundColor: "var(--surface)" }}
      >
        <FadeUp className="px-4 text-center">
          <h2 className="text-xl font-semibold text-text-heading sm:text-2xl md:text-3xl">
            TOP RANKING UNIVERSITIES
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-24 rounded"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </FadeUp>

        <div className="mt-8 grid grid-cols-1 gap-6 px-4 sm:mt-10 sm:grid-cols-2 sm:gap-8 sm:px-8 md:grid-cols-3 md:px-10">
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
          ].map((item) => (
            <LiftCard
              key={item.name}
              className="shadow-card shadow-card-hover cursor-pointer overflow-hidden rounded-xl border transition hover:border-[var(--border-strong)]"
              style={{
                backgroundColor: "var(--surface-elevated)",
                borderColor: "var(--border)",
              }}
            >
              <div className="relative h-48 sm:h-52">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="rounded-t-xl object-cover"
                />
              </div>
              <div className="flex items-center gap-2 px-4 py-3">
                <p className="text-sm font-medium text-text-body">{item.name}</p>
              </div>
            </LiftCard>
          ))}
        </div>
      </section>

      {/* Process — mobile / tablet list */}
      <section className="bg-surface-muted py-12 lg:hidden">
        <FadeUp className="mb-8 px-4 text-center">
          <h2 className="text-2xl font-semibold text-text-heading">
            Your journey with us
          </h2>
        </FadeUp>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 px-4 sm:grid-cols-2">
          {steps.map((item, si) => (
            <FadeItem
              key={item.title}
              index={si}
              className="flex gap-3 rounded-xl border p-4 shadow-card"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg text-white"
                style={{ backgroundColor: item.dotVar }}
              >
                {item.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-text-heading">{item.title}</h3>
                <p className="mt-1 text-sm leading-snug text-text-muted">
                  {item.desc}
                </p>
              </div>
            </FadeItem>
          ))}
        </div>
      </section>

      {/* Process — desktop orbit */}
      <div className="hidden justify-center bg-surface-muted py-20 lg:flex">
        <div className="relative h-[min(90vw,550px)] w-[min(90vw,550px)]">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/logo55.png"
              alt=""
              width={460}
              height={460}
              className="h-auto w-[min(72%,460px)] object-contain"
            />
          </div>

          {steps.map((item, i) => {
            const radius = ORBIT_RADIUS_PX;
            const angleRad = (item.angle * Math.PI) / 180;
            const x = radius * Math.cos(angleRad);
            const y = radius * Math.sin(angleRad);

            return (
              <div
                key={i}
                className="absolute w-36 text-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-lg text-white shadow-lg xl:h-16 xl:w-16"
                    style={{ backgroundColor: item.dotVar }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="mt-2 font-semibold text-text-heading xl:mt-3">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-tight text-text-muted xl:text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            key="counselling-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-3"
            style={{ backgroundColor: "var(--overlay-scrim)" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="counselling-title"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              key="counselling-modal"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="shadow-card relative max-h-[90vh] w-full max-w-[420px] overflow-y-auto rounded-xl border border-[var(--border)] shadow-2xl sm:max-w-[450px]"
              style={{ backgroundColor: "var(--surface)" }}
              onClick={(e) => e.stopPropagation()}
            >
            <div className="popup-header flex items-center justify-between px-4 py-3 text-[var(--accent-foreground)] sm:px-6 sm:py-4">
              <h2
                id="counselling-title"
                className="text-base font-semibold tracking-wide sm:text-lg"
              >
                Get Free Counselling
              </h2>
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="text-xl transition hover:opacity-80 sm:text-2xl"
                aria-label="Close"
              >
                ✖
              </button>
            </div>

            <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)] sm:px-4 sm:text-base"
                style={{
                  borderColor: "var(--input-border)",
                  backgroundColor: "var(--input-bg)",
                  color: "var(--text-heading)",
                }}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)] sm:px-4 sm:text-base"
                style={{
                  borderColor: "var(--input-border)",
                  backgroundColor: "var(--input-bg)",
                  color: "var(--text-heading)",
                }}
              />

              <div className="flex gap-2">
                <select
                  className="w-[35%] rounded-lg border px-2 py-2.5 text-sm sm:px-3"
                  style={{
                    borderColor: "var(--input-border)",
                    backgroundColor: "var(--input-bg)",
                    color: "var(--text-heading)",
                  }}
                >
                  <option>+91</option>
                  <option>+1</option>
                </select>

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)] sm:px-4 sm:text-base"
                  style={{
                    borderColor: "var(--input-border)",
                    backgroundColor: "var(--input-bg)",
                    color: "var(--text-heading)",
                  }}
                />
              </div>

              <select
                className="w-full rounded-lg border px-3 py-2.5 text-sm sm:px-4 sm:text-base"
                style={{
                  borderColor: "var(--input-border)",
                  backgroundColor: "var(--input-bg)",
                  color: "var(--text-heading)",
                }}
              >
                <option>Select State</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>

              <div
                className="flex items-center justify-between rounded-lg border px-3 py-2"
                style={{
                  backgroundColor: "var(--surface-muted)",
                  borderColor: "var(--border)",
                }}
              >
                <span className="text-xs font-medium text-text-muted sm:text-sm">
                  1 + 2 = ?
                </span>
                <input
                  type="text"
                  className="w-16 rounded border px-2 py-1 text-sm sm:w-20"
                  style={{
                    borderColor: "var(--input-border)",
                    backgroundColor: "var(--input-bg)",
                    color: "var(--text-heading)",
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => alert("Form Submitted")}
                className="popup-submit w-full rounded-lg py-2.5 text-sm font-semibold text-white transition hover:opacity-95 sm:py-3 sm:text-base"
              >
                ENQUIRE NOW
              </button>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
