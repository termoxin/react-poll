export function localStorage() {
  return window.localStorage;
}

export function readJSON(json) {
  return JSON.parse(json);
}

export function toJSON(json) {
  return JSON.stringify(json);
}

export function read(key) {
  return readJSON(localStorage().getItem(key));
}

export function write(key, data) {
  return localStorage().setItem(key, toJSON(data));
}

export function each(fn) {
  for (let i = localStorage().length - 1; i >= 0; i--) {
    const key = localStorage().key(i);
    fn(read(key), key);
  }
}

export function remove(key) {
  return localStorage().removeItem(key);
}

export function clearAll() {
  return localStorage().clear();
}
