import { useState } from "react";

import {
  THEMES,
  TEMPLATES,
} from "../../constants";

export default function StepPreview({
  profile,
  experiences,
  educations,
  skills,
  projects,

  selectedTheme,
  setSelectedTheme,

  selectedTemplate,
}) {
  const [zoom, setZoom] = useState(1);

  const [showColorPicker, setShowColorPicker] =
    useState(false);

  const templateData = TEMPLATES.find(
    (t) => t.id === selectedTemplate
  );

  const ActiveTemplate =
    templateData?.component;

  const activeTheme =
    THEMES.find((t) => t.id === selectedTheme) ||
    THEMES[0];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-slate-800">
          Preview CV
        </h2>

        <div className="flex gap-2 relative">
          <button
            onClick={() =>
              setZoom((z) =>
                z === 1
                  ? 0.75
                  : z === 0.75
                  ? 0.5
                  : 1
              )
            }
            className="border border-slate-200 px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:bg-slate-50 transition"
          >
            🔍{" "}
            {zoom === 1
              ? "100%"
              : zoom === 0.75
              ? "75%"
              : "50%"}
          </button>

          <div className="relative">
            <button
              onClick={() =>
                setShowColorPicker(
                  !showColorPicker
                )
              }
              className="border border-slate-200 px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:bg-slate-50 transition"
            >
              🎨 Tema
            </button>

            {showColorPicker && (
              <div className="absolute right-0 top-9 bg-white border border-slate-200 rounded-xl p-3 shadow-lg z-10 flex gap-2">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setSelectedTheme(t.id);
                      setShowColorPicker(false);
                    }}
                    title={t.label}
                    className={`w-8 h-8 rounded-full border-2 transition ${
                      selectedTheme === t.id
                        ? "border-indigo-500 scale-110"
                        : "border-slate-200"
                    }`}
                    style={{
                      background: t.accent,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "top left",
          width:
            zoom < 1
              ? `${100 / zoom}%`
              : "100%",
        }}
      >
        {ActiveTemplate && (
          <ActiveTemplate
            profile={profile}
            experiences={experiences}
            educations={educations}
            skills={skills}
            projects={projects}
            theme={activeTheme}
          />
        )}
      </div>
    </div>
  );
}