import { useEffect, useState } from "react";

export default function KategoriModal({
  open,
  onClose,
  onSubmit,
  kategori,
}) {
  const [form, setForm] = useState({
    name: "",
    label: "",
    description: "",
  });

  useEffect(() => {
    if (kategori) {
      setForm({
        name: kategori.name,
        label: kategori.label,
        description:
          kategori.description || "",
      });
    } else {
      setForm({
        name: "",
        label:"",
        description: "",
      });
    }
  }, [kategori]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="font-bold text-xl mb-4">
          {kategori
            ? "Edit Kategori"
            : "Tambah Kategori"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Nama kategori"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
            required
          />
          <input
            type="text"
            placeholder="Label kategori"
            value={form.label}
            onChange={(e) =>
              setForm({
                ...form,
                label: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
            required
          />

          <textarea
            rows="4"
            placeholder="Deskripsi"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              Batal
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}