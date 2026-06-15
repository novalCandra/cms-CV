import { useEffect, useState } from "react";
import {
  getKategori,
  createKategori,
  updateKategori,
  deleteKategori,
} from "../../services/kategoriService";

import KategoriModal from "../../components/kategori/KategoriModal";
import DeleteModal from "../../components/kategori/DeleteModal";

export default function KategoriPage() {
  const [kategori, setKategori] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selected, setSelected] = useState(null);

  const fetchKategori = async () => {
    try {
      setLoading(true);

      const response = await getKategori();

      setKategori(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
    useEffect(()=>{
    const fetchCategories =async ()=>{
      try {
        const data = await getKategori();

        setCategories(data.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchKategori();
  }, []);

  const handleAdd = () => {
    setSelected(null);
    setModalOpen(true);
  };

  const handleEdit = (item) => {
    setSelected(item);
    setModalOpen(true);
  };

  const handleDeleteClick = (item) => {
    setSelected(item);
    setDeleteOpen(true);
  };

  const handleSubmit = async (payload) => {
    try {
      if (selected) {
        await updateKategori(selected.id, payload);
      } else {
        await createKategori(payload);
      }

      setModalOpen(false);
      fetchKategori();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteKategori(selected.id);

      setDeleteOpen(false);
      fetchKategori();
    } catch (error) {
      console.error(error);
    }
  };

  const filtered = kategori.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            Kategori
          </h1>

          <p className="text-gray-500 text-sm">
            Kelola seluruh kategori CV
          </p>
        </div>

        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Tambah Kategori
        </button>
      </div>

      {/* Search */}

      <div className="bg-white rounded-xl p-4 shadow mb-4">
        <input
          type="text"
          placeholder="Cari kategori..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100">
              <th className="text-left p-4">ID</th>
              <th className="text-left p-4">Nama</th>
              <th className="text-left p-4">Label</th>
              <th className="text-left p-4">Deskripsi</th>
              <th className="text-center p-4">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-10"
                >
                  Loading...
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-10 text-gray-400"
                >
                  Tidak ada data kategori
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr
                  key={item.id}
                  className="border-t"
                >
                  <td className="p-4">
                    {item.id}
                  </td>

                  <td className="p-4 font-medium">
                    {item.name}
                  </td>

                  <td className="p-4 font-medium">
                    {item.label}
                  </td>

                  <td className="p-4">
                    {item.description}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() =>
                          handleEdit(item)
                        }
                        className="px-3 py-1 bg-yellow-500 text-white rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteClick(item)
                        }
                        className="px-3 py-1 bg-red-600 text-white rounded"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <KategoriModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        kategori={selected}
      />

      <DeleteModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        kategori={selected}
      />
    </div>
  );
}