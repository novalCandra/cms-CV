import { STEPS } from "../constants";

export default function DashboardPage({ setCurrentPage, setCurrentStep, completedSteps, userName }) {
  const progress = Math.round((completedSteps / 7) * 100);
  const firstName = userName ? userName.split(" ")[0] : "Pengguna";

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-5 md:p-6 text-white">
        <p className="text-sm text-indigo-200 mb-1">Selamat datang kembali 👋</p>
        <h2 className="text-lg md:text-xl font-bold mb-3">{firstName}</h2>
        <div className="bg-white/20 rounded-full h-2 mb-2">
          <div className="bg-white h-full rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs text-indigo-200">CV {progress}% selesai · {completedSteps}/7 langkah</p>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {[
          { label: "CV Dibuat", val: "1", icon: "📄" },
          { label: "Section Selesai", val: `${completedSteps}/7`, icon: "✅" },
          { label: "Template", val: "Modern", icon: "🎨" },
        ].map(({ label, val, icon }) => (
          <div key={label} className="bg-white border border-slate-200 rounded-2xl p-3 md:p-4 text-center">
            <p className="text-xl md:text-2xl mb-0.5">{icon}</p>
            <p className="font-bold text-slate-800 text-base md:text-lg">{val}</p>
            <p className="text-xs text-slate-500 leading-tight">{label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6">
        <h3 className="font-semibold text-slate-800 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {[
            { icon: "✏️", label: "Edit CV", sub: "Lanjut mengisi data", color: "indigo", action: () => { setCurrentPage("builder"); setCurrentStep(1); } },
            { icon: "👁️", label: "Preview", sub: "Lihat tampilan CV", color: "violet", action: () => setCurrentPage("preview") },
            { icon: "⬇️", label: "Download", sub: "Unduh CV kamu", color: "green", action: () => setCurrentPage("download") },
            { icon: "🎨", label: "Ganti Tema", sub: "Pilih tampilan baru", color: "amber", action: () => { setCurrentPage("builder"); setCurrentStep(6); } },
          ].map(({ icon, label, sub, color, action }) => (
            <button
              key={label}
              onClick={action}
              className={`flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-${color}-50 hover:bg-${color}-100 transition text-left`}
            >
              <span className="text-xl md:text-2xl shrink-0">{icon}</span>
              <div className="min-w-0">
                <p className={`font-medium text-xs md:text-sm text-${color}-800`}>{label}</p>
                <p className={`text-xs text-${color}-500 hidden sm:block`}>{sub}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6">
        <h3 className="font-semibold text-slate-800 mb-3">Progress Pengisian</h3>
        <div className="space-y-2.5">
          {STEPS.map((step, i) => (
            <div key={step.id} className="flex items-center gap-3">
              <span className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i < completedSteps ? "bg-green-500 text-white" : "bg-slate-100 text-slate-400"}`}>
                {i < completedSteps ? "✓" : step.id}
              </span>
              <span className={`text-sm flex-1 ${i < completedSteps ? "text-slate-800 font-medium" : "text-slate-400"}`}>
                {step.icon} {step.label}
              </span>
              {i < completedSteps && <span className="text-xs text-green-500 font-medium shrink-0">Selesai</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
