"use client";

export default function Sidebar() {
  return (
    <div className="space-y-4">

      {/* STREAM */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Stream</h2>

        {[
          "Medical",
          "Engineering",
          "Business and Management",
          "Architecture",
          "Commerce",
          "Aviation",
          "Hotel Management",
          "Humanities",
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input type="radio" defaultChecked={i === 0} />
            <span>{s}</span>
          </div>
        ))}
      </div>

      {/* COURSES */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Courses</h2>

        {["MBBS", "MD", "Nursing", "Dentistry", "Pharmacy"].map((c, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input type="radio" />
            <span>{c}</span>
          </div>
        ))}
      </div>

      {/* REGION */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Region</h2>

        {["All Region", "Africa", "Asia", "Europe"].map((r, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input type="radio" defaultChecked={i === 0} />
            <span>{r}</span>
          </div>
        ))}
      </div>

      {/* COUNTRY */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Country</h2>

        {["Russia", "Georgia", "India", "Poland", "China"].map((c, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input type="checkbox" />
            <span>{c}</span>
          </div>
        ))}
      </div>

      {/* INSTITUTE TYPE */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Institute Type</h2>

        {["Private", "Government"].map((t, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input type="checkbox" />
            <span>{t}</span>
          </div>
        ))}
      </div>

    </div>
  );
}