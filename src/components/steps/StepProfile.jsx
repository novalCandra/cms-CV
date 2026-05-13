import { useRef } from "react";

export default function StepProfile({ data, setData }) {
  const fileRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("Ukuran file melebihi 2MB. Silakan pilih foto yang lebih kecil.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setData({ ...data, foto: ev.target.result });
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6">
        <h2 className="font-semibold text-slate-800 mb-4">Foto Profil</h2>
        <div className="flex items-center gap-4">
          <div
            onClick={() => fileRef.current?.click()}
            className="w-20 h-20 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400 transition-colors shrink-0 overflow-hidden"
          >
            {data.foto ? (
              <img src={data.foto} alt="Foto profil" className="w-full h-full object-cover" />
            ) : (
              <>
                <span className="text-2xl">📷</span>
                <span className="text-xs text-slate-400 mt-1">Upload</span>
              </>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/jpeg,image/png" className="hidden" onChange={handlePhotoUpload} />
          <div>
            <p className="text-sm text-slate-600">Format: JPG, PNG</p>
            <p className="text-sm text-slate-500">Maks. 2MB</p>
            {data.foto && (
              <button onClick={() => setData({ ...data, foto: "" })} className="text-xs text-red-500 hover:underline mt-1">
                Hapus foto
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6">
        <h2 className="font-semibold text-slate-800 mb-4">Data Diri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Nama Lengkap", key: "nama", placeholder: "Andi Pratama" },
            { label: "Headline", key: "headline", placeholder: "Frontend Developer" },
            { label: "Email", key: "email", placeholder: "andi@email.com" },
            { label: "Nomor Telepon", key: "telepon", placeholder: "+62 812 3456 7890" },
            { label: "Domisili", key: "domisili", placeholder: "Jakarta, Indonesia" },
            { label: "Nama Perusahaan", key: "perusahaan", placeholder: "PT. ABC" },
          ].map(({ label, key, placeholder }) => (
            <div key={key}>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">{label}</label>
              <input
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
                placeholder={placeholder}
                value={data[key] || ""}
                onChange={(e) => setData({ ...data, [key]: e.target.value })}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6">
        <h2 className="font-semibold text-slate-800 mb-4">Sosial Media</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "LinkedIn", key: "linkedin", placeholder: "linkedin.com/in/andi" },
            { label: "GitHub", key: "github", placeholder: "github.com/andi" },
            { label: "Website", key: "website", placeholder: "andi.dev" },
            { label: "Instagram", key: "instagram", placeholder: "@andi_dev" },
          ].map(({ label, key, placeholder }) => (
            <div key={key}>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">{label}</label>
              <input
                className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
                placeholder={placeholder}
                value={data[key] || ""}
                onChange={(e) => setData({ ...data, [key]: e.target.value })}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
