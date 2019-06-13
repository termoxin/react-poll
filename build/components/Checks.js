"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var semantic_ui_react_1 = require("semantic-ui-react");
var StyledCheckbox = styled_components_1.default(semantic_ui_react_1.Checkbox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* && label {\n    color: ", ";\n  } */\n"], ["\n  /* && label {\n    color: ", ";\n  } */\n"])), function (props) { return (props.status ? "#10d410" : ""); });
var Checks = function (_a) {
    var answers = _a.answers, value = _a.value, handleChange = _a.handleChange, status = _a.status, correctAnswer = _a.correctAnswer, disabled = _a.disabled;
    return (react_1.default.createElement(react_1.default.Fragment, null, answers.map(function (answer) { return (react_1.default.createElement(semantic_ui_react_1.Form.Field, { key: answer.id },
        react_1.default.createElement(StyledCheckbox, { status: status && correctAnswer.indexOf(answer.text) > -1, label: answer.text, value: answer.text, name: "checkbox", disabled: disabled, onChange: handleChange }))); })));
};
exports.default = Checks;
var templateObject_1;
//# sourceMappingURL=Checks.js.map