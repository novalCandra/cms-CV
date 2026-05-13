import CVPreviewTemplate from "../components/cv/CVPreviewTemplate";

export default function PreviewPage({ profile, experiences, educations, skills, projects, selectedTheme }) {
  return (
    <div>
      <h2 className="font-semibold text-slate-800 mb-4">Preview CV Lengkap</h2>
      <CVPreviewTemplate
        profile={profile}
        experiences={experiences}
        educations={educations}
        skills={skills}
        projects={projects}
        selectedTheme={selectedTheme}
      />
    </div>
  );
}
