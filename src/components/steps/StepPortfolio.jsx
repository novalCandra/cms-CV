import { useState } from "react";

const COLORS = ["bg-violet-100", "bg-blue-100", "bg-green-100", "bg-amber-100", "bg-rose-100"];

export default function StepPortfolio({ projects, setProjects }) {
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ nama: "", role: "", deskripsi: "", link: "" });

  const openAdd = () => {
    setEditId(null);
    setForm({ nama: "", role: "", deskripsi: "", link: "" });
    setShowModal(true);
  };

  const openEdit = (p) => {
    setEditId(p.id);
    setForm({ nama: p.nama, role: p.role, deskripsi: p.deskripsi, link: p.link });
    setShowModal(true);
  };

  const saveProject = () => {
    if (!form.nama) return;
    if (editId) {
      setProjects(projects.map(p => p.id === editId ? { ...p, ...form } : p));
    } else {
      setProjects([...projects, { ...form, id: Date.now(), color: COLORS[projects.length % COLORS.length] }]);
    }
    setShowModal(false);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-slate-800">Portfolio</h2>
        <button onClick={openAdd} className="flex items-center gap-1.5 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">+ Project</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((p) => (
          <div key={p.id} className={`${p.color} rounded-2xl p-4 relative`}>
            <div className="absolute top-3 right-3 flex gap-1">
              <button onClick={() => openEdit(p)} className="text-slate-400 hover:text-indigo-500 transition text-sm">✏️</button>
              <button onClick={() => setProjects(projects.filter(x => x.id !== p.id))} className="text-slate-400 hover:text-red-400 transition text-sm">✕</button>
            </div>
            <p className="font-semibold text-slate-800 text-sm mb-1 pr-12 truncate">{p.nama}</p>
            <p className="text-xs text-slate-500 mb-2">{p.role}</p>
            {p.deskripsi && <p className="text-xs text-slate-600 mb-3 line-clamp-2">{p.deskripsi}</p>}
            {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-xs text-indigo-600 font-medium hover:underline">Lihat Project →</a>}
          </div>
        ))}
        {projects.length === 0 && (
          <div className="col-span-full bg-white rounded-2xl border border-dashed border-slate-300 p-10 text-center">
            <p className="text-4xl mb-2">🗂️</p>
            <p className="text-slate-500 text-sm">Belum ada project. Klik tombol Tambah.</p>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-2xl p-5 w-full sm:max-w-md shadow-xl max-h-[92vh] overflow-y-auto">
            <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-4 sm:hidden" />
            <h3 className="font-semibold text-slate-800 mb-4">{editId ? "Edit Project" : "Tambah Project"}</h3>
            <div className="space-y-3">
              {[
                { label: "Nama Project", key: "nama", placeholder: "CVcraft App" },
                { label: "Role", key: "role", placeholder: "Frontend Developer" },
                { label: "Link Project", key: "link", placeholder: "https://cvcraft.id" },
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
                  placeholder="Ceritakan projectmu..."
                  value={form.deskripsi}
                  onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
                />
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowModal(false)} className="flex-1 border border-slate-200 rounded-xl py-2.5 text-sm text-slate-600 hover:bg-slate-50">Batal</button>
              <button onClick={saveProject} className="flex-1 bg-indigo-600 text-white rounded-xl py-2.5 text-sm font-medium hover:bg-indigo-700">Simpan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
