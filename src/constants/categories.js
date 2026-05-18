import {
  FileText,
  Palette,
  CalendarDays,
  Settings,
  GraduationCap,
} from "lucide-react";

export const CATEGORIES = [
  {
    id: "ats",
    label: "ATS",
    desc: "Ramah sistem rekrutmen",
    icon: FileText,
  },
  {
    id: "kreatif",
    label: "Kreatif",
    desc: "Desain ekspresif & modern",
    icon: Palette,
  },
  {
    id: "kronologis",
    label: "Kronologis",
    desc: "Urutan pengalaman terbaik",
    icon: CalendarDays,
  },
  {
    id: "fungsional",
    label: "Fungsional",
    desc: "Fokus pada keahlian",
    icon: Settings,
  },
  {
    id: "akademik",
    label: "Akademik",
    desc: "Ideal untuk riset",
    icon: GraduationCap,
  },
];