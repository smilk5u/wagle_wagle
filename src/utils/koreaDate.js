export const koreaDate = (time) => {
  const date = new Date(time * 1000);
  return {
    year: date.getFullYear().toString().slice(-2),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};
