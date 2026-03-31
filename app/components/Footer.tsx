"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-teal-400 text-white pt-16 pb-10 px-10">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* COUNTRIES */}
        <div>
          <h3 className="font-semibold mb-4">BEST COUNTRIES TO STUDY ABROAD</h3>
          <ul className="space-y-2 text-sm">
            <li>Study in Armenia</li>
            <li>Study in Bangladesh</li>
            <li>Study in Belarus</li>
            <li>Study in China</li>
            <li>Study in Croatia</li>
            <li>Study in Germany</li>
            <li>Study in Italy</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Contact us</li>
            <li>Blog</li>
            <li>How it works</li>
            <li>Gallery</li>
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
          <p className="font-semibold">DOWNLOAD BMU APP NOW</p>
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
          <p className="font-semibold">1800-270-8009</p>
          <p className="mt-2">MAIL</p>
          <p className="font-semibold">info@bookmyuniversity.com</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm mt-10">
        © 2025 Book My University. All rights reserved
      </div>

    </footer>
  );
}