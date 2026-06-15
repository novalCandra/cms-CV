import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getKategori } from "../services/kategoriService";
import { getProfile } from "../services/ProfileService";
import { getRiwayat } from "../services/RiwayatService";
import { logout } from "../services/AuthService";
import { getPortfolioByUser } from "../services/PortfolioService";
import API from "../constants/data";

const CVContext = createContext(null);

export function CVProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authPage, setAuthPage] = useState("login");
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [currentStep, setCurrentStep] = useState(1);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

const [profile, setProfile] = useState({
  nama: "",
  headline: "",
  email: "",
  telepon: "",
  domisili: "",
  perusahaan: "",

  foto: "",

  linkedin: "",
  instagram: "",
  tiktok: "",
  github: "",
  website: "",
});
const [originalProfile, setOriginalProfile] =
  useState(null);
  const [originalRiwayat, setOriginalRiwayat] = useState("");
  const [originalProjects, setOriginalProjects] =
  useState("");
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState("minimalis");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedTemplate, setSelectedTemplate] =
  useState("ats-modern");
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setUser(userData);
    setProfile(p => ({
      ...p,
      nama: p.nama || userData.name || "",
      email: p.email || userData.email || "",
    }));
  };

const handleLogout = async () => {
  try {
    await logout();
  } catch (error) {
    console.error(error);
  } finally {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    navigate('/login')
  }
};

const loadProfile = async () => {
  try {

    const response = await getProfile();

    if (response.data) {
      const profileData = response.data;

      const sosmed =
    typeof profileData.sosmed === "string"
      ? JSON.parse(profileData.sosmed)
      : profileData.sosmed;
      
    const mappedProfile = {
    nama: profileData.name || "",
    email: profileData.email || "",
    telepon: profileData.no_telp || "",
    domisili: profileData.domisili || "",
    headline: profileData.headline || "",
    perusahaan: profileData.company || "",

               foto: profileData.image
        ? `http://127.0.0.1:8000${profileData.image}`
          : "",

       previewFoto: profileData.image
       ? `http://127.0.0.1:8000${profileData.image}`
       : "",

    linkedin:
      JSON.parse(profileData.sosmed || "{}")
        ?.linkedin || "",

    instagram:
      JSON.parse(profileData.sosmed || "{}")
        ?.instagram || "",

    github:
      JSON.parse(profileData.sosmed || "{}")
        ?.github || "",

    website:
      JSON.parse(profileData.sosmed || "{}")
        ?.website || "",
  };

  setProfile(mappedProfile);

  setOriginalProfile(
    JSON.stringify({
      nama: mappedProfile.nama,
      email: mappedProfile.email,
      telepon: mappedProfile.telepon,
      domisili: mappedProfile.domisili,
      headline: mappedProfile.headline,
      perusahaan: mappedProfile.perusahaan,

      linkedin: mappedProfile.linkedin,
      instagram: mappedProfile.instagram,
      github: mappedProfile.github,
      website: mappedProfile.website,

      previewFoto:
        mappedProfile.previewFoto || "",
    })
  );

  }
  } catch (error) {
    console.error(error);
  }
};



const loadRiwayat = async () => {

  try {

    const response = await getRiwayat();

    const data = response.data;

    if (data) {

      const mappedExperience =
        data.experience || [];

      const mappedEducation =
        data.education || [];

      const mappedSkills =
        data.skills || [];

      setExperiences(mappedExperience);

      setEducations(mappedEducation);

      setSkills(mappedSkills);

      setOriginalRiwayat(
        JSON.stringify({
          experience: mappedExperience,
          education: mappedEducation,
          skills: mappedSkills,
        })
      );
    }

  } catch (error) {

    console.log(
      "FULL ERROR",
      error.response?.data
    );
  }
};

const loadPortfolio = async () => {

  try {

          const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) return;
    const response =
      await getPortfolioByUser(user.id);

    const portfolios =
      response.data || [];

    const mapped =
      portfolios.map((item) => ({
        id: item.id,
        name: item.name,
        role: item.role,
        description: item.description,
        link: item.link,
        galery_project:
          item.galery_project,

        preview:
          item.galery_project
            ? `http://127.0.0.1:8000${item.galery_project}`
            : "",
      }));

    setProjects(mapped);

    setOriginalProjects(
      JSON.stringify(mapped)
    );

  } catch (error) {

    console.log(error);
  }
};

useEffect(() => {
  const initialize = async () => {
    await loadProfile();
    await loadRiwayat();
    await loadPortfolio();
  };

  initialize();
}, []);

  useEffect(()=>{
    const fetchCategories =async ()=>{
      try {
        const data = await getKategori();

        setCategories(data.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchCategories()
  }, [])

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
      handleLogout,
      currentPage, setCurrentPage,
      currentStep, setCurrentStep,
      sidebarCollapsed, setSidebarCollapsed,
      profile, setProfile,
      originalProfile,
      setOriginalProfile,
      experiences, setExperiences,
      educations, setEducations,
      skills, setSkills,
      originalRiwayat,
      setOriginalRiwayat,
      projects, setProjects,
      originalProjects,
      setOriginalProjects,
      selectedTheme, setSelectedTheme,
      categories, setCategories,
      selectedCategory,setSelectedCategory,
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
