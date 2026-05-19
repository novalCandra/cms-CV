export default function CreativeSplit({
  profile,
  experiences,
  educations,
  skills,
  projects,
  theme,
}) {
  const accent = theme?.accent || "#7c3aed";

  return (
    <div className="bg-white shadow-2xl overflow-hidden grid md:grid-cols-[280px_1fr] min-h-[900px]">
      
      {/* SIDEBAR */}
      <div
        className="text-white p-8 relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${accent}, #0f172a)`,
        }}
      >
        {/* DECOR */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-black/20 blur-2xl" />

        <div className="relative z-10">
          {/* PHOTO */}
          <div className="flex justify-center">
            {profile?.foto ? (
              <img
                src={profile.foto}
                alt="Foto"
                className="w-32 h-32 rounded-3xl object-cover border-4 border-white/20"
              />
            ) : (
              <div className="w-32 h-32 rounded-3xl bg-white/10 border-4 border-white/20 flex items-center justify-center text-5xl font-bold">
                {(profile?.nama || "A").charAt(0)}
              </div>
            )}
          </div>

          {/* NAME */}
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold leading-tight">
              {profile?.nama || "Nama Lengkap"}
            </h1>

            <p className="text-sm text-white/70 mt-1">
              {profile?.headline || "Creative Designer"}
            </p>
          </div>

          {/* CONTACT */}
          <div className="mt-8 space-y-3">
            {profile?.email && (
              <div className="bg-white/10 rounded-xl px-4 py-3 text-sm break-all">
                📧 {profile.email}
              </div>
            )}

            {profile?.telepon && (
              <div className="bg-white/10 rounded-xl px-4 py-3 text-sm">
                📱 {profile.telepon}
              </div>
            )}

            {profile?.domisili && (
              <div className="bg-white/10 rounded-xl px-4 py-3 text-sm">
                📍 {profile.domisili}
              </div>
            )}
          </div>

          {/* SKILLS */}
          {skills?.length > 0 && (
            <div className="mt-10">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4">
                Skills
              </h2>

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SOCIAL */}
          {(profile?.linkedin ||
            profile?.github ||
            profile?.website ||
            profile?.instagram) && (
            <div className="mt-10">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4">
                Social
              </h2>

              <div className="space-y-2 text-sm">
                {profile.linkedin && (
                  <p>💼 {profile.linkedin}</p>
                )}

                {profile.github && (
                  <p>🐙 {profile.github}</p>
                )}

                {profile.website && (
                  <p>🌐 {profile.website}</p>
                )}

                {profile.instagram && (
                  <p>📸 {profile.instagram}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8 md:p-10">
        
        {/* SUMMARY */}
        {profile?.summary && (
          <section className="mb-8">
            <SectionTitle
              title="Tentang Saya"
              accent={accent}
            />

            <p className="text-sm text-slate-600 leading-relaxed">
              {profile.summary}
            </p>
          </section>
        )}

        {/* EXPERIENCE */}
        {experiences?.length > 0 && (
          <section className="mb-8">
            <SectionTitle
              title="Pengalaman"
              accent={accent}
            />

            <div className="space-y-5">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-6"
                >
                  <div
                    className="absolute left-0 top-1 w-3 h-3 rounded-full"
                    style={{
                      background: accent,
                    }}
                  />

                  <div
                    className="absolute left-[5px] top-4 bottom-0 w-[2px]"
                    style={{
                      background: `${accent}33`,
                    }}
                  />

                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-bold text-slate-800">
                      {exp.posisi}
                    </h3>

                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: `${accent}15`,
                        color: accent,
                      }}
                    >
                      {exp.mulai} —{" "}
                      {exp.selesai || "Sekarang"}
                    </span>
                  </div>

                  <p
                    className="text-sm mt-1"
                    style={{
                      color: accent,
                    }}
                  >
                    {exp.perusahaan}
                    {exp.lokasi
                      ? ` · ${exp.lokasi}`
                      : ""}
                  </p>

                  {exp.deskripsi && (
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                      {exp.deskripsi}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EDUCATION */}
        {educations?.length > 0 && (
          <section className="mb-8">
            <SectionTitle
              title="Pendidikan"
              accent={accent}
            />

            <div className="space-y-4">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="border border-slate-100 rounded-2xl p-4"
                >
                  <h3 className="font-bold text-slate-800">
                    {edu.sekolah}
                  </h3>

                  <p
                    className="text-sm mt-1"
                    style={{
                      color: accent,
                    }}
                  >
                    {edu.jurusan}
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    {edu.masuk} — {edu.lulus}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {projects?.length > 0 && (
          <section>
            <SectionTitle
              title="Projects"
              accent={accent}
            />

            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl p-5 border border-slate-100 hover:shadow-lg transition"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4"
                    style={{
                      background: accent,
                    }}
                  >
                    ✦
                  </div>

                  <h3 className="font-bold text-slate-800">
                    {project.nama}
                  </h3>

                  {project.role && (
                    <p
                      className="text-xs mt-1"
                      style={{
                        color: accent,
                      }}
                    >
                      {project.role}
                    </p>
                  )}

                  {project.deskripsi && (
                    <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                      {project.deskripsi}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function SectionTitle({
  title,
  accent,
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-10 h-[3px] rounded-full"
        style={{
          background: accent,
        }}
      />

      <h2
        className="text-sm font-bold uppercase tracking-[3px]"
        style={{
          color: accent,
        }}
      >
        {title}
      </h2>
    </div>
  );
}