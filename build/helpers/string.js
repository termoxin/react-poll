"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomInt = getRandomInt;
function getRandomStr(length) {
    var chars = "1234567890abcdefghijklmnopqrstuvwxyz".split("");
    var str = "";
    for (var i = 0; i < length; i++) {
        str += chars[getRandomInt(0, chars.length)];
    }
    return str;
}
exports.getRandomStr = getRandomStr;
//# sourceMappingURL=string.js.map