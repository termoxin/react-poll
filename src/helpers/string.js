export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomStr(length) {
  const chars = "1234567890abcdefghijklmnopqrstuvwxyz".split("");
  let str = "";

  for (let i = 0; i < length; i++) {
    str += chars[getRandomInt(0, chars.length)];
  }

  return str;
}
