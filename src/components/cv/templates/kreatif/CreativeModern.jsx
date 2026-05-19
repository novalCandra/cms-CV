export default function CreativeModern({
  profile,
  experiences,
  educations,
  skills,
  projects,
  theme,
}) {
  const accent = theme?.accent || "#e11d48";
 
  return (
    <div className="bg-white w-full shadow-2xl overflow-hidden relative" style={{ borderLeft: `5px solid ${accent}` }}>
 
      <div
        className="absolute top-0 right-0 w-28 h-28 opacity-10 pointer-events-none"
        style={{ background: `linear-gradient(225deg, ${accent}, transparent)` }}
      />
      <div
        className="absolute top-3 right-3 w-14 h-14 rotate-45 border pointer-events-none"
        style={{ borderColor: `${accent}55` }}
      />
 
      <div
        className="relative overflow-hidden px-10 pt-10 pb-8"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f3460 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, ${accent}33 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="absolute -bottom-10 right-16 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${accent}44 0%, transparent 70%)` }}
        />
 
        <div className="relative z-10 flex items-start gap-6">
          {profile?.foto ? (
            <img
              src={profile.foto}
              alt="Foto"
              className="w-20 h-20 rounded object-cover flex-shrink-0"
              style={{ border: `2px solid ${accent}` }}
            />
          ) : (
            <div
              className="w-20 h-20 rounded flex-shrink-0 flex items-center justify-center text-3xl font-bold"
              style={{
                background: `${accent}22`,
                border: `2px solid ${accent}`,
                color: accent,
                fontFamily: "'Georgia', serif",
              }}
            >
              {(profile?.nama || "A").charAt(0)}
            </div>
          )}
 
          <div className="min-w-0">
            <p
              className="text-xs tracking-widest uppercase mb-1"
              style={{ color: accent, fontFamily: "'Courier New', monospace" }}
            >
              ✦ Curriculum Vitae ✦
            </p>
 
            <h1
              className="text-3xl font-light text-white leading-tight truncate"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.5px" }}
            >
              {profile?.nama || "Nama Lengkap"}
            </h1>
 
            <p
              className="text-xs uppercase tracking-widest mt-1"
              style={{ color: accent, fontFamily: "'Courier New', monospace" }}
            >
              {profile?.headline || "Creative Designer"}
            </p>
 
            <div className="flex flex-wrap gap-4 mt-3">
              {profile?.email && (
                <span className="text-xs text-slate-400" style={{ fontFamily: "'Courier New', monospace" }}>
                  ✉ {profile.email}
                </span>
              )}
              {profile?.telepon && (
                <span className="text-xs text-slate-400" style={{ fontFamily: "'Courier New', monospace" }}>
                  ✆ {profile.telepon}
                </span>
              )}
              {profile?.domisili && (
                <span className="text-xs text-slate-400" style={{ fontFamily: "'Courier New', monospace" }}>
                  ◎ {profile.domisili}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
 
      <div className="grid md:grid-cols-3 divide-x divide-slate-100">
 
        <div className="md:col-span-2 px-10 py-9 space-y-8">
 
          {profile?.summary && (
            <Section label="Tentang Saya" accent={accent}>
              <div
                className="px-5 py-4 rounded-r-md text-sm text-slate-500 italic leading-relaxed"
                style={{
                  borderLeft: `3px solid ${accent}`,
                  background: `${accent}0d`,
                  fontFamily: "'Georgia', serif",
                }}
              >
                "{profile.summary}"
              </div>
            </Section>
          )}
 
          {experiences?.length > 0 && (
            <Section label="Pengalaman Kerja" accent={accent}>
              <div className="relative pl-7">
                <div
                  className="absolute left-[7px] top-2 bottom-2 w-px"
                  style={{ background: `linear-gradient(180deg, ${accent}, ${accent}22)` }}
                />
                <div className="space-y-5">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="relative">
                      <div
                        className="absolute -left-7 top-[6px] w-3.5 h-3.5 rounded-full bg-white"
                        style={{ border: `2px solid ${accent}` }}
                      />
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="text-sm font-bold text-slate-800">{exp.posisi}</p>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full"
                          style={{
                            color: accent,
                            background: `${accent}15`,
                            fontFamily: "'Courier New', monospace",
                          }}
                        >
                          {exp.mulai} — {exp.selesai || "Sekarang"}
                        </span>
                      </div>
                      <p
                        className="text-[11px] mt-0.5"
                        style={{ color: accent, fontFamily: "'Courier New', monospace" }}
                      >
                        {exp.perusahaan}{exp.lokasi ? ` · ${exp.lokasi}` : ""}
                      </p>
                      {exp.deskripsi && (
                        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{exp.deskripsi}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Section>
          )}
 
          {educations?.length > 0 && (
            <Section label="Pendidikan" accent={accent}>
              <div className="space-y-3">
                {educations.map((edu) => (
                  <div key={edu.id} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded flex-shrink-0 flex items-center justify-center text-base"
                      style={{ background: `${accent}12`, border: `1px solid ${accent}33` }}
                    >
                      🎓
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{edu.sekolah}</p>
                      <p className="text-xs mt-0.5" style={{ color: accent }}>{edu.jurusan}</p>
                      <p
                        className="text-[11px] text-slate-400 mt-0.5"
                        style={{ fontFamily: "'Courier New', monospace" }}
                      >
                        {edu.masuk} — {edu.lulus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}
 
          {projects?.length > 0 && (
            <Section label="Portfolio & Proyek" accent={accent}>
              <div className="space-y-3">
                {projects.map((project, i) => (
                  <div
                    key={project.id}
                    className="rounded-md px-4 py-3"
                    style={{
                      background: i % 2 === 0 ? "#f8fafc" : `${accent}0d`,
                      border: `1px solid ${i % 2 === 0 ? "#f1f5f9" : `${accent}33`}`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm" style={{ color: accent }}>◆</span>
                      <p className="text-sm font-bold text-slate-800">{project.nama}</p>
                    </div>
                    {project.role && (
                      <p className="text-[11px] text-slate-400 mt-1 ml-5 italic">{project.role}</p>
                    )}
                    {project.deskripsi && (
                      <p className="text-xs text-slate-500 mt-1 ml-5 leading-relaxed">{project.deskripsi}</p>
                    )}
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>
 
        <div className="bg-slate-50 px-6 py-9 space-y-8">
 
          {skills?.length > 0 && (
            <Section label="Skills" accent={accent}>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div
                      className="flex justify-between text-[11px] mb-1"
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                      <span style={{ color: accent }}>{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-slate-200 overflow-hidden">
                      <div
                        className="h-full"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${accent}, ${accent}99)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}
 
          {(profile?.linkedin || profile?.github || profile?.website || profile?.instagram) && (
            <Section label="Temukan Saya" accent={accent}>
              <div className="space-y-2">
                {profile.linkedin && <ContactChip icon="💼" label={profile.linkedin} accent={accent} />}
                {profile.github && <ContactChip icon="🐙" label={profile.github} accent={accent} />}
                {profile.website && <ContactChip icon="🌐" label={profile.website} accent={accent} />}
                {profile.instagram && <ContactChip icon="📸" label={profile.instagram} accent={accent} />}
              </div>
            </Section>
          )}
 
          <div
            className="rounded p-4 text-center"
            style={{ background: "linear-gradient(135deg, #0f172a, #0f3460)" }}
          >
            <div className="text-2xl mb-1" style={{ color: accent }}>✦</div>
            <p
              className="text-[9px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Courier New', monospace" }}
            >
              Creative &amp; Passionate
            </p>
          </div>
        </div>
      </div>
 
      <div
        className="flex items-center justify-between px-10 py-2.5"
        style={{ background: "#0f172a" }}
      >
        <span
          className="text-[9px] tracking-widest text-slate-600 uppercase"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          {profile?.nama || "Nama Lengkap"}
        </span>
        <div className="flex gap-1">
          {[accent, `${accent}88`, `${accent}44`].map((c, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <span
          className="text-[9px] tracking-widest text-slate-600 uppercase"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          CV · {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}
 
function Section({ label, accent, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm" style={{ color: accent }}>◈</span>
        <h2
          className="text-[10px] font-bold uppercase tracking-[3px]"
          style={{ color: accent, fontFamily: "'Courier New', monospace" }}
        >
          {label}
        </h2>
        <div
          className="flex-1 h-px"
          style={{ background: `linear-gradient(90deg, ${accent}44, transparent)` }}
        />
      </div>
      {children}
    </div>
  );
}
 
function ContactChip({ icon, label, accent }) {
  return (
    <div
      className="flex items-center gap-2 px-2.5 py-1.5 rounded text-[11px] break-all"
      style={{
        background: `${accent}12`,
        border: `1px solid ${accent}22`,
        color: accent,
        fontFamily: "'Courier New', monospace",
      }}
    >
      <span className="text-sm flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </div>
  );
}