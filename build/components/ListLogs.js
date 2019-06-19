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
var date_1 = require("../helpers/date");
var List = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var ListItem = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-grow: 1;\n  font-size: 16px;\n  margin: 10px;\n\n  * {\n    display: flex;\n    justify-content: flex-start;\n    flex: 1 1 0%;\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  flex-grow: 1;\n  font-size: 16px;\n  margin: 10px;\n\n  * {\n    display: flex;\n    justify-content: flex-start;\n    flex: 1 1 0%;\n    align-items: center;\n  }\n"])));
var Id = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-basis: 5%;\n  flex-grow: 0;\n  font-weight: 700;\n"], ["\n  flex-basis: 5%;\n  flex-grow: 0;\n  font-weight: 700;\n"])));
var Date = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 900;\n  color: #9a9a9a;\n  margin: 10px;\n"], ["\n  font-weight: 900;\n  color: #9a9a9a;\n  margin: 10px;\n"])));
var Name = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var Correct = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: green;\n"], ["\n  color: green;\n"])));
var Overall = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: black;\n"], ["\n  color: black;\n"])));
var ListLogs = function (_a) {
    var logs = _a.logs;
    return (react_1.default.createElement(List, null, (logs || []).map(function (_a, index) {
        var id = _a.id, name = _a.name, date = _a.date, correct = _a.correct, overall = _a.overall;
        return (react_1.default.createElement(ListItem, { key: id },
            react_1.default.createElement(Id, null,
                index + 1,
                "."),
            react_1.default.createElement(Name, null, name),
            react_1.default.createElement(Correct, null,
                correct,
                "/",
                react_1.default.createElement(Overall, null, overall)),
            react_1.default.createElement(Date, null, date_1.dateToStr(date))));
    })));
};
exports.default = ListLogs;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=ListLogs.js.map