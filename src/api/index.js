const STORAGE_KEY = "contacts";

export function saveData(obj) {
  const arr = getData();
  arr.push(obj);
  saveArrData(arr);
}

export function getData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  } catch (err) {
    console.log(err.message);
  }
}

export function saveArrData(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}
