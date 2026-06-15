import api from "./api";

export const getKategori = async () => {
  const response = await api.get("/kategori");
  return response.data;
};

export const createKategori = async (payload) => {
  const response = await api.post("/kategori", payload);
  return response.data;
};

export const updateKategori = async (id, payload) => {
  const response = await api.put(`/kategori/${id}`, payload);
  return response.data;
};

export const deleteKategori = async (id) => {
  const response = await api.delete(`/kategori/${id}`);
  return response.data;
};