import { Outlet, useLocation } from "react-router-dom";
 
import Navbar from "../components/layout/Navbar";
import BottomNavAdmin from "../components/layout/adminLayout/BottomNavAdmin";

import { useCVContext } from "../context/CVContext";
import SidebarAdmin from "../components/layout/adminLayout/SidebarAdmin";
 
const PAGE_TITLES = {
  "/admin/dashboard": "Dashboard",
  "/admin/kategori":   "Kategori Cv",
  "/preview":   "Preview CV",
  "/download":  "Download CV",
};
 
export default function AdminLayout() {
  const location = useLocation();
 
  const {
    currentStep,
    setCurrentStep,
    sidebarCollapsed,
    setSidebarCollapsed,
    handleLogout,
    // user,
  } = useCVContext();
  const user = JSON.parse(
  localStorage.getItem("user")
);
 
  return (
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar is fixed inside its own component */}
      <SidebarAdmin
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        onLogout={handleLogout}
        userName={user?.name}
        userEmail={user?.email}
      />
 
      {/*
        Margin-left matches the fixed sidebar width so content
        is never hidden behind it. Transitions in sync with sidebar.
      */}
      <div
        className={`
          flex-1 flex flex-col min-h-screen min-w-0
          transition-all duration-300
          ${sidebarCollapsed ? "md:ml-16" : "md:ml-60 lg:ml-64"}
        `}
      >
        <Navbar
          title={PAGE_TITLES[location.pathname]}
          currentStep={currentStep}
          currentPage={location.pathname.replace("/", "")}
          onLogout={handleLogout}
          userName={user?.name}
        />
 
        {/*
          ── KEY CHANGES ────────────────────────────────────────────
          • Padding: p-3 md:p-5  (was p-4 md:p-6) — sedikit lebih rapat
          • max-w-5xl (was max-w-3xl) — konten jauh lebih lebar,
            tidak ada ruang kosong besar di kiri-kanan
          • mx-auto tetap untuk center alignment
          ────────────────────────────────────────────────────────────
        */}
        <main className="flex-1 overflow-y-auto p-3 md:p-5 pb-20 md:pb-6">
          <div className="max-w-5xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
 
      <BottomNavAdmin />
    </div>
  );
}