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
var StyledInput = styled_components_1.default(semantic_ui_react_1.Input)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-self: stretch;\n  border-radius: 5px;\n  /* border: ", "; */\n"], ["\n  align-self: stretch;\n  border-radius: 5px;\n  /* border: ", "; */\n"])), function (props) { return (props.status ? "1px solid #10d4108a" : undefined); });
var Fill = function (_a) {
    var handleChange = _a.handleChange, status = _a.status, disabled = _a.disabled;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledInput, { disabled: disabled, status: status, placeholder: "Type your answer here", onChange: handleChange })));
};
exports.default = Fill;
var templateObject_1;
//# sourceMappingURL=Fill.js.map