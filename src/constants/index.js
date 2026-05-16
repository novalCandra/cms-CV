import {
  User,
  Briefcase,
  GraduationCap,
  Zap,
  FolderKanban,
  Palette,
  Eye,
  FileText,
  CalendarDays,
  Settings,
} from "lucide-react";

export const STEPS = [
  { id: 1, label: "Profile", icon: User },
  { id: 2, label: "Experience", icon: Briefcase },
  { id: 3, label: "Education", icon: GraduationCap },
  { id: 4, label: "Skills", icon: Zap },
  { id: 5, label: "Portfolio", icon: FolderKanban },
  { id: 6, label: "Theme", icon: Palette },
  { id: 7, label: "Preview", icon: Eye },
];

export const THEMES = [
  {
    id: "minimalis",
    label: "Minimalis",
    color: "#f8fafc",
    accent: "#334155",
  },
  {
    id: "kreatif",
    label: "Kreatif",
    color: "#fdf4ff",
    accent: "#9333ea",
  },
  {
    id: "modern",
    label: "Modern",
    color: "#eff6ff",
    accent: "#2563eb",
  },
];

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