import Stepper from "../components/layout/Stepper";
import StepProfile from "../components/steps/StepProfile";
import StepExperience from "../components/steps/StepExperience";
import StepEducation from "../components/steps/StepEducation";
import StepSkills from "../components/steps/StepSkills";
import StepPortfolio from "../components/steps/StepPortfolio";
import StepTheme from "../components/steps/StepTheme";
import StepPreview from "../components/steps/StepPreview";

import { useState } from "react";

import { createProfile, updateProfile, getProfile } from "../services/ProfileService";
import { saveRiwayat } from "../services/RiwayatService";
import {
  createPortfolio,
  updatePortfolio,
} from "../services/Portfolioservice";


import { useCVContext } from "../context/CVContext";

export default function BuilderPage() {

const {
  currentStep,
  setCurrentStep,
  profile,
  setProfile,
  originalProfile,
  setOriginalProfile,
  experiences,
  setExperiences,
  educations,
  setEducations,
  skills,
  setSkills,
  originalRiwayat,
  setOriginalRiwayat,
  projects,
  categories,
  setProjects,
  originalProjects,
  setOriginalProjects,
  selectedTheme,
  setSelectedTheme,
  selectedCategory,
  setSelectedCategory,

  selectedTemplate,
  setSelectedTemplate,
} = useCVContext();

const [errors, setErrors] = useState({});
const [historyErrors, setHistoryErrors] = useState({});
const [portfolioErrors, setPortfolioErrors] =
  useState({});

const saveProfile = async () => {
  const formData = new FormData();

  formData.append("name", profile.nama);
  formData.append("email", profile.email);
  formData.append("no_telp", profile.telepon);
  formData.append("domisili", profile.domisili);
  formData.append("headline", profile.headline);
  formData.append("company", profile.perusahaan);

  if (profile.foto instanceof File) {
    formData.append("image", profile.foto);
  }

    formData.append(
      "sosmed",
      JSON.stringify({
        instagram: profile.instagram,
        linkedin: profile.linkedin,
        github: profile.github,
        website: profile.website,
      })
    );

    const currentProfile = {
      nama: profile.nama,
      email: profile.email,
      telepon: profile.telepon,
      domisili: profile.domisili,
      headline: profile.headline,
      perusahaan: profile.perusahaan,

      linkedin: profile.linkedin,
      instagram: profile.instagram,
      github: profile.github,
      website: profile.website,

      previewFoto: profile.previewFoto || "",
    };

  delete currentProfile.foto;

  if (
    JSON.stringify(currentProfile) ===
    originalProfile
  ) {
    console.log("PROFILE TIDAK BERUBAH");

    return;
  }

  const existingProfile = await getProfile();

  if (existingProfile.data) {
    await updateProfile(formData);
  } else {
    await createProfile(formData);
  }
  setOriginalProfile(
  JSON.stringify(currentProfile)
);
};

const saveHistory = async () => {

  try {

    setHistoryErrors({});

    const currentRiwayat = {
      experience: experiences,
      education: educations,
      skills: skills,
    };

    if (
      JSON.stringify(currentRiwayat) ===
      originalRiwayat
    ) {

      console.log("RIWAYAT TIDAK BERUBAH");

      return;
    }

    await saveRiwayat(currentRiwayat);

    setOriginalRiwayat(
      JSON.stringify(currentRiwayat)
    );

  } catch (err) {

    console.log(err.response?.data);

    setHistoryErrors(
      err.response?.data?.errors || {}
    );
  }
};

const savePortfolio = async () => {
  try {
    setPortfolioErrors({});

    for (const project of projects) {

      const formData = new FormData();

      formData.append(
        "description",
        project.description || ""
      );

      formData.append(
        "role",
        project.role || ""
      );

      formData.append(
        "link",
        project.link || ""
      );

      if (project.image instanceof File) {
        formData.append(
          "galery_project",
          project.image
        );
      }
      
      const currentProjects =
        JSON.stringify(projects);

      if (
        currentProjects ===
        originalProjects
      ) {

        console.log(
          "PORTFOLIO TIDAK BERUBAH"
        );

        return;
      }

      if (project.id) {
        await updatePortfolio(
          project.id,
          formData
        );
      } else {
        await createPortfolio(formData);
      }
    }

  } catch (err) {

    setPortfolioErrors(
      err.response?.data?.errors || {}
    );

    throw err;
  }
};

const handleNext = async () => {
  try {
    setErrors({});

    if (currentStep === 1) {
      await saveProfile();
    }

    if (currentStep === 4) {
      await saveHistory();
    }

    if (currentStep === 5) {
  await savePortfolio();
}

    setCurrentStep(
      Math.min(7, currentStep + 1)
    );
  } catch (err) {
    console.log(err);

    setErrors(
      err.response?.data?.errors || {}
    );
  }
};
const stepComponents = {
  1: <StepProfile data={profile} setData={setProfile} errors={errors}/>,

  2: (
    <StepExperience
      experiences={experiences}
      setExperiences={setExperiences}
      errors={historyErrors}
    />
  ),

  3: (
    <StepEducation
      educations={educations}
      setEducations={setEducations}
      errors={historyErrors}
    />
  ),

  4: (
    <StepSkills
      skills={skills}
      setSkills={setSkills}
      errors={historyErrors}
    />
  ),

  5: (
    <StepPortfolio
      projects={projects}
      setProjects={setProjects}
      errors={portfolioErrors}
    />
  ),

  6: (
    <StepTheme
      selectedTheme={selectedTheme}
      setSelectedTheme={setSelectedTheme}

      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}

      selectedTemplate={selectedTemplate}
      setSelectedTemplate={setSelectedTemplate}
    />
  ),

  7: (
    <StepPreview
      profile={profile}
      experiences={experiences}
      educations={educations}
      skills={skills}
      projects={projects}

      selectedTheme={selectedTheme}
      setSelectedTheme={setSelectedTheme}

      selectedTemplate={selectedTemplate}
    />
  ),
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
          onClick={handleNext}
          disabled={currentStep === 7}
          className="px-4 md:px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          {currentStep === 6 ? "Preview →" : "Selanjutnya →"}
        </button>
      </div>
    </div>
  );
}
