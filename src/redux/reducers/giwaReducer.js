import { SELECT_GIWA, WRITE_GUEST_TEXT } from "../actions/giwaActions";

const initialState = {
  number: null,
  text: "",
};

// user의 로그인 유지와 로그아웃을 위한 Reducer
export const giwaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GIWA:
      return {
        ...state,
        number: action.payload,
      };
    case WRITE_GUEST_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};
