import { LOGIN_USER, LOGOUT_USER, login, logout } from "../actions/userActions";

const initialState = {
  User: {
    id: "",
    name: "",
    loggedIn: false,
    data: {},
  },
};

// user의 로그인 유지와 로그아웃을 위한 Reducer
export const userCheckReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        User: {
          id: action.payload.id,
          name: action.payload.name,
          loggedIn: action.payload.loggedIn,
          data: action.payload.data,
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        User: {
          id: "",
          name: "",
          loggedIn: false,
          data: {},
        },
      };
    default:
      return state;
  }
};
