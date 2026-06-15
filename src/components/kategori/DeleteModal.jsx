export default function DeleteModal({
  open,
  onClose,
  onConfirm,
  kategori,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm">
        <h2 className="text-xl font-bold mb-2">
          Hapus Kategori
        </h2>

        <p className="text-gray-500 mb-5">
          Yakin ingin menghapus kategori
          <strong>
            {" "}
            {kategori?.name}
          </strong>
          ?
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Batal
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}