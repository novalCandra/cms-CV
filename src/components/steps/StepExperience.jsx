import { useState } from "react";

export default function StepExperience({ experiences, setExperiences }) {
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ perusahaan: "", posisi: "", lokasi: "", mulai: "", selesai: "", deskripsi: "" });

  const openAdd = () => {
    setEditId(null);
    setForm({ perusahaan: "", posisi: "", lokasi: "", mulai: "", selesai: "", deskripsi: "" });
    setShowModal(true);
  };

  const openEdit = (exp) => {
    setEditId(exp.id);
    setForm({ perusahaan: exp.perusahaan, posisi: exp.posisi, lokasi: exp.lokasi, mulai: exp.mulai, selesai: exp.selesai, deskripsi: exp.deskripsi });
    setShowModal(true);
  };

  const saveExperience = () => {
    if (!form.perusahaan) return;
    if (editId) {
      setExperiences(experiences.map(e => e.id === editId ? { ...form, id: editId } : e));
    } else {
      setExperiences([...experiences, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-slate-800">Pengalaman Kerja</h2>
        <button onClick={openAdd} className="flex items-center gap-1.5 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">+ Tambah</button>
      </div>

      {experiences.length === 0 && (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <p className="text-4xl mb-2">💼</p>
          <p className="text-slate-500 text-sm">Belum ada pengalaman. Klik tombol Tambah.</p>
        </div>
      )}

      {experiences.map((exp) => (
        <div key={exp.id} className="bg-white rounded-2xl border border-slate-200 p-4 flex gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm shrink-0">
            {exp.perusahaan.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-800 text-sm truncate">{exp.posisi}</p>
            <p className="text-sm text-slate-500 truncate">{exp.perusahaan} · {exp.lokasi}</p>
            <p className="text-xs text-slate-400 mt-0.5">{exp.mulai} — {exp.selesai || "Sekarang"}</p>
            {exp.deskripsi && <p className="text-sm text-slate-600 mt-1.5 line-clamp-2">{exp.deskripsi}</p>}
          </div>
          <div className="flex flex-col gap-1 shrink-0">
            <button onClick={() => openEdit(exp)} className="text-slate-400 hover:text-indigo-500 transition text-base">✏️</button>
            <button onClick={() => setExperiences(experiences.filter(e => e.id !== exp.id))} className="text-slate-300 hover:text-red-400 transition text-lg">✕</button>
          </div>
        </div>
      ))}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-2xl p-5 w-full sm:max-w-md shadow-xl max-h-[92vh] overflow-y-auto">
            <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-4 sm:hidden" />
            <h3 className="font-semibold text-slate-800 mb-4">{editId ? "Edit Pengalaman" : "Tambah Pengalaman"}</h3>
            <div className="space-y-3">
              {[
                { label: "Nama Perusahaan", key: "perusahaan", placeholder: "PT. Tech Indonesia" },
                { label: "Posisi", key: "posisi", placeholder: "Frontend Developer" },
                { label: "Lokasi", key: "lokasi", placeholder: "Jakarta" },
                { label: "Tanggal Mulai", key: "mulai", placeholder: "Jan 2022" },
                { label: "Tanggal Selesai", key: "selesai", placeholder: "Des 2023 (kosongkan jika masih)" },
              ].map(({ label, key, placeholder }) => (
                <div key={key}>
                  <label className="block text-xs font-medium text-slate-600 mb-1">{label}</label>
                  <input
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Deskripsi</label>
                <textarea
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
                  rows={3}
                  placeholder="Deskripsikan pekerjaan kamu..."
                  value={form.deskripsi}
                  onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
                />
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowModal(false)} className="flex-1 border border-slate-200 rounded-xl py-2.5 text-sm text-slate-600 hover:bg-slate-50">Batal</button>
              <button onClick={saveExperience} className="flex-1 bg-indigo-600 text-white rounded-xl py-2.5 text-sm font-medium hover:bg-indigo-700">Simpan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
