import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { path: "/dashboard", label: "Beranda", icon: "🏠" },
    { path: "/builder", label: "Builder", icon: "📝" },
    { path: "/preview", label: "Preview", icon: "👁️" },
    { path: "/download", label: "Download", icon: "⬇️" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 flex">
      {items.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex-1 flex flex-col items-center py-2 gap-0.5 text-xs font-medium transition-colors ${
              isActive
                ? "text-indigo-600"
                : "text-slate-400"
            }`}
          >
            <span className="text-lg leading-none">
              {item.icon}
            </span>

            <span className="text-[10px]">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}