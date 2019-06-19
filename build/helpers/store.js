"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function localStorage() {
    return window.localStorage;
}
exports.localStorage = localStorage;
function readJSON(json) {
    return JSON.parse(json);
}
exports.readJSON = readJSON;
function toJSON(json) {
    return JSON.stringify(json);
}
exports.toJSON = toJSON;
function read(key) {
    return readJSON(localStorage().getItem(key));
}
exports.read = read;
function write(key, data) {
    return localStorage().setItem(key, toJSON(data));
}
exports.write = write;
function each(fn) {
    for (var i = localStorage().length - 1; i >= 0; i--) {
        var key = localStorage().key(i);
        fn(read(key), key);
    }
}
exports.each = each;
function remove(key) {
    return localStorage().removeItem(key);
}
exports.remove = remove;
function clearAll() {
    return localStorage().clear();
}
exports.clearAll = clearAll;
//# sourceMappingURL=store.js.map