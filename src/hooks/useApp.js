// import { useState } from "react";

// export function useApp() {
//   // ─── Auth ──────────────────────────────────────────────────────────────────
//   const [user, setUser]         = useState(null); // { name, email }
//   const [authPage, setAuthPage] = useState("login");

//   // ─── Navigation ───────────────────────────────────────────────────────────
//   const [currentPage, setCurrentPage]   = useState("dashboard");
//   const [currentStep, setCurrentStep]   = useState(1);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   // ─── CV Data ───────────────────────────────────────────────────────────────
//   const [profile, setProfile] = useState({
//     nama: "", headline: "", email: "", telepon: "", domisili: "", foto: "",
//     linkedin: "", github: "", website: "", instagram: "", perusahaan: "",
//   });
//   const [experiences, setExperiences] = useState([]);
//   const [educations,  setEducations]  = useState([]);
//   const [skills,      setSkills]      = useState([]);
//   const [projects,    setProjects]    = useState([]);
//   const [selectedTheme,    setSelectedTheme]    = useState("minimalis");
//   const [selectedCategory, setSelectedCategory] = useState("ats");

//   // ─── Computed ─────────────────────────────────────────────────────────────
//   const completedSteps = [
//     profile.nama || profile.email,
//     experiences.length > 0,
//     educations.length > 0,
//     skills.length > 0,
//     projects.length > 0,
//     true,   // theme selalu ada
//     false,
//   ].filter(Boolean).length;

//   // ─── Actions ──────────────────────────────────────────────────────────────
//   const handleLogin = (userData) => {
//     setUser(userData);
//     setProfile((p) => ({
//       ...p,
//       nama:  p.nama  || userData.name  || "",
//       email: p.email || userData.email || "",
//     }));
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setAuthPage("login");
//     setCurrentPage("dashboard");
//     setCurrentStep(1);
//   };

//   return {
//     // auth
//     user, authPage, setAuthPage,
//     handleLogin, handleLogout,
//     // nav
//     currentPage, setCurrentPage,
//     currentStep, setCurrentStep,
//     sidebarCollapsed, setSidebarCollapsed,
//     // cv data
//     profile,    setProfile,
//     experiences, setExperiences,
//     educations,  setEducations,
//     skills,      setSkills,
//     projects,    setProjects,
//     selectedTheme,    setSelectedTheme,
//     selectedCategory, setSelectedCategory,
//     // computed
//     completedSteps,
//   };
// }
