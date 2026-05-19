export default function ATSModern({
  profile,
  experiences,
  educations,
  skills,
  projects,
  theme,
}) {
  return (
    <div
      className="bg-white shadow-xl rounded-2xl overflow-hidden w-full"
      style={{
        borderTop: `4px solid ${theme.accent}`,
      }}
    >
      {/* HEADER */}
      <div
        className="p-6 text-white"
        style={{
          background: theme.accent,
        }}
      >
        <div className="flex items-start gap-4">
          {profile?.foto ? (
            <img
              src={profile.foto}
              alt="Foto"
              className="w-16 h-16 rounded-2xl object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold">
              {(profile?.nama || "A").charAt(0)}
            </div>
          )}

          <div className="min-w-0">
            <h1 className="text-2xl font-bold truncate">
              {profile?.nama || "Nama Lengkap"}
            </h1>

            <p className="text-sm text-white/80 mt-1">
              {profile?.headline || "Frontend Developer"}
            </p>

            <div className="flex flex-wrap gap-3 mt-3 text-xs text-white/80">
              {profile?.email && (
                <span>📧 {profile.email}</span>
              )}

              {profile?.telepon && (
                <span>📱 {profile.telepon}</span>
              )}

              {profile?.domisili && (
                <span>📍 {profile.domisili}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-3 gap-6 p-6">
        {/* LEFT */}
        <div className="md:col-span-2 space-y-6">
          {/* SUMMARY */}
          {profile?.summary && (
            <div>
              <h2
                className="font-bold text-sm uppercase tracking-wider mb-2"
                style={{ color: theme.accent }}
              >
                Tentang Saya
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {profile.summary}
              </p>
            </div>
          )}

          {/* EXPERIENCE */}
          {experiences?.length > 0 && (
            <div>
              <h2
                className="font-bold text-sm uppercase tracking-wider mb-3"
                style={{ color: theme.accent }}
              >
                Pengalaman
              </h2>

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <p className="font-semibold text-slate-800 text-sm">
                      {exp.posisi}
                    </p>

                    <p
                      className="text-xs"
                      style={{ color: theme.accent }}
                    >
                      {exp.perusahaan} · {exp.lokasi}
                    </p>

                    <p className="text-xs text-slate-400">
                      {exp.mulai} — {exp.selesai || "Sekarang"}
                    </p>

                    {exp.deskripsi && (
                      <p className="text-xs text-slate-600 mt-1">
                        {exp.deskripsi}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {educations?.length > 0 && (
            <div>
              <h2
                className="font-bold text-sm uppercase tracking-wider mb-3"
                style={{ color: theme.accent }}
              >
                Pendidikan
              </h2>

              <div className="space-y-3">
                {educations.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-semibold text-slate-800 text-sm">
                      {edu.sekolah}
                    </p>

                    <p
                      className="text-xs"
                      style={{ color: theme.accent }}
                    >
                      {edu.jurusan}
                    </p>

                    <p className="text-xs text-slate-400">
                      {edu.masuk} — {edu.lulus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS */}
          {projects?.length > 0 && (
            <div>
              <h2
                className="font-bold text-sm uppercase tracking-wider mb-3"
                style={{ color: theme.accent }}
              >
                Portfolio
              </h2>

              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.id}>
                    <p className="font-semibold text-slate-800 text-sm">
                      {project.nama}
                    </p>

                    <p className="text-xs text-slate-500">
                      {project.role}
                    </p>

                    {project.deskripsi && (
                      <p className="text-xs text-slate-600 mt-1">
                        {project.deskripsi}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* SKILLS */}
          {skills?.length > 0 && (
            <div>
              <h2
                className="font-bold text-sm uppercase tracking-wider mb-3"
                style={{ color: theme.accent }}
              >
                Skills
              </h2>

              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          background: theme.accent,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTACT */}
          {(profile?.linkedin ||
            profile?.github ||
            profile?.website ||
            profile?.instagram) && (
            <div>
              <h2
                className="font-bold text-sm uppercase tracking-wider mb-3"
                style={{ color: theme.accent }}
              >
                Kontak
              </h2>

              <div className="space-y-2 text-xs">
                {profile.linkedin && (
                  <p style={{ color: theme.accent }}>
                    💼 {profile.linkedin}
                  </p>
                )}

                {profile.github && (
                  <p style={{ color: theme.accent }}>
                    🐙 {profile.github}
                  </p>
                )}

                {profile.website && (
                  <p style={{ color: theme.accent }}>
                    🌐 {profile.website}
                  </p>
                )}

                {profile.instagram && (
                  <p style={{ color: theme.accent }}>
                    📸 {profile.instagram}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}