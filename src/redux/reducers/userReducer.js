import { LOGIN_USER, LOGOUT_USER, MAKE_HOPAE } from "../actions/userActions";

const initialState = {
  id: "",
  name: "",
  loggedIn: false,
  data: {},
};

// user의 로그인 유지와 로그아웃을 위한 Reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        loggedIn: true,
        data: action.payload.data,
      };
    case LOGOUT_USER:
      return initialState;
    case MAKE_HOPAE:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
