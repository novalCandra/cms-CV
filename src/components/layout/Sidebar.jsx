import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
 
import { STEPS } from "../../constants";
import LogoutModal from "./LogoutModal";
 
import {
  LayoutDashboard,
  FileText,
  Eye,
  Download,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
 
export default function Sidebar({
  currentStep,
  setCurrentStep,
  collapsed,
  setCollapsed,
  onLogout,
  userName,
  userEmail,
}) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
 
  const navigate = useNavigate();
  const location = useLocation();
 
  const menuItems = [
    { path: "/dashboard", label: "Dashboard",  icon: LayoutDashboard },
    { path: "/builder",   label: "CV Builder", icon: FileText },
    { path: "/preview",   label: "Preview CV", icon: Eye },
    { path: "/download",  label: "Download",   icon: Download },
  ];
 
  const initials = userName
    ? userName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
    : "A";
 
  return (
    <>
      {/*
        ── KEY CHANGES ──────────────────────────────────────────────
        • `fixed top-0 left-0 h-screen` → sidebar is always full
          viewport height and doesn't scroll with the page.
        • `z-40` → stays above page content.
        • nav gets `overflow-y-auto` so step list can scroll if tall.
        • The width classes stay the same as before so MainLayout's
          margin-left offset (added there) matches correctly.
        ─────────────────────────────────────────────────────────────
      */}
      <aside
        className={`
          hidden md:flex flex-col
          fixed top-0 left-0 h-screen z-40
          bg-slate-900 text-white
          transition-all duration-300 shrink-0
          ${collapsed ? "w-16" : "w-60 lg:w-64"}
        `}
      >
        <div
          className={`flex items-center border-b border-slate-700 h-14 shrink-0 ${
            collapsed ? "justify-center px-0" : "px-4 gap-3"
          }`}
        >
        <div className="w-8 h-8 shrink-0">
          <img
            src="/logo_cv.png"
            alt="CVcraft Logo"
            className="w-full h-full object-contain"
          />
        </div>
 
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm leading-none truncate">CVcraft</p>
              <p className="text-xs text-slate-400 mt-0.5 truncate">Build smarter CV</p>
            </div>
          )}
 
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-slate-400 hover:text-white transition p-1 rounded-lg hover:bg-slate-800 shrink-0"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
 
        <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
 
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                title={collapsed ? item.label : ""}
                className={`w-full flex items-center rounded-lg text-sm font-medium transition-all ${
                  collapsed
                    ? "justify-center px-0 py-2.5"
                    : "gap-3 px-3 py-2.5 text-left"
                } ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={18} className="shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </button>
            );
          })}
 
          {!collapsed && location.pathname === "/builder" && (
            <div className="mt-3 pt-3 border-t border-slate-700">
              <p className="text-xs text-slate-500 uppercase tracking-wider px-3 mb-1.5">
                Langkah
              </p>
 
              {STEPS.map((step) => {
                const StepIcon = step.icon;
 
                return (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left ${
                      currentStep === step.id
                        ? "bg-slate-700 text-white"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        currentStep >= step.id
                          ? "bg-indigo-500 text-white"
                          : "bg-slate-700 text-slate-500"
                      }`}
                    >
                      <StepIcon size={12} />
                    </span>
                    <span className="truncate">{step.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </nav>
 
        <div
          className={`border-t border-slate-700 py-3 shrink-0 ${
            collapsed ? "px-0 flex flex-col items-center gap-2" : "px-3"
          }`}
        >
          <div className={`flex items-center ${collapsed ? "" : "gap-3 mb-2"}`}>
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold shrink-0">
              {initials}
            </div>
 
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium truncate">{userName || "Pengguna"}</p>
                <p className="text-xs text-slate-500 truncate">{userEmail || ""}</p>
              </div>
            )}
          </div>
 
          <button
            onClick={() => setShowLogoutModal(true)}
            title={collapsed ? "Keluar" : ""}
            className={`flex items-center gap-2 text-slate-400 hover:text-red-400 transition rounded-lg hover:bg-slate-800 text-xs ${
              collapsed ? "p-2" : "px-3 py-2 w-full"
            }`}
          >
            <LogOut size={18} className="shrink-0" />
            {!collapsed && <span>Keluar</span>}
          </button>
        </div>
      </aside>
 
      {showLogoutModal && (
        <LogoutModal
          onConfirm={() => { setShowLogoutModal(false); onLogout(); }}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </>
  );
}