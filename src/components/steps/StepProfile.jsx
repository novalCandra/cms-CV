import { useRef } from "react";

export default function StepProfile({ data, setData, errors }) {
  const fieldMap = {
  nama: "name",
  email: "email",
  telepon: "no_telp",
  domisili: "domisili",
  headline: "headline",
  perusahaan: "company",
};
  const fileRef = useRef(null);

const handlePhotoUpload = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  if (file.size > 2 * 1024 * 1024) {
    alert("Ukuran file melebihi 2MB");
    return;
  }

  setData({
    ...data,
    foto: file,
    previewFoto: URL.createObjectURL(file),
  });
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
        {(data.previewFoto || data.foto) ? (
          <img
            src={data.previewFoto || data.foto}
            alt="Foto profil"
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <span className="text-2xl">📷</span>
            <span className="text-xs text-slate-400 mt-1">Upload</span>
          </>
        )}
          </div>
          <input ref={fileRef} type="file" accept="image/jpeg,image/png" className="hidden" onChange={handlePhotoUpload} />
          {errors?.image && (
              <p className="text-red-500 text-xs mt-2">
                {errors.image[0]}
              </p>
            )}
          <div>
            <p className="text-sm text-slate-600">Format: JPG, PNG</p>
            <p className="text-sm text-slate-500">Maks. 2MB</p>
            {data.foto && (
              <button onClick={() => setData({ ...data, foto: null,  previewFoto: "", })} className="text-xs text-red-500 hover:underline mt-1">
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
              <label
                className={`block text-xs font-medium mb-1.5 ${
                  errors?.[fieldMap[key]]
                    ? "text-red-500"
                    : "text-slate-600"
                }`}
              >
                {label}
              </label>
                <input
                      className={`
                        w-full border rounded-lg px-3 py-2.5 text-sm
                        focus:outline-none focus:ring-2 transition
                        ${
                          errors?.[fieldMap[key]]
                            ? "border-red-500 focus:ring-red-300"
                            : "border-slate-200 focus:ring-indigo-300"
                        }
                      `}
                      placeholder={placeholder}
                      value={data[key] || ""}
                      onChange={(e) => setData({ ...data, [key]: e.target.value })}
                    />
              {errors?.[fieldMap[key]] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[fieldMap[key]][0]}
                </p>
              )}
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
              <label
              className={`block text-xs font-medium mb-1.5 ${
                errors?.[fieldMap[key]]
                  ? "text-red-500"
                  : "text-slate-600"
              }`}
            >
              {label}
            </label>
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
