import { client } from "./index";

export const makeGiwaHouseApi = async (payload) => {
  const response = await client.post("/broads", payload);
  return response;
};

export const getGiwaHouseApi = async (payload) => {
  const response = await client.get(`/broads/${payload}`);
  return response;
};

export const getGiwaListApi = async (payload) => {
  const response = await client.get(
    `/posts/all/${payload.broadId}?reverse=${payload.reverse}`
  );
  return response;
};

export const getGiwaDetailApi = async (payload) => {
  const response = await client.get(`/posts/detail/${payload}`);
  return response;
};
