import { useState, useEffect } from "react";
import { STEPS } from "../constants";
import { useCVContext } from "../context/CVContext";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Eye,
  Download,
  Palette,
  CheckCircle2,
  Sparkles,
  Lightbulb,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
 
const QUICK_ACTIONS = [
  {
    icon: FileText,
    label: "Edit CV",
    sub: "Lanjut mengisi data",
    step: 1,
    route: "/builder",
    gradient: "from-indigo-500 to-violet-500",
    lightBg: "bg-indigo-50",
    border: "border-indigo-100",
    text: "text-indigo-700",
  },
  {
    icon: Eye,
    label: "Preview",
    sub: "Lihat tampilan CV",
    route: "/preview",
    gradient: "from-sky-500 to-cyan-500",
    lightBg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-700",
  },
  {
    icon: Download,
    label: "Download",
    sub: "Unduh CV kamu",
    route: "/download",
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
  },
  {
    icon: Palette,
    label: "Ganti Tema",
    sub: "Pilih tampilan baru",
    step: 6,
    route: "/builder",
    gradient: "from-pink-500 to-rose-500",
    lightBg: "bg-pink-50",
    border: "border-pink-100",
    text: "text-pink-700",
  },
];

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (target === 0) return;
    const numeric = typeof target === "number" ? target : parseFloat(target);
    if (isNaN(numeric)) return;
    let start = 0;
    const step = numeric / 30;
    const timer = setInterval(() => {
      start += step;
      if (start >= numeric) {
        setCount(numeric);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [target]);
  return <>{typeof target === "number" ? count : target}{suffix}</>;
}
 
export default function DashboardPage() {
  const { setCurrentStep, completedSteps, user } = useCVContext();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);
 
  const progress = Math.round((completedSteps / 7) * 100);
  const firstName = user?.name ? user.name.split(" ")[0] : "Pengguna";
 
  const handleAction = ({ step, route }) => {
    if (step !== undefined) setCurrentStep(step);
    navigate(route);
  };
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes slideUp   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
        @keyframes shimmer   { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        @keyframes pulse-dot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.4);opacity:.7} }
        @keyframes float     { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        .anim-slide-up { animation: slideUp .45s ease both; }
        .anim-fade-in  { animation: fadeIn .5s ease both; }
        .float-anim    { animation: float 3s ease-in-out infinite; }
        * { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>
 
      <div className="space-y-5 pb-6">
 
        {/* ── HERO BANNER ── */}
        <div
          className={`relative overflow-hidden rounded-3xl p-6 md:p-8 text-white ${mounted ? "anim-slide-up" : "opacity-0"}`}
          style={{
            background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #6d28d9 100%)",
            animationDelay: "0s",
          }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20 bg-white" style={{ filter: "blur(40px)" }} />
          <div className="absolute bottom-0 left-1/3 w-32 h-32 rounded-full opacity-10 bg-white" style={{ filter: "blur(30px)" }} />
 
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
 
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-4">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  style={{ animation: "pulse-dot 1.8s ease-in-out infinite" }}
                />
                Aktif
              </div>
              <p className="text-indigo-200 text-sm mb-1">Selamat datang kembali 👋</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-1">{firstName}</h2>
              <p className="text-indigo-200 text-sm">
                CV kamu <span className="text-white font-bold">{progress}%</span> selesai
              </p>
            </div>
 
            {/* Circular progress */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="relative w-20 h-20 float-anim">
                <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" />
                  <circle
                    cx="40" cy="40" r="34"
                    fill="none"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    strokeDashoffset={`${2 * Math.PI * 34 * (1 - progress / 100)}`}
                    style={{ transition: "stroke-dashoffset 1s ease" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-extrabold leading-none">{progress}%</span>
                  <span className="text-[9px] text-indigo-200 mt-0.5">selesai</span>
                </div>
              </div>
              <div className="text-sm">
                <p className="font-bold text-white text-xl">{completedSteps}<span className="text-indigo-300 font-normal text-sm">/7</span></p>
                <p className="text-indigo-200 text-xs mt-0.5">Langkah<br/>selesai</p>
              </div>
            </div>
          </div>
 
          {/* Progress bar */}
          <div className="relative z-10 mt-5">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-white relative overflow-hidden"
                style={{ width: `${progress}%`, transition: "width 1s ease" }}
              >
                <div
                  className="absolute inset-0 bg-white/40"
                  style={{ animation: "shimmer 2s linear infinite" }}
                />
              </div>
            </div>
          </div>
        </div>
 
        {/* ── STATS CARDS ── */}
      <div
        className={`grid grid-cols-3 gap-3 ${
          mounted ? "anim-slide-up" : "opacity-0"
        }`}
        style={{ animationDelay: "0.08s" }}
      >
        {[
          {
            label: "CV Dibuat",
            val: 1,
            icon: FileText,
            suffix: "",
            bg: "bg-violet-50",
            border: "border-violet-100",
            iconBg: "bg-violet-100",
            text: "text-violet-700",
          },
          {
            label: "Section Selesai",
            val: completedSteps,
            icon: CheckCircle2,
            suffix: "/7",
            bg: "bg-indigo-50",
            border: "border-indigo-100",
            iconBg: "bg-indigo-100",
            text: "text-indigo-700",
          },
          {
            label: "Template",
            val: "Modern",
            icon: Palette,
            suffix: "",
            bg: "bg-sky-50",
            border: "border-sky-100",
            iconBg: "bg-sky-100",
            text: "text-sky-700",
          },
        ].map(
          ({
            label,
            val,
            icon: Icon,
            suffix,
            bg,
            border,
            iconBg,
            text,
          }) => (
            <div
              key={label}
              className={`${bg} border ${border} rounded-2xl p-3 md:p-4 flex flex-col items-center text-center gap-2`}
            >
              <div
                className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center`}
              >
                <Icon size={18} className={text} />
              </div>

              <p className="font-extrabold text-slate-800 text-lg md:text-xl leading-none">
                {typeof val === "number" ? (
                  <AnimatedCounter target={val} suffix={suffix} />
                ) : (
                  <span>{val}</span>
                )}
              </p>

              <p
                className={`text-[10px] font-semibold uppercase tracking-wide ${text}`}
              >
                {label}
              </p>
            </div>
          )
        )}
      </div>
 
        {/* ── QUICK ACTIONS ── */}
        <div
          className={`${mounted ? "anim-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.14s" }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800 text-base">Quick Actions</h3>
            <span className="text-xs text-slate-400">4 aksi</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {QUICK_ACTIONS.map(({ icon: Icon, label, sub, step, route, lightBg, border, text, gradient }) => (
              <button
                key={label}
                onClick={() => handleAction({ step, route })}
                className={`group relative overflow-hidden ${lightBg} border ${border} rounded-2xl p-4 text-left transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0`}
              >
                {/* Hover gradient fill */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200 rounded-2xl`} />
 
                <div className="relative z-10 flex items-start gap-3">
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm shrink-0`}
            >
              <Icon size={20} className="text-white" />
            </div>
                  <div className="min-w-0">
                    <p className={`font-bold text-sm ${text}`}>{label}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-tight">{sub}</p>
                  </div>
                </div>
 
                {/* Arrow indicator */}
                <div className={`absolute right-3 bottom-3 w-5 h-5 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0`}>
                      <ArrowRight size={12} className="text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
 
        {/* ── PROGRESS STEPS ── */}
        <div
          className={`bg-white rounded-3xl border border-slate-100 p-5 md:p-6 ${mounted ? "anim-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-800 text-base">Progress Pengisian</h3>
            <div className="bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold px-2.5 py-1 rounded-full">
              {completedSteps}/7 selesai
            </div>
          </div>
 
        <div className="space-y-2">
          {STEPS.map((step, i) => {
            const done = i < completedSteps;
            const active = i === completedSteps;

            const Icon = step.icon;

            return (
              <button
                key={step.id}
                onClick={() => {
                  setCurrentStep(step.id);
                  navigate("/builder");
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-all duration-150 group
                  ${
                    done
                      ? "bg-emerald-50 border border-emerald-100 hover:border-emerald-200"
                      : active
                      ? "bg-indigo-50 border border-indigo-200 shadow-sm"
                      : "bg-slate-50 border border-slate-100 hover:bg-slate-100"
                  }`}
              >
                {/* Step indicator */}
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all
                    ${
                      done
                        ? "bg-emerald-500 text-white"
                        : active
                        ? "bg-indigo-500 text-white shadow-md shadow-indigo-200"
                        : "bg-slate-200 text-slate-400"
                    }`}
                >
                  {done ? (
                    <CheckCircle2 size={14} />
                  ) : (
                    <Icon size={14} />
                  )}
                </span>

                {/* Label */}
                <span className="flex-1 min-w-0">
                  <span
                    className={`flex items-center gap-2 text-sm font-semibold
                      ${
                        done
                          ? "text-emerald-700"
                          : active
                          ? "text-indigo-700"
                          : "text-slate-400"
                      }`}
                  >
                    <Icon size={16} />
                    {step.label}
                  </span>

                  {active && (
                    <span className="text-[11px] text-indigo-500 font-medium">
                      Lanjutkan dari sini →
                    </span>
                  )}
                </span>

                {/* Badge */}
                {done && (
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                    Selesai
                  </span>
                )}

                {active && (
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full shrink-0 animate-pulse">
                    Aktif
                  </span>
                )}

                {!done && !active && (
                  <ChevronRight
                    size={16}
                    className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                  />
                )}
              </button>
            );
          })}
        </div>
 
          {/* CTA */}
          {completedSteps < 7 && (
            <button
              onClick={() => {
                setCurrentStep(completedSteps + 1);
                navigate("/builder");
              }}
              className="mt-4 w-full py-3 rounded-2xl font-bold text-sm text-white transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" }}
            >
              Lanjutkan Langkah {completedSteps + 1} →
            </button>
          )}
          {completedSteps === 7 && (
            <button
              onClick={() => navigate("/preview")}
              className="mt-4 w-full py-3 rounded-2xl font-bold text-sm text-white bg-emerald-500 hover:bg-emerald-600 transition-all duration-150 hover:-translate-y-0.5"
            >
              ✅ CV Selesai! Lihat Preview
            </button>
          )}
        </div>
 
        {/* ── TIP CARD ── */}
        <div
          className={`relative overflow-hidden rounded-3xl border border-amber-100 bg-amber-50 p-4 md:p-5 ${mounted ? "anim-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.26s" }}
        >
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-200 rounded-full opacity-30" style={{ filter: "blur(20px)" }} />
            <div className="relative z-10 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
              <Lightbulb size={18} className="text-amber-600" />
            </div>
              <div>
                <p className="font-bold text-amber-800 text-sm mb-1">Tips CV Profesional</p>
                <p className="text-amber-700 text-xs leading-relaxed">
                  Tambahkan <span className="font-semibold">kata kunci relevan</span> dari deskripsi pekerjaan ke dalam skills dan pengalaman kamu untuk meningkatkan skor ATS hingga <span className="font-semibold">3×</span>.
                </p>
              </div>
          </div>
        </div>
          
      </div>
    </>
  );
}
 