"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  const countries = [
    { name: "Russia", flag: "https://flagcdn.com/w40/ru.png" },
    { name: "Georgia", flag: "https://flagcdn.com/w40/ge.png" },
    { name: "Kazakhstan", flag: "https://flagcdn.com/w40/kz.png" },
    { name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
    { name: "Italy", flag: "https://flagcdn.com/w40/it.png" },
    { name: "Poland", flag: "https://flagcdn.com/w40/pl.png" },
    { name: "Nepal", flag: "https://flagcdn.com/w40/np.png" },
  ];

  return (
    <footer className="bg-gradient-to-r from-teal-500 to-teal-400 text-white pt-16 pb-10 px-6 md:px-10">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* COUNTRIES */}
        <div>
          <h3 className="font-semibold mb-4">BEST COUNTRIES TO STUDY ABROAD</h3>

          <ul className="space-y-3 text-sm">
            {countries.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-3 hover:translate-x-1 transition cursor-pointer"
              >
                {/* FLAG */}
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                  <Image
                    src={c.flag}
                    alt={c.name}
                    width={20}
                    height={20}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span>Study in {c.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">

  <li>
    <Link href="/about">
      <span className="cursor-pointer hover:underline hover:text-gray-200 transition">
        About us
      </span>
    </Link>
  </li>

  <li>
    <Link href="/contact">
      <span className="cursor-pointer hover:underline hover:text-gray-200 transition">
        Contact us
      </span>
    </Link>
  </li>

  <li className="cursor-pointer hover:underline hover:text-gray-200 transition">
    Blog
  </li>

  <li className="cursor-pointer hover:underline hover:text-gray-200 transition">
    How it works
  </li>

  <li className="cursor-pointer hover:underline hover:text-gray-200 transition">
    Gallery
  </li>

</ul>
        </div>

        {/* IMPORTANT */}
        <div>
          <h3 className="font-semibold mb-4">IMPORTANT INFORMATION</h3>
          <ul className="space-y-2 text-sm">
            <li>Find a University</li>
            <li>Screening Exam</li>
            <li>PLAB</li>
            <li>USMLE</li>
            <li>MBBS Abroad</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-4">BMU SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Career Counselling</li>
            <li>Visa Assistance</li>
            <li>Air Ticket Assistance</li>
            <li>Apply Now</li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/30 my-10"></div>

      {/* BOTTOM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* LOGO */}
        <div className="flex flex-col items-center md:items-start">
          <Image src="/images/logo55.png" alt="logo" width={100} height={100} />
          <p className="text-sm mt-2">BOOK MY UNIVERSITY</p>
        </div>

        {/* APP */}
        <div className="text-center">
          <p className="font-semibold">DOWNLOAD BMG APP NOW</p>
          <p className="mt-2">ANDROID</p>
          <Image
            src="/images/playstore.png"
            alt="playstore"
            width={150}
            height={50}
            className="mx-auto mt-2"
          />
        </div>

        {/* CONTACT */}
        <div className="text-center md:text-right">
          <p>CALL</p>
          <p className="font-semibold">9560616699</p>
          <p className="mt-2">MAIL</p>
          <p className="font-semibold">supportbookmyglobal@gmail.com</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm mt-10">
        2026 Book My Global Admission Services. All rights reserved
      </div>

    </footer>
  );
}