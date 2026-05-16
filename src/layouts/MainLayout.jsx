import { Outlet, useLocation } from "react-router-dom";
 
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import BottomNav from "../components/layout/BottomNav";
 
import { useCVContext } from "../context/CVContext";
 
const PAGE_TITLES = {
  "/dashboard": "Dashboard",
  "/builder":   "CV Builder",
  "/preview":   "Preview CV",
  "/download":  "Download CV",
};
 
export default function MainLayout() {
  const location = useLocation();
 
  const {
    currentStep,
    setCurrentStep,
    sidebarCollapsed,
    setSidebarCollapsed,
    handleLogout,
    user,
  } = useCVContext();
 
  return (
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar is fixed inside its own component */}
      <Sidebar
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
 
      <BottomNav />
    </div>
  );
}