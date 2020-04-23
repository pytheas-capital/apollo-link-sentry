"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.isEmpty = function (target) { return (target == null || !(Object.keys(target) || target).length); };
exports.stringifyObject = function (target) { return (JSON.stringify(target, null, 2)); };
exports.trimObject = function (target) {
    if (exports.isEmpty(target))
        return {};
    return Object.keys(target)
        .filter(function (key) { return target === null || target === void 0 ? void 0 : target[key]; })
        .reduce(function (a, key) {
        var _a;
        return (tslib_1.__assign(tslib_1.__assign({}, a), (_a = {}, _a[key] = target[key], _a)));
    }, {});
};
//# sourceMappingURL=utils.js.map