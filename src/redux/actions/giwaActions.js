// type 선언
export const SELECT_GIWA = "SELECT_GIWA";
export const WRITE_GUEST_TEXT = "WRITE_GUEST_TEXT";

// action
export const selectGiwa = (giwaNumber) => ({
  type: SELECT_GIWA,
  payload: giwaNumber,
});

export const writeGuestText = (text) => ({
  type: WRITE_GUEST_TEXT,
  payload: text,
});
