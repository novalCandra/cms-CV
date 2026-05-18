import { useCVContext } from "../context/CVContext";
import { TEMPLATES, THEMES } from "../constants";

export default function PreviewPage() {
  const {
    profile,
    experiences,
    educations,
    skills,
    projects,
    selectedTheme,
    selectedTemplate,
  } = useCVContext();

  const activeTemplate =
    TEMPLATES.find((t) => t.id === selectedTemplate) ||
    TEMPLATES[0];

  const TemplateComponent = activeTemplate.component;

  const theme =
    THEMES.find((t) => t.id === selectedTheme) ||
    THEMES[0];

  return (
    <div>
      <h2 className="font-semibold text-slate-800 mb-4">
        Preview CV Lengkap
      </h2>

      <TemplateComponent
        profile={profile}
        experiences={experiences}
        educations={educations}
        skills={skills}
        projects={projects}
        theme={theme}
      />
    </div>
  );
}