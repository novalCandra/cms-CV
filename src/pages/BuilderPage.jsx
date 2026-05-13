import Stepper from "../components/layout/Stepper";
import StepProfile from "../components/steps/StepProfile";
import StepExperience from "../components/steps/StepExperience";
import StepEducation from "../components/steps/StepEducation";
import StepSkills from "../components/steps/StepSkills";
import StepPortfolio from "../components/steps/StepPortfolio";
import StepTheme from "../components/steps/StepTheme";
import StepPreview from "../components/steps/StepPreview";

// export default function BuilderPage({
//   currentStep, setCurrentStep,
//   profile, setProfile,
//   experiences, setExperiences,
//   educations, setEducations,
//   skills, setSkills,
//   projects, setProjects,
//   selectedTheme, setSelectedTheme,
//   selectedCategory, setSelectedCategory,
// }) {
import { useCVContext } from "../context/CVContext";

export default function BuilderPage() {

  const {
  currentStep,
  setCurrentStep,
  profile,
  setProfile,
  experiences,
  setExperiences,
  educations,
  setEducations,
  skills,
  setSkills,
  projects,
  setProjects,
  selectedTheme,
  setSelectedTheme,
  selectedCategory,
  setSelectedCategory,
} = useCVContext();

  const stepComponents = {
    1: <StepProfile data={profile} setData={setProfile} />,
    2: <StepExperience experiences={experiences} setExperiences={setExperiences} />,
    3: <StepEducation educations={educations} setEducations={setEducations} />,
    4: <StepSkills skills={skills} setSkills={setSkills} />,
    5: <StepPortfolio projects={projects} setProjects={setProjects} />,
    6: <StepTheme selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />,
    7: <StepPreview profile={profile} experiences={experiences} educations={educations} skills={skills} projects={projects} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />,
  };

  return (
    <div>
      <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
      {stepComponents[currentStep]}
      <div className="flex justify-between mt-6 pt-4 border-t border-slate-200">
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="px-4 md:px-5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          ← Sebelumnya
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(7, currentStep + 1))}
          disabled={currentStep === 7}
          className="px-4 md:px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          {currentStep === 6 ? "Preview →" : "Selanjutnya →"}
        </button>
      </div>
    </div>
  );
}
