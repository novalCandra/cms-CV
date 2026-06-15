import { useNavigate, useLocation } from "react-router-dom";

import {
  House,
  FileEdit,
  Eye,
  Download,
} from "lucide-react";

export default function BottomNavAdmin() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      path: "/admin/dashboard",
      label: "Beranda",
      icon: House,
    },
    {
      path: "/admin/kategori",
      label: "Kategori CV",
      icon: FileEdit,
    },
    {
      path: "/preview",
      label: "Preview",
      icon: Eye,
    },
    {
      path: "/download",
      label: "Download",
      icon: Download,
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 flex">
      {items.map((item) => {
        const isActive = location.pathname === item.path;

        const Icon = item.icon;

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex-1 flex flex-col items-center py-2 gap-1 text-xs font-medium transition-all duration-200 ${
              isActive
                ? "text-indigo-600"
                : "text-slate-400"
            }`}
          >
            <Icon
              size={20}
              className={`transition-transform duration-200 ${
                isActive
                  ? "scale-110"
                  : "scale-100"
              }`}
            />

            <span className="text-[10px]">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}