// 로컬스토리지에 값을 저장하는 메소드
export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// 로컬스토리지에서 값을 가져오는 메소드
export function getItem(key) {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
}

// 로컬스토리지에서 값을 제거하는 메소드
export function removeItem(key) {
  localStorage.removeItem(key);
}
