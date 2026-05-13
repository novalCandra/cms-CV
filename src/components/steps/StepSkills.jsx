import { useState } from "react";

export default function StepSkills({ skills, setSkills }) {
  const [newSkill, setNewSkill] = useState("");
  const [level, setLevel] = useState(75);

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, { name: newSkill.trim(), level, id: Date.now() }]);
      setNewSkill("");
      setLevel(75);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6">
        <h2 className="font-semibold text-slate-800 mb-4">Tambah Skill</h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
          <div className="flex-1">
            <label className="block text-xs font-medium text-slate-600 mb-1.5">Nama Skill</label>
            <input
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="React.js, Laravel, Figma..."
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addSkill()}
            />
          </div>
          <div className="sm:w-40">
            <label className="block text-xs font-medium text-slate-600 mb-1.5">Level: {level}%</label>
            <input
              type="range" min="10" max="100" step="5"
              className="w-full accent-indigo-600"
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
            />
          </div>
          <button onClick={addSkill} className="bg-indigo-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
            + Tambah
          </button>
        </div>
      </div>

      {skills.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6">
          <h2 className="font-semibold text-slate-800 mb-4">Skill Kamu</h2>
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-3">
                <span className="text-sm text-slate-700 w-24 sm:w-28 shrink-0 truncate">{skill.name}</span>
                <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full transition-all" style={{ width: `${skill.level}%` }} />
                </div>
                <span className="text-xs text-slate-400 w-8 text-right shrink-0">{skill.level}%</span>
                <button onClick={() => setSkills(skills.filter(s => s.id !== skill.id))} className="text-slate-300 hover:text-red-400 transition shrink-0">✕</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {skills.length === 0 && (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <p className="text-4xl mb-2">⚡</p>
          <p className="text-slate-500 text-sm">Belum ada skill. Tambahkan di atas.</p>
        </div>
      )}
    </div>
  );
}
