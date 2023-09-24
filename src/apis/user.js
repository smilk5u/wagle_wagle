import { client } from "./index";

// 로그인 시 post 요청
export const loginApi = async (payload) => {
  const response = await client.post("/users/login", payload);
  return response;
};

export const checkEmailApi = async (payload) => {
  const response = await client.get("/users/duplicate-check", {
    params: {
      email: payload,
    },
  });
  return response;
};

// 회원가입 시 post 요청
export const joinApi = async (payload) => {
  const response = await client.post("/users/signup", payload);
  return response;
};

// TODO-GOGI : 호패api 나오면 추가
// export const makeHopaeApi = async () => {
//   const response = await client.post("/");
//   return response;
// };
