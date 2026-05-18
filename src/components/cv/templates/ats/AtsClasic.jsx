export default function ATSClasic({
  profile,
  experiences,
  educations,
  skills,
  theme,
}) {
  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-sm"
      style={{
        borderTop: `8px solid ${theme.accent}`,
      }}
    >
      <h1
        className="text-3xl font-bold"
        style={{ color: theme.accent }}
      >
        {profile?.nama || "Nama Kamu"}
      </h1>

      <p className="text-slate-600 mt-2">
        {profile?.summary || "Summary"}
      </p>

      <div className="mt-6">
        <h2
          className="font-bold mb-2"
          style={{ color: theme.accent }}
        >
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {skills?.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm"
              style={{
                background: theme.color,
                color: theme.accent,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}