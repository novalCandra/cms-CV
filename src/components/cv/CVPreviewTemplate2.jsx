import { THEMES } from "../../constants";
import { useCVContext } from "../../context/CVContext";

export default function CVPreviewTemplate2() {
  const {
    profile,
    experiences,
    educations,
    skills,
    projects,
    selectedTheme,
  } = useCVContext();

  const theme =
    THEMES.find((t) => t.id === selectedTheme) || THEMES[0];

  const headerBg =
    selectedTheme === "kreatif"
      ? "bg-purple-800"
      : selectedTheme === "modern"
      ? "bg-blue-800"
      : "bg-slate-800";

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full" style={{ borderTop: `4px solid ${theme.accent}` }}>
      <div className={`${headerBg} text-white p-5 md:p-8`}>
        <div className="flex items-start gap-4">
          {profile?.foto ? (
            <img src={profile.foto} alt="Foto profil" className="w-14 h-14 md:w-20 md:h-20 rounded-2xl object-cover shrink-0" />
          ) : (
            <div
              className="w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-bold shrink-0"
              style={{ background: theme.accent }}
            >
              {(profile?.nama || "A").charAt(0)}
            </div>
          )}
          <div className="min-w-0">
            <h1 className="text-lg md:text-2xl font-bold truncate">{profile?.nama || "Nama Lengkap"}</h1>
            <p className="text-xs md:text-sm mt-0.5" style={{ color: `${theme.accent}cc` }}>{profile?.headline || "Headline Kamu"}</p>
            <div className="flex flex-wrap gap-2 mt-2 text-xs text-slate-300">
              {profile?.email && <span className="truncate max-w-[140px]">📧 {profile.email}</span>}
              {profile?.telepon && <span>📱 {profile.telepon}</span>}
              {profile?.domisili && <span>📍 {profile.domisili}</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6">
        <div className="md:col-span-2 space-y-5">
          {experiences.length > 0 && (
            <div>
              <h2 className="font-bold text-xs uppercase tracking-wider border-b pb-1.5 mb-3" style={{ color: theme.accent, borderColor: `${theme.accent}40` }}>Pengalaman</h2>
              {experiences.map((exp) => (
                <div key={exp.id} className="mb-3">
                  <p className="font-semibold text-slate-800 text-sm">{exp.posisi}</p>
                  <p className="text-xs" style={{ color: theme.accent }}>{exp.perusahaan} · {exp.lokasi}</p>
                  <p className="text-xs text-slate-400">{exp.mulai} — {exp.selesai || "Sekarang"}</p>
                  {exp.deskripsi && <p className="text-xs text-slate-600 mt-1">{exp.deskripsi}</p>}
                </div>
              ))}
            </div>
          )}
          {educations.length > 0 && (
            <div>
              <h2 className="font-bold text-xs uppercase tracking-wider border-b pb-1.5 mb-3" style={{ color: theme.accent, borderColor: `${theme.accent}40` }}>Pendidikan</h2>
              {educations.map((edu) => (
                <div key={edu.id} className="mb-2">
                  <p className="font-semibold text-slate-800 text-sm">{edu.sekolah}</p>
                  <p className="text-xs" style={{ color: theme.accent }}>{edu.jurusan}</p>
                  <p className="text-xs text-slate-400">{edu.masuk} — {edu.lulus}</p>
                </div>
              ))}
            </div>
          )}
          {projects.length > 0 && (
            <div>
              <h2 className="font-bold text-xs uppercase tracking-wider border-b pb-1.5 mb-3" style={{ color: theme.accent, borderColor: `${theme.accent}40` }}>Portfolio</h2>
              {projects.map((p) => (
                <div key={p.id} className="mb-2">
                  <p className="font-semibold text-slate-800 text-sm">{p.nama}</p>
                  <p className="text-xs text-slate-500">{p.role}</p>
                  {p.deskripsi && <p className="text-xs text-slate-600 mt-0.5">{p.deskripsi}</p>}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-5">
          {skills.length > 0 && (
            <div>
              <h2 className="font-bold text-xs uppercase tracking-wider border-b pb-1.5 mb-3" style={{ color: theme.accent, borderColor: `${theme.accent}40` }}>Skills</h2>
              {skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>{skill.name}</span><span>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full">
                    <div className="h-full rounded-full" style={{ width: `${skill.level}%`, background: theme.accent }} />
                  </div>
                </div>
              ))}
            </div>
          )}
          {(profile?.linkedin || profile?.github || profile?.website || profile?.instagram) && (
            <div>
              <h2 className="font-bold text-xs uppercase tracking-wider border-b pb-1.5 mb-3" style={{ color: theme.accent, borderColor: `${theme.accent}40` }}>Kontak</h2>
              <div className="space-y-1">
                {profile.linkedin && <p className="text-xs truncate" style={{ color: theme.accent }}>💼 {profile.linkedin}</p>}
                {profile.github && <p className="text-xs truncate" style={{ color: theme.accent }}>🐙 {profile.github}</p>}
                {profile.website && <p className="text-xs truncate" style={{ color: theme.accent }}>🌐 {profile.website}</p>}
                {profile.instagram && <p className="text-xs truncate" style={{ color: theme.accent }}>📸 {profile.instagram}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
