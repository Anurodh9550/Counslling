"use client";

export default function Sidebar() {
  const streams = [
    "Medical",
    "Engineering",
    "Business and Management",
    "Architecture",
    "Commerce",
    "Aviation",
    "Hotel Management",
    "Humanities",
  ];

  const courseTypes = ["MBBS", "MD", "Nursing", "Dentistry", "Pharmacy"];
  const regions = ["All region", "Africa", "Asia", "Europe"];
  const countries = ["Russia", "Georgia", "India", "Poland", "China"];
  const instituteTypes = ["Private", "Government"];

  return (
    <aside className="space-y-4 md:col-span-1">
      <div className="filter-panel">
        <h2 className="mb-3 text-sm font-semibold text-text-heading">Stream</h2>
        <ul className="space-y-2 text-sm text-text-body">
          {streams.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <input
                type="radio"
                name="stream"
                id={`stream-${i}`}
                defaultChecked={i === 0}
                className="h-4 w-4 border-[var(--border)]"
              />
              <label htmlFor={`stream-${i}`} className="cursor-pointer">
                {s}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-panel">
        <h2 className="mb-3 text-sm font-semibold text-text-heading">Courses</h2>
        <ul className="space-y-2 text-sm text-text-body">
          {courseTypes.map((c, i) => (
            <li key={c} className="flex items-center gap-2">
              <input
                type="radio"
                name="course"
                id={`course-${i}`}
                className="h-4 w-4 border-[var(--border)]"
              />
              <label htmlFor={`course-${i}`} className="cursor-pointer">
                {c}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-panel">
        <h2 className="mb-3 text-sm font-semibold text-text-heading">Region</h2>
        <ul className="space-y-2 text-sm text-text-body">
          {regions.map((r, i) => (
            <li key={r} className="flex items-center gap-2">
              <input
                type="radio"
                name="region"
                id={`region-${i}`}
                defaultChecked={i === 0}
                className="h-4 w-4 border-[var(--border)]"
              />
              <label htmlFor={`region-${i}`} className="cursor-pointer">
                {r}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-panel">
        <h2 className="mb-3 text-sm font-semibold text-text-heading">Country</h2>
        <ul className="space-y-2 text-sm text-text-body">
          {countries.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`country-${c}`}
                className="h-4 w-4 rounded border-[var(--border)]"
              />
              <label htmlFor={`country-${c}`} className="cursor-pointer">
                {c}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-panel">
        <h2 className="mb-3 text-sm font-semibold text-text-heading">
          Institute type
        </h2>
        <ul className="space-y-2 text-sm text-text-body">
          {instituteTypes.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`type-${t}`}
                className="h-4 w-4 rounded border-[var(--border)]"
              />
              <label htmlFor={`type-${t}`} className="cursor-pointer">
                {t}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
