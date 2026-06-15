import { useState } from "react";
import {
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from "../../services/PortfolioService";
const COLORS = [
  "bg-violet-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-amber-100",
  "bg-rose-100",
];
import API from "../../constants/data";

export default function StepPortfolio({
  projects,
  setProjects,
  errors,
}) {

  const [showModal, setShowModal] =
    useState(false);

  const [editId, setEditId] =
    useState(null);
  const [form, setForm] = useState({
    name: "",
    role: "",
    description: "",
    link: "",
    image: null,
    preview: "",
  });

  const openAdd = () => {
    setEditId(null);

    setForm({
      name: "",
      role: "",
      description: "",
      link: "",
      image: null,
      preview: "",
    });

    setShowModal(true);
  };

    const openEdit = (p) => {
    setEditId(p.id);

    setForm({
      name: p.name || "",
      role: p.role || "",
      description: p.description || "",
      link: p.link || "",

      image: null,

      galery_project: p.galery_project || "",

      preview: p.galery_project || "",
    });

    setShowModal(true);
  };
  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setForm({
      ...form,
      image: file,
      preview:
        URL.createObjectURL(file),
    });
  };

    const saveProject = async () => {

      try {

        const formData = new FormData();

        formData.append(
          "name",
          form.name
        );

        formData.append(
          "role",
          form.role
        );

        formData.append(
          "description",
          form.description
        );

        formData.append(
          "link",
          form.link
        );

        if (form.image) {
          formData.append(
            "galery_project",
            form.image
          );
        }

        if (editId) {

          const response =
            await updatePortfolio(
              editId,
              formData
            );

          setProjects(
            projects.map((p) =>
              p.id === editId
                ? response.data.data
                : p
            )
          );

        } else {

          const response =
            await createPortfolio(
              formData
            );

          setProjects([
            ...projects,
            response.data.data,
          ]);
        }

        setShowModal(false);

      } catch (err) {

        console.log(
          err.response?.data
        );
      }
    };

const getImageUrl = (path) => {

  if (!path) return "";

  if (path.startsWith("blob:")) {
    return path;
  }

  if (path.startsWith("http")) {
    return path;
  }

  if (path.startsWith("/")) {
    return `${API}${path}`;
  }

  return `${API}/${path}`;
};

  return (
    <div className="space-y-3">

      <div className="flex items-center justify-between">

        <h2 className="font-semibold text-slate-800">
          Portfolio
        </h2>

        <button
          onClick={openAdd}
          className="flex items-center gap-1.5 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
        >
          + Project
        </button>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        {projects.map((p) => (

          <div
            key={p.id}
            className={`bg-white rounded-2xl p-4 relative border border-slate-200`}
          >

            <div className="absolute top-3 right-3 flex gap-1">

              <button
                onClick={() =>
                  openEdit(p)
                }
                className="text-slate-400 hover:text-indigo-500 transition text-sm"
              >
                ✏️
              </button>

              <button
                onClick={async () => {
                  try {

                    await deletePortfolio(p.id);

                    setProjects(
                      projects.filter(
                        x => x.id !== p.id
                      )
                    );

                  } catch (err) {

                    console.log(
                      err.response?.data
                    );
                  }
                }}
                className="text-slate-400 hover:text-red-400 transition text-sm"
              >
                ✕
              </button>

            </div>

          <div className="mb-3">

              {p.galery_project || p.preview ? (

                <div className="w-full h-44 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center">

                  <img
                    src={getImageUrl(
                      p.preview || p.galery_project
                    )}
                    alt={p.name}
                    className="w-full h-full object-contain"
                  />

                </div>

              ) : (

                <div className="w-full h-44 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-sm border border-dashed border-slate-300">

                  Tidak ada gambar

                </div>

              )}

            </div>

            <p className="font-semibold text-slate-800 text-sm mb-1 pr-12 truncate">
              {p.name}
            </p>

            <p className="text-xs text-slate-500 mb-2">
              {p.role}
            </p>

            {p.description && (
              <p className="text-xs text-slate-600 mb-3 line-clamp-2">
                {p.description}
              </p>
            )}

            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-indigo-600 font-medium hover:underline"
              >
                Lihat Project →
              </a>
            )}

          </div>
        ))}

        {projects.length === 0 && (
          <div className="col-span-full bg-white rounded-2xl border border-dashed border-slate-300 p-10 text-center">

            <p className="text-4xl mb-2">
              🗂️
            </p>

            <p className="text-slate-500 text-sm">
              Belum ada project.
            </p>

          </div>
        )}

      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">

          <div className="bg-white rounded-t-3xl sm:rounded-2xl p-5 w-full sm:max-w-md shadow-xl max-h-[92vh] overflow-y-auto">

            <h3 className="font-semibold text-slate-800 mb-4">

              {editId
                ? "Edit Project"
                : "Tambah Project"}

            </h3>

            <div className="space-y-3">

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Nama Project
                </label>

                <input
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm ${
                    errors?.name
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                  placeholder="CV Builder"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name:
                        e.target.value,
                    })
                  }
                />

              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Role
                </label>

                <input
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm"
                  placeholder="Frontend Developer"
                  value={form.role}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      role:
                        e.target.value,
                    })
                  }
                />

              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Link
                </label>

                <input
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm ${
                    errors?.link
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                  placeholder="https://..."
                  value={form.link}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      link:
                        e.target.value,
                    })
                  }
                />

                {errors?.link && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.link[0]}
                  </p>
                )}

              </div>

              <div>

                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Gambar Project
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={
                    handleImageUpload
                  }
                />

                {errors?.galery_project && (
                  <p className="text-red-500 text-xs mt-1">
                    {
                      errors
                        .galery_project[0]
                    }
                  </p>
                )}

              </div>

              {(form.preview || form.galery_project) && (

                <div className="w-full h-52 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center">

                  <img
                    src={getImageUrl(
                      form.preview || form.galery_project
                    )}
                    alt="preview"
                    className="w-full h-full object-contain"
                  />

                </div>

              )}

              <div>

                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Deskripsi
                </label>

                <textarea
                  rows={3}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm"
                  value={form.description}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description:
                        e.target.value,
                    })
                  }
                />

              </div>

            </div>

            <div className="flex gap-3 mt-4">

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="flex-1 border border-slate-200 rounded-xl py-2.5 text-sm"
              >
                Batal
              </button>

              <button
                onClick={saveProject}
                className="flex-1 bg-indigo-600 text-white rounded-xl py-2.5 text-sm"
              >
                Simpan
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}