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
var styled_components_1 = __importDefault(require("styled-components"));
var semantic_ui_react_1 = require("semantic-ui-react");
var store_1 = require("../helpers/store");
var ListLogs_1 = __importDefault(require("./ListLogs"));
var SCard = styled_components_1.default(semantic_ui_react_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  && {\n    width: 768px;\n    min-width: 320px;\n  }\n"], ["\n  && {\n    width: 768px;\n    min-width: 320px;\n  }\n"])));
var Logs = /** @class */ (function (_super) {
    __extends(Logs, _super);
    function Logs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logs.prototype.render = function () {
        var logs = store_1.read("logs");
        logs = logs || [];
        return (react_1.default.createElement(SCard, null,
            react_1.default.createElement(semantic_ui_react_1.Card.Content, null,
                react_1.default.createElement(semantic_ui_react_1.Card.Header, null, "Logs"),
                react_1.default.createElement(semantic_ui_react_1.Card.Description, null, "Here are your logs.")),
            react_1.default.createElement(semantic_ui_react_1.Card.Content, null,
                react_1.default.createElement(ListLogs_1.default, { logs: logs }))));
    };
    return Logs;
}(react_1.Component));
exports.default = Logs;
var templateObject_1;
//# sourceMappingURL=Logs.js.map