import ATSModern from "../components/cv/templates/ats/AtsModern";
import AtsClasic from "../components/cv/templates/ats/AtsClassic";

export const TEMPLATES = [
  {
    id: "ats-modern",
    category: "ats",
    name: "ATS Modern",
    component: ATSModern,
    thumbnail: "/images/templates/ats-modern.png",
  },

  {
    id: "ats-classic",
    category: "ats",
    name: "ATS Classic",
    component: AtsClasic,
    thumbnail: "/images/templates/ats-classic.png",
  },
];