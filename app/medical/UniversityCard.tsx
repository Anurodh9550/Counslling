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
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">

      <h2 className="text-xl font-semibold text-blue-600">
        {uni.name}
      </h2>

      <div className="mt-3 space-y-2 text-sm text-gray-700">

        <p>🏳️ Country: {uni.country}</p>

        <p>📘 Study Area: <span className="text-orange-500">Medical</span></p>

        <div>
          📚 Available Courses:
          {uni.course.map((c, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-600 px-2 py-1 ml-2 rounded text-xs"
            >
              {c}
            </span>
          ))}
        </div>

        <p>📍 Location: {uni.location}</p>
        <p>🏠 Intakes: --</p>
        <p>💰 Annual Tuition Fee: --</p>

        <p>📅 Duration: <span className="text-red-500">{uni.duration}</span></p>
      </div>
    </div>
  );
}