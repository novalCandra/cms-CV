import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



const FloatingCard = ({ icon, label, delay, className }) => (
  <div
    className={`absolute flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2.5 text-white text-xs font-medium shadow-xl ${className}`}
    style={{ animation: `float 6s ease-in-out ${delay}s infinite` }}
  >
    <span className="text-base">{icon}</span>
    {label}
  </div>
);
 
const CVPreviewCard = () => (
  <div className="relative w-48 bg-white rounded-2xl shadow-2xl p-4 text-left overflow-hidden">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
      <div>
        <div className="h-2 w-16 bg-slate-800 rounded-full mb-1" />
        <div className="h-1.5 w-10 bg-slate-300 rounded-full" />
      </div>
    </div>
    <div className="space-y-1.5 mb-3">
      <div className="h-1.5 w-full bg-slate-100 rounded-full" />
      <div className="h-1.5 w-4/5 bg-slate-100 rounded-full" />
      <div className="h-1.5 w-3/4 bg-slate-100 rounded-full" />
    </div>
    <div className="h-px bg-slate-100 mb-2" />
    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Pengalaman</div>
    <div className="space-y-1">
      <div className="h-1.5 w-full bg-indigo-100 rounded-full" />
      <div className="h-1.5 w-5/6 bg-indigo-100 rounded-full" />
    </div>
    <div className="absolute bottom-2 right-2">
      <div className="w-5 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
        <span className="text-white text-[6px] font-black">CV</span>
      </div>
    </div>
  </div>
);
export default function LoginHeroPanel(){
      const [mounted, setMounted] = useState(false);
     
      useEffect(() => {
        setMounted(true);
      }, []);
    return (
        <>
 
        {/* ── LEFT PANEL ──────────────────────────────────── */}
        <div
          className="hidden md:flex md:w-[52%] relative overflow-hidden min-h-screen"
          style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1040 40%, #24243e 100%)" }}
        >
          <div className="absolute top-[-120px] left-[-80px] w-[420px] h-[420px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute bottom-[-80px] right-[-60px] w-[340px] h-[340px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)", filter: "blur(50px)" }} />
          <div className="absolute top-[40%] right-[10%] w-[200px] h-[200px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", filter: "blur(40px)" }} />
 
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
 
          <div className="relative z-10 flex flex-col justify-between p-10 w-full">
            <div className={mounted ? "anim-fade-in" : "opacity-0"}>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center font-black text-white text-base shadow-lg"
                  style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 4px 20px rgba(99,102,241,0.4)" }}
                >C</div>
                <span className="text-white font-bold text-lg tracking-tight">CVcraft</span>
              </div>
            </div>
 
            <div
              className={`flex flex-col items-center ${mounted ? "anim-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative mb-10">
                <FloatingCard icon="🎨" label="Template Premium" delay={0} className="-top-10 -left-16" />
                <FloatingCard icon="⚡" label="Selesai 5 Menit" delay={1.5} className="-top-6 -right-20" />
                <FloatingCard icon="📥" label="Export PDF" delay={3} className="-bottom-8 -left-12" />
                <FloatingCard icon="✅" label="ATS Friendly" delay={1} className="-bottom-6 -right-16" />
                <div className="relative" style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))" }}>
                  <CVPreviewCard />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-36 h-4 rounded-full opacity-30"
                    style={{ background: "radial-gradient(ellipse, #6366f1, transparent)", filter: "blur(8px)" }} />
                </div>
              </div>
 
              <h2 className="serif italic text-3xl lg:text-4xl text-white text-center leading-tight mb-3">
                CV yang Memukau,<br />
                <span className="not-italic font-normal text-indigo-300">Karir yang Cemerlang</span>
              </h2>
              <p className="text-slate-400 text-sm text-center max-w-xs leading-relaxed">
                Buat CV profesional berkualitas tinggi dalam hitungan menit. Template modern, ATS-friendly, gratis selamanya.
              </p>
            </div>
 
            <div
              className={`grid grid-cols-3 gap-3 ${mounted ? "anim-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              {[
                { num: "50K+", label: "Pengguna" },
                { num: "200+", label: "Template" },
                { num: "98%", label: "Diterima HRD" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-3 text-center">
                  <div className="text-lg font-bold text-white">{s.num}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </>
    );
}