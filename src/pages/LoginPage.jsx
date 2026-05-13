import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginHeroPanel from "../components/AuthComponent/HeroPanel";
import StyleAuth from "../components/AuthComponent/style";

 

 
export default function LoginPage({ onLogin, setAuthPage }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    setMounted(true);
  }, []);
 
  const handleLogin = () => {
    setError("");
    if (email && !email.includes("@")) {
      setError("Format email tidak valid.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin({ name: email ? email.split("@")[0] : "Pengguna", email: email || "demo@cvcraft.id" });
    }, 1200);
  };
 
  return (
    <>

      <StyleAuth/>
      <div className="min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
 
        <LoginHeroPanel/>
 
        {/* ── RIGHT PANEL ─────────────────────────────────── */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-10 bg-white min-h-screen md:min-h-0">
          <div
            className={`w-full max-w-[360px] ${mounted ? "anim-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.05s" }}
          >
            <div className="flex md:hidden items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">C</div>
              <span className="font-bold text-slate-800">CVcraft</span>
            </div>
 
            <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold rounded-full px-3 py-1 mb-4">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"
                  style={{ animation: "pulseRing 2s infinite" }}
                />
                Selamat datang kembali
              </div>
              <h1 className="text-[28px] font-extrabold text-slate-900 leading-tight mb-1.5">
                Masuk ke Akunmu
              </h1>
              <p className="text-slate-500 text-sm">
                Belum punya akun?{" "}
                <Link to="/register" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors underline underline-offset-2">
                  Daftar gratis →
                </Link>
              </p>
            </div>
 
            <div className="space-y-4">
 
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                <div className={`relative rounded-2xl border transition-all duration-200 ${focused === "email" ? "border-indigo-400 bg-white input-glow-focus" : "border-slate-200 bg-slate-50"}`}>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="w-full bg-transparent pl-11 pr-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none rounded-2xl"
                    placeholder="andi@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    onKeyDown={e => e.key === "Enter" && handleLogin()}
                  />
                </div>
              </div>
 
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Password</label>
                  <button type="button" className="text-xs text-indigo-500 hover:text-indigo-600 font-medium transition-colors">Lupa password?</button>
                </div>
                <div className={`relative rounded-2xl border transition-all duration-200 ${focused === "pass" ? "border-indigo-400 bg-white input-glow-focus" : "border-slate-200 bg-slate-50"}`}>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </div>
                  <input
                    type={showPass ? "text" : "password"}
                    className="w-full bg-transparent pl-11 pr-12 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none rounded-2xl"
                    placeholder="Minimal 8 karakter"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    onFocus={() => setFocused("pass")}
                    onBlur={() => setFocused(null)}
                    onKeyDown={e => e.key === "Enter" && handleLogin()}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPass ? (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
 
              {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-xl px-3.5 py-2.5">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth="2.5" className="shrink-0">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <p className="text-xs text-red-500 font-medium">{error}</p>
                </div>
              )}
 
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className={`w-full relative rounded-2xl py-3.5 font-bold text-sm text-white overflow-hidden transition-all duration-200 ${isLoading ? "opacity-90 cursor-not-allowed" : "hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 active:translate-y-0"}`}
                style={isLoading ? {} : { background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" }}
              >
                {isLoading && <span className="absolute inset-0 loading-shimmer" />}
                <span className="relative flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <svg className="spin" width="15" height="15" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.25)" strokeWidth="4" />
                        <path fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Memproses...
                    </>
                  ) : (
                    <>
                      Masuk Sekarang
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
 
              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-slate-100" />
                <span className="text-xs text-slate-400 font-medium">atau</span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>
 
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-150 hover:shadow-sm active:scale-[0.99]"
              >
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                Masuk dengan Google
              </button>
            </div>
 
            <p className="text-center text-[11px] text-slate-400 mt-5">
              🔐 Demo: klik <strong>Masuk Sekarang</strong> tanpa isi data
            </p>
          </div>
        </div>
      </div>
    </>
  );
}