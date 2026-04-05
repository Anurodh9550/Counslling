"use client";

import { FadeUp } from "../components/motion-ui";
import Sidebar from "./Sidebar";
import UniversityCard from "./UniversityCard";

export default function MedicalPage() {
  const universities = [
    {
      name: "Chuvash State University",
      country: "Russia",
      course: ["MBBS"],
      location: "—",
      duration: "6 years",
    },
    {
      name: "Tambov State University",
      country: "Russia",
      course: ["MBBS"],
      location: "Tambov, Russia",
      duration: "6 years",
    },
    {
      name: "North-Western State Medical University",
      country: "Russia",
      course: ["MBBS", "MD"],
      location: "Saint Petersburg, Russia",
      duration: "6 years",
    },
    {
      name: "European University",
      country: "Georgia",
      course: ["MBBS"],
      location: "Tbilisi, Georgia",
      duration: "6 years",
    },
    {
      name: "Kazan State Medical University",
      country: "Russia",
      course: ["MBBS"],
      location: "Kazan, Russia",
      duration: "6 years",
    },
  ];

  return (
    <div className="min-h-screen min-w-0 bg-app-bg p-4 md:p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-4">
        <Sidebar />

        <div className="space-y-5 md:col-span-3">
          <FadeUp>
            <header className="border-b pb-4 shadow-sm border-[var(--border)]">
              <h1 className="text-xl font-semibold text-text-heading sm:text-2xl">
                Medical universities
              </h1>
              <p className="mt-1 text-sm text-text-muted">
                Curated list of institutions. Filter using the panel on the left.
              </p>
            </header>
          </FadeUp>

          {universities.map((uni, i) => (
            <UniversityCard key={`${uni.name}-${i}`} uni={uni} />
          ))}
        </div>
      </div>
    </div>
  );
}
