export default function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-xs shadow-xl text-center">
        <div className="text-4xl mb-3">👋</div>

        <h3 className="font-bold text-slate-800 mb-1">
          Keluar dari CVcraft?
        </h3>

        <p className="text-sm text-slate-500 mb-5">
          Progress kamu akan tetap tersimpan di sesi ini.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 border border-slate-200 rounded-xl py-2.5 text-sm"
          >
            Batal
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 bg-red-500 text-white rounded-xl py-2.5 text-sm"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
} 