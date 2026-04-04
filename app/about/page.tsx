"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-gray-100">

            {/* 🔥 HERO SECTION */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-400  text-center">
                <h1 className="text-4xl font-bold text-gray-800">ABOUT US</h1>
                <div className="overflow-hidden w-full">
  <p className="whitespace-nowrap animate-slide text-gray-600 mt-2 text-lg font-medium">
    Most Trusted MBBS Abroad Consultancy 
  </p>
</div>
            </div>

            {/* 🔥 CONTENT */}
            <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">

                {/* LEFT TEXT */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        Welcome To Book My Global Admission Services
                    </h2>

                    <p className="text-gray-600 mb-4">
                        Book My Global Admission Services is an extensive search engine for students and
                        parents who are seeking information on higher education, mainly
                        MBBS, abroad. One can rely on   Book My Global Admission Services for getting
                        reliable and relevant data on medical colleges and universities.
                    </p>

                    <p className="text-gray-600 mb-4">
                        Book My Global Admission Services is a disruptive higher education solution
                        provider offering B2C solutions for people seeking information on
                        courses in medicine. We help students from initial counseling till
                        their convocation.
                    </p>

                    <p className="text-gray-600">
                        Book My Global Admission Services is a unique discovery platform connecting MBBS
                        education seekers with education providers.
                    </p>
                </div>

                {/* RIGHT VIDEO IMAGE */}
                <div className="relative h-[300px] mt-20 rounded-lg ">

  <Image
    src="/images/team.jpg"
    alt="team"
    fill
    className="object-cover hover:scale-105 transition duration-300 rounded "
  />

</div>

            </div>

            {/* 🔥 STATS SECTION */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white py-7 text-center">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-4xl font-bold">10+</h2>
                        <p>Years Industry Experience</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">10+</h2>
                        <p>Branches in India</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">10K+</h2>
                        <p>Application Processed</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">100+</h2>
                        <p>Universities</p>
                    </div>
                </div>
            </div>

            {/* 🔥 FOUNDERS */}
            <div className="max-w-6xl mx-auto py-16 px-6">

                <h2 className="text-2xl font-bold text-center mb-10">
                    MEET OUR FOUNDERS
                </h2>

                {/* FOUNDER 1 */}
                <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                    <Image
                        src="/images/founder1.jpg"
                        alt="founder"
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />

                    <div>
                        <h3 className="text-2xl font-bold">----------</h3>
                        <p className="text-teal-600 text-sm mb-3">
                            DIRECTOR,   Book My Global Admission Services
                        </p>

                        <p className="text-gray-600 text-sm">
                            Competent and diligent professional with experience in Sales &
                            Marketing. Expertise in analyzing trends and implementing
                            strategies for growth.
                        </p>
                    </div>
                </div>

                {/* FOUNDER 2 */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-gray-600 text-sm mb-4">
                            Passion drives success. Hard work pays well but smart work pays
                            better. Always aim to improve and grow.
                        </p>

                        <h3 className="text-2xl font-bold">-----------</h3>
                        <p className="text-teal-600 text-sm">
                            CO-FOUNDER, Book My Global Admission Services
                        </p>
                    </div>

                    <Image
                        src="/images/founder2.jpg"
                        alt="founder"
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />
                </div>

            </div>

            {/* 🔥 HISTORY */}
            <div className="bg-white py-16 text-center px-6">
                <h2 className="text-2xl font-bold mb-4">
                    Book My Global Admission Services
                </h2>

                <p className="text-gray-600 max-w-4xl mx-auto">
                    Book My Global Admission Services started in 2015 under Study Nation 360 Pvt Ltd.
                    We provide information about colleges, courses, and admission
                    processes globally.
                </p>
            </div>

            {/* 🔥 OFFERINGS */}
            <div className="bg-gray-100 py-16 px-6 text-center">
                <h2 className="text-2xl font-bold mb-10">Our Offerings</h2>

                <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">

                    {[
                        "Career Counseling",
                        "Admissions Assistance",
                        "Visa Assistance",
                        "Travel Assistance",
                        "Local Assistance",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-teal-600 font-semibold">{item}</h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}