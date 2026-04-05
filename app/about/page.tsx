"use client";

import Image from "next/image";
import { FadeUp, FadeItem } from "../components/motion-ui";

export default function AboutPage() {
  return (
    <div className="min-w-0 bg-app-bg">
      <header className="page-inner-hero px-4 py-12 text-center shadow-lg sm:py-14">
        <FadeUp hero className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About us
          </h1>
          <p className="mt-3 text-sm text-[var(--text-on-dark-muted)] sm:text-base">
            Trusted study-abroad counselling and university information for
            medical and professional programs.
          </p>
        </FadeUp>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:gap-12 md:px-6">
        <FadeUp>
          <h2 className="text-xl font-semibold text-text-heading sm:text-2xl">
            Welcome to Book My Global Admission Services
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            Book My Global Admission Services is a search and counselling
            resource for students and parents seeking higher education abroad,
            with a focus on MBBS and related medical programs. We provide
            structured information on colleges, universities, and admission
            processes.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            We support students from initial counselling through documentation,
            applications, and orientation—aligned with embassy and institution
            requirements.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            Our goal is to connect serious applicants with verified programme
            options and clear next steps.
          </p>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="relative mt-6 h-[260px] overflow-hidden rounded-xl border border-[var(--border)] shadow-card sm:mt-0 sm:h-[300px]">
            <Image
              src="/images/team.jpg"
              alt="Our team"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </FadeUp>
      </div>

      <section className="page-inner-hero py-10 px-4 shadow-inner">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-6">
          {[
            { n: "10+", l: "Years industry experience" },
            { n: "10+", l: "Branches in India" },
            { n: "10K+", l: "Applications processed" },
            { n: "100+", l: "Universities" },
          ].map((s, i) => (
            <FadeItem key={s.l} index={i}>
              <p className="text-3xl font-semibold sm:text-4xl">{s.n}</p>
              <p className="mt-2 text-xs text-[var(--text-on-dark-muted)] sm:text-sm">
                {s.l}
              </p>
            </FadeItem>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <FadeUp className="text-center">
          <h2 className="text-xl font-semibold text-text-heading sm:text-2xl">
            Meet our founders
          </h2>
        </FadeUp>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <FadeItem index={0}>
            <Image
              src="/images/founder1.jpg"
              alt="Director"
              width={400}
              height={400}
              className="mx-auto w-full max-w-md rounded-xl border border-[var(--border)] object-cover shadow-card"
            />
          </FadeItem>
          <FadeItem index={1}>
            <div>
              <h3 className="text-xl font-semibold text-text-heading">
                ----------
              </h3>
              <p className="mt-1 text-sm text-[var(--accent)]">
                Director, Book My Global Admission Services
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                Competent and diligent professional with experience in sales and
                marketing. Expertise in analysing trends and implementing
                strategies for sustainable growth.
              </p>
            </div>
          </FadeItem>
        </div>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <FadeItem index={0} className="order-2 md:order-1">
            <div>
              <p className="text-sm leading-relaxed text-text-muted">
                Passion drives success. Hard work pays well; smart, consistent
                execution pays better. We focus on clear guidance and long-term
                outcomes for every student.
              </p>
              <h3 className="mt-6 text-xl font-semibold text-text-heading">
                -----------
              </h3>
              <p className="mt-1 text-sm text-[var(--accent)]">
                Co-founder, Book My Global Admission Services
              </p>
            </div>
          </FadeItem>
          <FadeItem index={1} className="order-1 md:order-2">
            <Image
              src="/images/founder2.jpg"
              alt="Co-founder"
              width={400}
              height={400}
              className="mx-auto w-full max-w-md rounded-xl border border-[var(--border)] object-cover shadow-card"
            />
          </FadeItem>
        </div>
      </div>

      <section
        className="border-y py-14 px-4 shadow-inner"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <FadeUp className="text-center">
          <h2 className="text-xl font-semibold text-text-heading">
            Book My Global Admission Services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-text-muted sm:text-base">
            Established with a focus on transparent counselling, Book My Global
            Admission Services provides information on colleges, courses, and
            admission pathways worldwide.
          </p>
        </FadeUp>
      </section>

      <section className="bg-surface-muted py-14 px-4">
        <FadeUp className="text-center">
          <h2 className="text-xl font-semibold text-text-heading">
            Our offerings
          </h2>
        </FadeUp>
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Career counselling",
            "Admissions assistance",
            "Visa assistance",
            "Travel assistance",
            "Local assistance",
          ].map((item, i) => (
            <FadeItem key={item} index={i}>
              <div
                className="shadow-card shadow-card-hover h-full rounded-xl border p-5 transition-transform hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h3 className="text-sm font-semibold text-text-heading">
                  {item}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">
                  Structured support aligned with your programme and destination.
                </p>
              </div>
            </FadeItem>
          ))}
        </div>
      </section>
    </div>
  );
}
