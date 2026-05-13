import { useState } from "react";
import LogoutModal from "./LogoutModal";

export default function Navbar({ title, currentPage, currentStep, onLogout, userName }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const initials = userName
    ? userName.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)
    : "A";

  return (
    <>
      <header className="h-14 bg-white border-b border-slate-200 flex items-center px-4 gap-3 shrink-0 sticky top-0 z-30">
        <div className="md:hidden flex items-center gap-2 mr-1">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">C</div>
        </div>
        <h1 className="font-semibold text-slate-800 text-sm flex-1 truncate">{title}</h1>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
            Draft tersimpan ✓
          </span>
          {currentPage === "builder" && (
            <span className="md:hidden text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
              {currentStep}/7
            </span>
          )}
          <button
            onClick={() => setShowLogoutModal(true)}
            className="md:hidden text-slate-400 hover:text-red-400 transition p-1.5 rounded-lg hover:bg-slate-100"
            title="Keluar"
          >
            🚪
          </button>
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white shrink-0">{initials}</div>
        </div>
      </header>

      {showLogoutModal && (
        <LogoutModal
          onConfirm={() => { setShowLogoutModal(false); onLogout(); }}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </>
  );
}
