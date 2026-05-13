import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import BottomNav from "../components/layout/BottomNav";

import { useCVContext } from "../context/CVContext";

const PAGE_TITLES = {
  "/dashboard": "Dashboard",
  "/builder": "CV Builder",
  "/preview": "Preview CV",
  "/download": "Download CV",
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
      <Sidebar
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        onLogout={handleLogout}
        // userName={user.name}
        // userEmail={user.email}
      />

      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        <Navbar
          title={PAGE_TITLES[location.pathname]}
          currentStep={currentStep}
          onLogout={handleLogout}
          // userName={user.name}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 md:pb-8">
          <div className="max-w-3xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  );
}