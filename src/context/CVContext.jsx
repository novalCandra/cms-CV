import { createContext, useContext, useState } from "react";

const CVContext = createContext(null);

export function CVProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authPage, setAuthPage] = useState("login");
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [currentStep, setCurrentStep] = useState(1);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [profile, setProfile] = useState({
    nama: "", headline: "", email: "", telepon: "", domisili: "", foto: ""
  });
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState("minimalis");
  const [selectedCategory, setSelectedCategory] = useState("ats");
  const [selectedTemplate, setSelectedTemplate] =
  useState("ats-modern");

  const handleLogin = (userData) => {
    setUser(userData);
    setProfile(p => ({
      ...p,
      nama: p.nama || userData.name || "",
      email: p.email || userData.email || "",
    }));
  };

  const handleLogout = () => {
    setUser(null);
    setAuthPage("login");
    setCurrentPage("dashboard");
    setCurrentStep(1);
  };

  const completedSteps = [
    profile.nama || profile.email,
    experiences.length > 0,
    educations.length > 0,
    skills.length > 0,
    projects.length > 0,
    true,
    false,
  ].filter(Boolean).length;

  return (
    <CVContext.Provider value={{
      user, authPage, setAuthPage,
      currentPage, setCurrentPage,
      currentStep, setCurrentStep,
      sidebarCollapsed, setSidebarCollapsed,
      profile, setProfile,
      experiences, setExperiences,
      educations, setEducations,
      skills, setSkills,
      projects, setProjects,
      selectedTheme, setSelectedTheme,
      selectedCategory, setSelectedCategory,
      selectedTemplate,setSelectedTemplate,
      handleLogin, handleLogout,
      completedSteps,
    }}>
      {children}
    </CVContext.Provider>
  );
}

export function useCVContext() {
  return useContext(CVContext);
}
