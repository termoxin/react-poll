"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
function dateToStr(obj) {
    var date = date_fns_1.format(obj, "DD.MM.YYYY HH:mm:ss");
    return date;
}
exports.dateToStr = dateToStr;
//# sourceMappingURL=date.js.map