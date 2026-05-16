import { THEMES, CATEGORIES } from "../../constants";

export default function StepTheme({
  selectedTheme,
  setSelectedTheme,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="space-y-6">
      
      {/* CATEGORY */}
      <div>
        <h2 className="font-semibold text-slate-800 mb-3">
          Pilih Kategori CV
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-3 md:p-4 rounded-2xl border-2 text-left transition-all ${
                  selectedCategory === cat.id
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {/* ICON */}
                <div className="mb-2">
                  <Icon
                    size={24}
                    className={
                      selectedCategory === cat.id
                        ? "text-indigo-600"
                        : "text-slate-600"
                    }
                  />
                </div>

                {/* LABEL */}
                <p
                  className={`font-semibold text-xs md:text-sm ${
                    selectedCategory === cat.id
                      ? "text-indigo-700"
                      : "text-slate-800"
                  }`}
                >
                  {cat.label}
                </p>

                {/* DESC */}
                <p className="text-xs text-slate-500 mt-0.5 hidden sm:block">
                  {cat.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* THEMES */}
      <div>
        <h2 className="font-semibold text-slate-800 mb-3">
          Pilih Tema
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              className={`p-3 md:p-4 rounded-2xl border-2 text-left transition-all ${
                selectedTheme === theme.id
                  ? "border-indigo-500"
                  : "border-slate-200 hover:border-slate-300"
              }`}
              style={{ background: theme.color }}
            >
              <div
                className="w-full h-12 md:h-16 rounded-lg mb-2 flex flex-col gap-1 p-2"
                style={{
                  background: "white",
                  border: `2px solid ${theme.accent}20`,
                }}
              >
                <div
                  className="h-1.5 rounded-full w-2/3"
                  style={{ background: theme.accent }}
                />

                <div className="h-1 rounded-full w-full bg-slate-100" />

                <div className="h-1 rounded-full w-4/5 bg-slate-100" />
              </div>

              <p
                className={`font-semibold text-xs md:text-sm ${
                  selectedTheme === theme.id
                    ? "text-indigo-700"
                    : "text-slate-800"
                }`}
              >
                {theme.label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}