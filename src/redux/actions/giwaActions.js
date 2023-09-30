// type 선언
export const SELECT_GIWA = "SELECT_GIWA";
export const WRITE_GUEST_TEXT = "WRITE_GUEST_TEXT";
export const WRITE_NICKNAME = "WRITE_NICKNAME";

// action
export const selectGiwa = (giwaNumber) => ({
  type: SELECT_GIWA,
  payload: giwaNumber,
});

export const writeGuestText = (text) => ({
  type: WRITE_GUEST_TEXT,
  payload: text,
});

export const writeNickName = (text) => ({
  type: WRITE_NICKNAME,
  payload: text,
});
