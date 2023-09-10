// type 선언
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// action
export const login = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT_USER,
});
