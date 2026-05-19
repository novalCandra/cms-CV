import ATSModern from "../components/cv/templates/ats/AtsModern";
import ATSClassic from "../components/cv/templates/ats/ATSClassic";
import CreativeModern from "../components/cv/templates/kreatif/CreativeModern";
import CreativeSplit from "../components/cv/templates/kreatif/CreativSplit";

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
    component: ATSClassic,
    thumbnail: "/images/templates/ats-classic.png",
  },
  {
    id: "creative-modern",
    category: "kreatif",
    name: "Creative Modern",
    component: CreativeModern,
    thumbnail: "/images/templates/ats-classic.png",
  },
  {
    id: "creative-split",
    category: "kreatif",
    name: "Creative Split",
    component: CreativeSplit,
    thumbnail: "/images/templates/ats-classic.png",
  },
];