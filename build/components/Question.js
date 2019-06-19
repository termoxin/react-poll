"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
var styled_components_1 = __importDefault(require("styled-components"));
var QuestionType_1 = __importDefault(require("./QuestionType"));
var merge_1 = __importDefault(require("../helpers/merge"));
var ButtonContent = styled_components_1.default(semantic_ui_react_1.Card.Content)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n"])));
var StyledCard = styled_components_1.default(semantic_ui_react_1.Card)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  && {\n    width: 600px;\n    min-width: 320px;\n  }\n"], ["\n  && {\n    width: 600px;\n    min-width: 320px;\n  }\n"])));
var CardHeader = styled_components_1.default(semantic_ui_react_1.Card.Header)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  && {\n    display: flex;\n    justify-content: space-evenly;\n  }\n"], ["\n  && {\n    display: flex;\n    justify-content: space-evenly;\n  }\n"])));
var StyledForm = styled_components_1.default(semantic_ui_react_1.Form)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n"], ["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n"])));
var CardTextID = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 13px;\n  font-weight: 400;\n"], ["\n  font-size: 13px;\n  font-weight: 400;\n"])));
var CardTextP = styled_components_1.default.p(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
semantic_ui_react_1.Button.displayName = "Button";
var Question = /** @class */ (function (_super) {
    __extends(Question, _super);
    function Question(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e, data) {
            var _a;
            var type = _this.props.type;
            var _b = _this.state, status = _b.status, inputValue = _b.inputValue;
            if (data) {
                var value = data.value, checked = data.checked;
                if (type === "radio" && status) {
                    _this.setState({
                        status: false
                    });
                }
                if (type === "checkbox") {
                    _this.setState({
                        inputValue: merge_1.default(inputValue, (_a = {}, _a[value] = checked, _a))
                    });
                }
                if (type === "fill" || type === "radio") {
                    _this.setState({ inputValue: value });
                }
            }
        };
        _this.handleCheckAnswer = function () {
            var _a = _this.props, correctAnswer = _a.correctAnswer, type = _a.type, handleChecking = _a.handleChecking, text = _a.text;
            var _b = _this.state, inputValue = _b.inputValue, status = _b.status;
            var handleCheckingOrPureFunction = handleChecking || function () { };
            if (type === "fill" || type === "radio") {
                var iv = inputValue.toString().toLowerCase();
                var ca = typeof correctAnswer !== "undefined" ? correctAnswer.toLowerCase() : "";
                var status_1 = iv === ca;
                _this.setState({
                    status: status_1
                });
            }
            if (type === "checkbox") {
                var currentAnswer = Object.keys(inputValue).filter(function (answer) { return inputValue[answer]; });
                if (currentAnswer.length !== correctAnswer.length) {
                    _this.setState({ status: false });
                }
                else {
                    var isCorrect = currentAnswer.every(function (a) { return correctAnswer.indexOf(a) > -1; });
                    _this.setState({
                        status: isCorrect
                    });
                }
            }
            _this.setState({
                disabled: true
            }, function () { return handleCheckingOrPureFunction(_this.state.status, text); });
        };
        _this.state = {
            inputValue: "",
            status: null,
            disabled: false
        };
        return _this;
    }
    Question.prototype.render = function () {
        var _a = this.props, text = _a.text, answers = _a.answers, type = _a.type, correctAnswer = _a.correctAnswer, id = _a.id, count = _a.count;
        var _b = this.state, inputValue = _b.inputValue, status = _b.status, disabled = _b.disabled;
        return (react_1.default.createElement(StyledCard, null,
            react_1.default.createElement(semantic_ui_react_1.Card.Content, null,
                react_1.default.createElement(semantic_ui_react_1.Card.Header, null,
                    react_1.default.createElement(CardTextID, null,
                        id,
                        "/",
                        count),
                    react_1.default.createElement(CardTextP, null, text)),
                react_1.default.createElement(semantic_ui_react_1.Card.Description, null, type !== "fill"
                    ? "Check that you consider correct."
                    : "Fill in this field.")),
            react_1.default.createElement(semantic_ui_react_1.Card.Content, null,
                react_1.default.createElement(StyledForm, null,
                    react_1.default.createElement(QuestionType_1.default, { type: type, value: inputValue, answers: answers, status: status, disabled: disabled, correctAnswer: correctAnswer, handleChange: this.handleChange }))),
            react_1.default.createElement(ButtonContent, null,
                react_1.default.createElement(semantic_ui_react_1.Button, { secondary: true, onClick: this.handleCheckAnswer, disabled: disabled }, "Ok"))));
    };
    Question.defaultProps = {
        type: "fill",
        disabled: false
    };
    return Question;
}(react_1.Component));
exports.default = Question;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Question.js.map