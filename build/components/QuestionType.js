"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Radios_1 = __importDefault(require("./Radios"));
var Checks_1 = __importDefault(require("./Checks"));
var Fill_1 = __importDefault(require("./Fill"));
var QuestionType = function (_a) {
    var status = _a.status, type = _a.type, answers = _a.answers, rest = __rest(_a, ["status", "type", "answers"]);
    var validatedStatus = status ? "true" : "false";
    if (type === "checkbox") {
        return react_1.default.createElement(Checks_1.default, __assign({}, rest, { status: validatedStatus, answers: answers }));
    }
    if (type === "radio") {
        return react_1.default.createElement(Radios_1.default, __assign({}, rest, { status: validatedStatus, answers: answers }));
    }
    if (type === "fill") {
        return react_1.default.createElement(Fill_1.default, __assign({}, rest, { status: validatedStatus }));
    }
};
exports.default = QuestionType;
//# sourceMappingURL=QuestionType.js.map