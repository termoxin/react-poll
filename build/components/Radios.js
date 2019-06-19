"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
var RadioButton_1 = __importDefault(require("./RadioButton"));
var Radios = function (_a) {
    var answers = _a.answers, value = _a.value, handleChange = _a.handleChange, disabled = _a.disabled;
    return (react_1.default.createElement(react_1.default.Fragment, null, answers.map(function (answer) { return (react_1.default.createElement(semantic_ui_react_1.Form.Field, { key: answer.id, disabled: disabled },
        react_1.default.createElement(RadioButton_1.default, { text: answer.text, handleChange: handleChange, value: value }))); })));
};
exports.default = Radios;
//# sourceMappingURL=Radios.js.map