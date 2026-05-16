import { useState, useRef } from "react";
// import CVPreviewTemplate from "../components/cv/CVPreviewTemplate";
import CVPreviewTemplate2 from "../components/cv/CVPreviewTemplate2";

export default function DownloadPage({ profile, experiences, educations, skills, projects, selectedTheme }) {
  const [format, setFormat] = useState("pdf");
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const cvRef = useRef(null);

  const handleDownload = async () => {
    setDownloading(true);
    await new Promise(r => setTimeout(r, 1200));
    const cvContent = cvRef.current?.innerHTML || "";
    const fileName = `CV-${(profile?.nama || "CV").replace(/\s+/g, "_")}`;

    if (format === "pdf") {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html><html><head>
          <title>${fileName}</title>
          <meta charset="utf-8"/>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: sans-serif; }
            @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
          </style>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
          </head><body>${cvContent}</body></html>
        `);
        printWindow.document.close();
        setTimeout(() => { printWindow.print(); }, 500);
      }
    } else {
      alert("Fitur download PNG memerlukan library html2canvas. Untuk saat ini, gunakan format PDF atau screenshot halaman ini.");
    }

    setDownloading(false);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="font-semibold text-slate-800">Download CV</h2>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setFormat("pdf")}
          className={`border-2 bg-white rounded-2xl p-4 md:p-6 text-center transition group ${format === "pdf" ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-slate-400"}`}
        >
          <p className="text-3xl md:text-4xl mb-2">📄</p>
          <p className={`font-semibold text-sm md:text-base ${format === "pdf" ? "text-indigo-700" : "text-slate-800"}`}>PDF</p>
          <p className="text-xs text-slate-500 mt-1 hidden sm:block">Format terbaik untuk dikirim</p>
          {format === "pdf" && <span className="text-xs text-indigo-600 font-medium">✓ Dipilih</span>}
        </button>
        <button
          onClick={() => setFormat("png")}
          className={`border-2 bg-white rounded-2xl p-4 md:p-6 text-center transition ${format === "png" ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-slate-400"}`}
        >
          <p className="text-3xl md:text-4xl mb-2">🖼️</p>
          <p className={`font-semibold text-sm md:text-base ${format === "png" ? "text-indigo-700" : "text-slate-800"}`}>PNG</p>
          <p className="text-xs text-slate-500 mt-1 hidden sm:block">Gambar kualitas tinggi</p>
          {format === "png" && <span className="text-xs text-indigo-600 font-medium">✓ Dipilih</span>}
        </button>
      </div>

      <div className="bg-slate-50 rounded-2xl p-3" ref={cvRef}>
        <CVPreviewTemplate2
          profile={profile}
          experiences={experiences}
          educations={educations}
          skills={skills}
          projects={projects}
          selectedTheme={selectedTheme}
        />
      </div>

      <button
        onClick={handleDownload}
        disabled={downloading}
        className={`w-full rounded-xl py-3 font-semibold text-sm transition flex items-center justify-center gap-2
          ${downloaded ? "bg-green-500 hover:bg-green-600 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"}
          ${downloading ? "opacity-70 cursor-wait" : ""}`}
      >
        {downloading ? (
          <><span className="animate-spin">⏳</span> Menyiapkan file...</>
        ) : downloaded ? (
          <>✅ Berhasil! Download lagi</>
        ) : (
          <>⬇️ Download CV sebagai {format.toUpperCase()}</>
        )}
      </button>

      {format === "pdf" && (
        <p className="text-center text-xs text-slate-400">PDF akan dibuka di tab baru. Pilih "Save as PDF" pada dialog print.</p>
      )}
    </div>
  );
}
