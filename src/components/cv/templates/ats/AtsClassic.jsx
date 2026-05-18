export default function ATSClassic({
  profile,
  experiences,
  educations,
  skills,
  projects,
  theme,
}) {
  return (
    <div className="bg-white shadow-xl rounded-md overflow-hidden w-full text-slate-800">
      
      {/* HEADER */}
      <div
        className="px-8 py-6 border-b"
        style={{
          borderColor: `${theme.accent}30`,
        }}
      >
        <div className="flex items-start justify-between gap-6">
          
          <div className="flex-1">
            <h1
              className="text-3xl font-bold tracking-wide uppercase"
              style={{ color: theme.accent }}
            >
              {profile?.nama || "Nama Lengkap"}
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              {profile?.headline || "Professional Headline"}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs text-slate-600">
              {profile?.email && (
                <span>{profile.email}</span>
              )}

              {profile?.telepon && (
                <span>{profile.telepon}</span>
              )}

              {profile?.domisili && (
                <span>{profile.domisili}</span>
              )}
            </div>
          </div>

          {profile?.foto && (
            <img
              src={profile.foto}
              alt="Foto"
              className="w-20 h-20 rounded object-cover border"
              style={{
                borderColor: `${theme.accent}40`,
              }}
            />
          )}
        </div>
      </div>

      {/* BODY */}
      <div className="grid md:grid-cols-[2fr_1fr] gap-8 px-8 py-6">

        {/* LEFT SIDE */}
        <div className="space-y-7">

          {/* SUMMARY */}
          {profile?.summary && (
            <section>
              <h2
                className="text-sm font-bold uppercase tracking-[2px] mb-3 pb-1 border-b"
                style={{
                  color: theme.accent,
                  borderColor: `${theme.accent}30`,
                }}
              >
                Profil
              </h2>

              <p className="text-sm leading-relaxed text-slate-700">
                {profile.summary}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}
          {experiences?.length > 0 && (
            <section>
              <h2
                className="text-sm font-bold uppercase tracking-[2px] mb-4 pb-1 border-b"
                style={{
                  color: theme.accent,
                  borderColor: `${theme.accent}30`,
                }}
              >
                Pengalaman Kerja
              </h2>

              <div className="space-y-5">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-start justify-between gap-3">
                      
                      <div>
                        <p className="font-semibold text-sm">
                          {exp.posisi}
                        </p>

                        <p
                          className="text-xs font-medium mt-0.5"
                          style={{ color: theme.accent }}
                        >
                          {exp.perusahaan}
                        </p>
                      </div>

                      <p className="text-[11px] text-slate-400 whitespace-nowrap">
                        {exp.mulai} — {exp.selesai || "Sekarang"}
                      </p>
                    </div>

                    {exp.deskripsi && (
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
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
            <section>
              <h2
                className="text-sm font-bold uppercase tracking-[2px] mb-4 pb-1 border-b"
                style={{
                  color: theme.accent,
                  borderColor: `${theme.accent}30`,
                }}
              >
                Pendidikan
              </h2>

              <div className="space-y-4">
                {educations.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between gap-3">
                      
                      <div>
                        <p className="font-semibold text-sm">
                          {edu.sekolah}
                        </p>

                        <p
                          className="text-xs"
                          style={{ color: theme.accent }}
                        >
                          {edu.jurusan}
                        </p>
                      </div>

                      <p className="text-[11px] text-slate-400 whitespace-nowrap">
                        {edu.masuk} — {edu.lulus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          {projects?.length > 0 && (
            <section>
              <h2
                className="text-sm font-bold uppercase tracking-[2px] mb-4 pb-1 border-b"
                style={{
                  color: theme.accent,
                  borderColor: `${theme.accent}30`,
                }}
              >
                Portfolio
              </h2>

              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id}>
                    <p className="font-semibold text-sm">
                      {project.nama}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      {project.role}
                    </p>

                    {project.deskripsi && (
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {project.deskripsi}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-7">

          {/* SKILLS */}
          {skills?.length > 0 && (
            <section>
              <h2
                className="text-sm font-bold uppercase tracking-[2px] mb-4 pb-1 border-b"
                style={{
                  color: theme.accent,
                  borderColor: `${theme.accent}30`,
                }}
              >
                Skills
              </h2>

              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
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
            </section>
          )}

          {/* CONTACT */}
          {(profile?.linkedin ||
            profile?.github ||
            profile?.website ||
            profile?.instagram) && (
            <section>
              <h2
                className="text-sm font-bold uppercase tracking-[2px] mb-4 pb-1 border-b"
                style={{
                  color: theme.accent,
                  borderColor: `${theme.accent}30`,
                }}
              >
                Kontak
              </h2>

              <div className="space-y-2 text-xs text-slate-700 break-all">
                
                {profile?.linkedin && (
                  <p>
                    LinkedIn:
                    <span
                      className="ml-1"
                      style={{ color: theme.accent }}
                    >
                      {profile.linkedin}
                    </span>
                  </p>
                )}

                {profile?.github && (
                  <p>
                    GitHub:
                    <span
                      className="ml-1"
                      style={{ color: theme.accent }}
                    >
                      {profile.github}
                    </span>
                  </p>
                )}

                {profile?.website && (
                  <p>
                    Website:
                    <span
                      className="ml-1"
                      style={{ color: theme.accent }}
                    >
                      {profile.website}
                    </span>
                  </p>
                )}

                {profile?.instagram && (
                  <p>
                    Instagram:
                    <span
                      className="ml-1"
                      style={{ color: theme.accent }}
                    >
                      {profile.instagram}
                    </span>
                  </p>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}