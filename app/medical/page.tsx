"use client";

import Sidebar from "./Sidebar";
import UniversityCard from "./UniversityCard";

export default function MedicalPage() {
  const universities = [
    {
      name: "Chuvash State University",
      country: "Russia",
      course: ["MBBS"],
      location: "--",
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
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* LEFT */}
        <Sidebar />

        {/* RIGHT */}
        <div className="md:col-span-3 space-y-6">

          <h1 className="text-2xl font-semibold">
            Top <span className="text-teal-600">Medical</span> Universities (278)
          </h1>

          {universities.map((uni, i) => (
            <UniversityCard key={i} uni={uni} />
          ))}
        </div>
      </div>
    </div>
  );
}