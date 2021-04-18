"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SurveyField = function (_a) {
    var input = _a.input, label = _a.label, _b = _a.meta, error = _b.error, touched = _b.touched;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("label", null, label),
        react_1.default.createElement("input", __assign({}, input, { style: { marginBottom: '5px' } })),
        react_1.default.createElement("div", { className: "red-text", style: { marginBottom: '20px' } }, touched && error)));
};
exports.default = SurveyField;
