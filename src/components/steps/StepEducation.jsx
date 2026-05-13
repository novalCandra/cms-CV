import { useState } from "react";

export default function StepEducation({ educations, setEducations }) {
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ sekolah: "", jurusan: "", masuk: "", lulus: "" });

  const openAdd = () => {
    setEditId(null);
    setForm({ sekolah: "", jurusan: "", masuk: "", lulus: "" });
    setShowModal(true);
  };

  const openEdit = (edu) => {
    setEditId(edu.id);
    setForm({ sekolah: edu.sekolah, jurusan: edu.jurusan, masuk: edu.masuk, lulus: edu.lulus });
    setShowModal(true);
  };

  const saveEducation = () => {
    if (!form.sekolah) return;
    if (editId) {
      setEducations(educations.map(e => e.id === editId ? { ...form, id: editId } : e));
    } else {
      setEducations([...educations, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-slate-800">Pendidikan</h2>
        <button onClick={openAdd} className="flex items-center gap-1.5 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">+ Tambah</button>
      </div>

      {educations.length === 0 && (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <p className="text-4xl mb-2">🎓</p>
          <p className="text-slate-500 text-sm">Belum ada data pendidikan.</p>
        </div>
      )}

      {educations.map((edu) => (
        <div key={edu.id} className="bg-white rounded-2xl border border-slate-200 p-4 flex gap-3">
          <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center text-lg shrink-0">🎓</div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-800 text-sm truncate">{edu.sekolah}</p>
            <p className="text-sm text-slate-500 truncate">{edu.jurusan}</p>
            <p className="text-xs text-slate-400 mt-0.5">{edu.masuk} — {edu.lulus}</p>
          </div>
          <div className="flex flex-col gap-1 shrink-0">
            <button onClick={() => openEdit(edu)} className="text-slate-400 hover:text-indigo-500 transition text-base">✏️</button>
            <button onClick={() => setEducations(educations.filter(e => e.id !== edu.id))} className="text-slate-300 hover:text-red-400 transition text-lg">✕</button>
          </div>
        </div>
      ))}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-2xl p-5 w-full sm:max-w-md shadow-xl">
            <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-4 sm:hidden" />
            <h3 className="font-semibold text-slate-800 mb-4">{editId ? "Edit Pendidikan" : "Tambah Pendidikan"}</h3>
            <div className="space-y-3">
              {[
                { label: "Nama Sekolah / Universitas", key: "sekolah", placeholder: "Universitas Indonesia" },
                { label: "Jurusan", key: "jurusan", placeholder: "Teknik Informatika" },
                { label: "Tahun Masuk", key: "masuk", placeholder: "2019" },
                { label: "Tahun Lulus", key: "lulus", placeholder: "2023" },
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
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowModal(false)} className="flex-1 border border-slate-200 rounded-xl py-2.5 text-sm text-slate-600 hover:bg-slate-50">Batal</button>
              <button onClick={saveEducation} className="flex-1 bg-indigo-600 text-white rounded-xl py-2.5 text-sm font-medium hover:bg-indigo-700">Simpan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
