import { client } from "./index";

export const makeGiwaHouseApi = async (payload) => {
  const response = await client.post("/api/v1/broads", payload);
  return response;
};
