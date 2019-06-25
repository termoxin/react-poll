"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
var styled_components_1 = __importDefault(require("styled-components"));
var semantic_ui_react_1 = require("semantic-ui-react");
var store_1 = require("../helpers/store");
var string_1 = require("../helpers/string");
var date_1 = require("../helpers/date");
var StyledCard = styled_components_1.default(semantic_ui_react_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  && {\n    width: 768px;\n    min-width: 320px;\n  }\n"], ["\n  && {\n    width: 768px;\n    min-width: 320px;\n  }\n"])));
var ListItem = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  font-size: 16px;\n  margin: 10px;\n"], ["\n  display: flex;\n  font-size: 16px;\n  margin: 10px;\n"])));
var DateItem = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 900;\n  color: #9a9a9a;\n  margin: 10px;\n"], ["\n  font-weight: 900;\n  color: #9a9a9a;\n  margin: 10px;\n"])));
var ResultItem = styled_components_1.default.h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  && {\n    margin: 5px;\n  }\n"], ["\n  && {\n    margin: 5px;\n  }\n"])));
var defaultProps = {
    answers: {},
    logging: false,
    name: "name_" + +new Date()
};
var ScreenResult = function (_a) {
    var answers = _a.answers, name = _a.name, logging = _a.logging;
    var logs = store_1.read("logs");
    if (!logs) {
        logs = [];
    }
    var getStatus = function (answer) {
        return answer ? (react_1.default.createElement(semantic_ui_react_1.Icon, { name: "check", color: "olive" })) : (react_1.default.createElement(semantic_ui_react_1.Icon, { name: "close", color: "red" }));
    };
    var numberOfCorrects = (function () {
        var id = string_1.getRandomStr(20);
        var date = new Date();
        var overall = Object.keys(answers).length;
        var correct = Object.values(answers).filter(function (answer) { return answer; }).length;
        if (logging) {
            store_1.write("logs", __spread(logs, [{ id: id, name: name, correct: correct, overall: overall, answers: answers, date: date }]));
        }
        return correct + "/" + overall;
    })();
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(StyledCard, null,
            react_1.default.createElement(semantic_ui_react_1.Card.Header, null,
                react_1.default.createElement(ResultItem, null, numberOfCorrects),
                react_1.default.createElement(DateItem, null, date_1.dateToStr(new Date()))),
            react_1.default.createElement(semantic_ui_react_1.Card.Content, null,
                react_1.default.createElement(semantic_ui_react_1.List, null, Object.keys(answers).map(function (answer) { return (react_1.default.createElement(ListItem, { key: answer },
                    getStatus(answers[answer]),
                    " ",
                    answer)); }))))));
};
ScreenResult.defaultProps = defaultProps;
exports.default = ScreenResult;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=ScreenResult.js.map