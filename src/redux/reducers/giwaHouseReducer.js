import { CHANGE_GIWA_HOUSE } from "../actions/giwaHouseActions";

const initialState = {
  giwaColor: 1,
  background: 1,
  friend: 1,
};

// user의 로그인 유지와 로그아웃을 위한 Reducer
export const giwaHouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GIWA_HOUSE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
