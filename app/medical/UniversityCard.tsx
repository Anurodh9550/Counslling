"use client";

import { motion } from "framer-motion";

type Props = {
  uni: {
    name: string;
    country: string;
    course: string[];
    location: string;
    duration: string;
  };
};

export default function UniversityCard({ uni }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="rounded-xl border p-5 shadow-card shadow-card-hover sm:p-6"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <h2 className="text-lg font-semibold text-[var(--accent)] sm:text-xl">
        {uni.name}
      </h2>

      <dl className="mt-4 space-y-2 text-sm text-text-body">
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-medium text-text-heading">Country</dt>
          <dd>{uni.country}</dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-medium text-text-heading">Study area</dt>
          <dd>Medical</dd>
        </div>
        <div>
          <dt className="font-medium text-text-heading">Courses</dt>
          <dd className="mt-1 flex flex-wrap gap-2">
            {uni.course.map((c) => (
              <span
                key={c}
                className="rounded border px-2 py-0.5 text-xs font-medium border-[var(--border)] bg-[var(--surface-muted)] text-text-heading"
              >
                {c}
              </span>
            ))}
          </dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-medium text-text-heading">Location</dt>
          <dd>{uni.location}</dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-medium text-text-heading">Intakes</dt>
          <dd>—</dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-medium text-text-heading">Annual tuition</dt>
          <dd>—</dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-medium text-text-heading">Duration</dt>
          <dd className="font-medium text-text-heading">{uni.duration}</dd>
        </div>
      </dl>
    </motion.article>
  );
}
