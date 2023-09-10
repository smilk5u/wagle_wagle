export const KAKAO_REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URL}`;
export const KAKAO_CLIENT_ID = `${process.env.REACT_APP_KAKAO_LOGIN_API_KEY}`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
