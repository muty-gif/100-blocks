const KEY = "100blocks_start";

export function saveStartTime(ts) {
  localStorage.setItem(KEY, String(ts));
}

export function loadStartTime() {
  const v = localStorage.getItem(KEY);
  return v ? Number(v) : null;
}

export function clearStartTime() {
  localStorage.removeItem(KEY);
}