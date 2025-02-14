import { LOGIN_USER, LOGOUT_USER, MAKE_HOPAE } from "../actions/userActions";

const initialState = {
  email: "",
  userId: "",
  username: "",
  loggedIn: false,
  memberType: "",
  broadId: 0,
};

// user의 로그인 유지와 로그아웃을 위한 Reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userId: action.payload.userId,
        username: action.payload.username,
        loggedIn: true,
      };
    case LOGOUT_USER:
      return initialState;
    case MAKE_HOPAE:
      return {
        ...state,
        email: action.payload.email,
        memberType: action.payload.memberType,
        broadId: action.payload.broadId,
        username: action.payload.userName,
      };
    default:
      return state;
  }
};
