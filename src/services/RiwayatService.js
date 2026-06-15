// services/RiwayatService.js

import api from "./api";

export const getRiwayat = async () => {
  const response = await api.get("/riwayat");
  return response.data;
};

export const saveRiwayat = async (payload) => {
  const response = await api.post("/riwayat", payload);
  return response.data;
};