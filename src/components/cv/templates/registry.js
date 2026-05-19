import ATSClassic from "./ats/ATSClassic";
import ATSModern from "./ats/ATSModern";
import CreativeModern from "./kreatif/CreativeModern";

export const templates = [
  {
    id: "ats-modern",
    name: "ATS Modern",
    category: "ats",
    component: ATSModern,
    thumbnail: "/images/templates/ats-modern.png",
  },

  {
    id: "ats-classic",
    name: "ATS Classic",
    category: "ats",
    component: ATSClassic,
    thumbnail: "/images/templates/ats-classic.png",
  },

  {
    id: "creative-modern",
    name: "Creative Modern",
    category: "kreatif",
    component: CreativeModern,
    thumbnail: "/images/templates/creative-modern.png",
  },
];