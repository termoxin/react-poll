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
var semantic_ui_react_1 = require("semantic-ui-react");
var styled_components_1 = __importDefault(require("styled-components"));
var StyledRadio = styled_components_1.default(semantic_ui_react_1.Radio)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* && label {\n    color: ", ";\n  } */\n"], ["\n  /* && label {\n    color: ", ";\n  } */\n"])), function (props) { return (props.status ? "#10d410" : ""); });
var RadioButton = function (_a) {
    var text = _a.text, value = _a.value, handleChange = _a.handleChange;
    var Comp = value === text ? StyledRadio : semantic_ui_react_1.Radio;
    return (react_1.default.createElement(Comp, { label: text, name: "answer", value: text, checked: value === text, onChange: handleChange }));
};
exports.default = RadioButton;
var templateObject_1;
//# sourceMappingURL=RadioButton.js.map