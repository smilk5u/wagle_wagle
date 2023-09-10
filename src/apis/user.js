import { client } from "./index";

// 로그인 시 post 요청
export const loginApi = async (payload) => {
  const response = await client.post("/authenticate", payload);
  return response;
};

// 회원가입 시 post 요청
export const joinApi = async (payload) => {
  const response = await client.post("/user/signup", payload);
  return response;
};

// TODO-GOGI : 테스트용으로 추후 삭제 예정
export const jwtTestApi = async () => {
  const response = await client.get("/api/v1/test");
  return response;
};
