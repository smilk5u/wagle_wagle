import axios from "axios";
import { getItem } from "../utils/localStorage.js";

// 서버 통신을 위한 BASE_URL을 env 환경변수로 뺐습니다
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const client = axios.create({
  baseURL: `${BASE_URL}`,
});

// 요청보내기 전에 localstorage에 토큰이 있는지 판단 후
// 있으면 토큰 값을 요청에 담아서 보냅니다.
client.interceptors.request.use(async (config) => {
  const accessToken = getItem("AUTH");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
