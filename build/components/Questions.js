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
var Question_1 = __importDefault(require("./Question"));
var ScreenResult_1 = __importDefault(require("./ScreenResult"));
var constants_1 = require("../constants");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var Arrow = styled_components_1.default(semantic_ui_react_1.Icon)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  align-self: center;\n\n  && {\n    margin: 0 10px 0 10px;\n  }\n"], ["\n  cursor: pointer;\n  align-self: center;\n\n  && {\n    margin: 0 10px 0 10px;\n  }\n"])));
var Questions = /** @class */ (function (_super) {
    __extends(Questions, _super);
    function Questions(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChecking = function (status, text) {
            _this.setState(function (state) {
                var _a;
                return ({
                    answers: __assign({}, state.answers, (_a = {}, _a[text] = status, _a))
                });
            });
        };
        _this.nextQuestion = function () {
            var indexQuestion = _this.state.indexQuestion;
            var questions = _this.props.questions;
            var qLength = questions.length;
            if (qLength - 1 > indexQuestion && qLength > 1) {
                _this.setState({
                    indexQuestion: indexQuestion + 1
                });
            }
        };
        _this.previousQuestion = function () {
            var indexQuestion = _this.state.indexQuestion;
            if (indexQuestion) {
                _this.setState({
                    indexQuestion: indexQuestion - 1
                });
            }
        };
        _this.state = {
            indexQuestion: 0,
            answers: {}
        };
        return _this;
    }
    Questions.prototype.render = function () {
        var _this = this;
        var _a = this.props, questions = _a.questions, type = _a.type, name = _a.name, logging = _a.logging, onDone = _a.onDone;
        var _b = this.state, answers = _b.answers, indexQuestion = _b.indexQuestion;
        var length = Object.keys(answers).length;
        var qsLength = [].length || questions.length;
        if (!qsLength) {
            return react_1.default.createElement(react_1.Fragment, null);
        }
        if (length === qsLength) {
            if (onDone) {
                onDone();
            }
            return react_1.default.createElement(ScreenResult_1.default, { answers: answers, logging: logging });
        }
        if (qsLength && type === constants_1.QUESTIONS_TYPES.LIST) {
            var qs = questions || [];
            return (react_1.default.createElement(react_1.default.Fragment, null, qs.map(function (q) { return (react_1.default.createElement(Question_1.default, __assign({ key: q.id, handleChecking: _this.handleChecking, count: qsLength }, q))); })));
        }
        if (qsLength && type === constants_1.QUESTIONS_TYPES.ARROWS) {
            var currectQuestion = questions[indexQuestion];
            return (react_1.default.createElement(Container, { key: currectQuestion.id },
                react_1.default.createElement(Arrow, { name: "arrow left", size: "big", onClick: this.previousQuestion }),
                react_1.default.createElement(Question_1.default, __assign({}, currectQuestion, { handleChecking: this.handleChecking, count: qsLength })),
                react_1.default.createElement(Arrow, { name: "arrow right", size: "big", onClick: this.nextQuestion })));
        }
    };
    Questions.defaultProps = {
        type: "list",
        questions: []
    };
    return Questions;
}(react_1.Component));
exports.default = Questions;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Questions.js.map