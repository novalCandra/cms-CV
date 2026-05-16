// import CVPreviewTemplate2 from "../components/cv/CVPreviewTemplate";
import CVPreviewTemplate2 from "../components/cv/CVPreviewTemplate2";

export default function PreviewPage({ profile, experiences, educations, skills, projects, selectedTheme }) {
  return (
    <div>
      <h2 className="font-semibold text-slate-800 mb-4">Preview CV Lengkap</h2>
      <CVPreviewTemplate2
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
