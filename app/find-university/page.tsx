"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, FadeItem, LiftCard } from "../components/motion-ui";

export default function FindUniversityPage() {
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
    <div className="min-h-screen min-w-0 bg-app-bg">
      <div className="relative h-[200px] w-full overflow-hidden shadow-lg sm:h-[260px]">
        <Image
          src="/images/Batumi.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 flex items-end bg-gradient-to-t from-black/55 to-transparent"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-8">
          <FadeUp hero>
            <p className="text-xs font-medium uppercase tracking-wide text-white/90">
              University directory
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
              Find a university by area of study
            </h1>
          </FadeUp>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="text-sm text-text-muted">
            Select a discipline to explore programmes. Contact details are in
            the site header for counselling support.
          </p>
        </FadeUp>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {courses.map((item, i) => (
            <FadeItem key={item.name} index={i}>
              <Link href={getCourseLink(item.name)}>
                <LiftCard
                  className="shadow-card shadow-card-hover rounded-xl border border-[var(--border)] p-4 text-center sm:p-5"
                  style={{ backgroundColor: "var(--surface)" }}
                >
                  <motion.div
                    className="mb-2 text-3xl sm:mb-3 sm:text-4xl"
                    aria-hidden
                    whileHover={{ scale: 1.12, rotate: [0, -4, 4, 0] }}
                    transition={{ duration: 0.35 }}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="text-xs font-medium leading-snug text-text-heading sm:text-sm">
                    {item.name}
                  </p>
                </LiftCard>
              </Link>
            </FadeItem>
          ))}
        </div>
      </div>
    </div>
  );
}
