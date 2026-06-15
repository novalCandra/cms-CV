import api from "./api";

export const createPortfolio = async (data) => {
  return await api.post(
    "/portofolio",
    data,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
};

export const updatePortfolio = async (
  id,
  data
) => {
  return await api.post(
    `/portofolio/update/${id}`,
    data,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
};

export const deletePortfolio = async (
  id
) => {
  return await api.delete(
    `/portofolio/${id}`
  );
};

export const getPortfolioByUser = async (userId) => {
  const response = await api.get(
    `/portofolio/user/${userId}`
  );

  return response.data;
};