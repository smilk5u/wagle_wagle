import { client } from "./index";

export const makeGiwaHouseApi = async (payload) => {
  const response = await client.post("/api/v1/broads", payload);
  return response;
};

export const getGiwaHouseApi = async (payload) => {
  const response = await client.get(`/api/v1/broads/${payload}`);
  return response;
};

export const getGiwaListApi = async (payload) => {
  const response = await client.get(
    `/api/v1/posts/all/${payload.broadId}?reverse=${payload.reverse}`
  );
  return response;
};

export const getGiwaDetailApi = async (payload) => {
  const response = await client.get(`/api/v1/posts/detail/${payload}`);
  return response;
};

export const addGiwaApi = async (payload) => {
  const response = await client.post(`/api/v1/posts`, payload);
  return response;
};
