"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-anonymous-default-export */
var types_1 = require("../actions/types");
// this is the reducer for the surveys
exports.default = (function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case types_1.ActionTypes.FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
});
