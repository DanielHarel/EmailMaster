"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_form_1 = require("redux-form");
var authReducer_1 = __importDefault(require("./authReducer"));
var surveysReducer_1 = __importDefault(require("./surveysReducer"));
// here the reducers are combined into the combineReducers function
exports.default = redux_1.combineReducers({
    auth: authReducer_1.default,
    form: redux_form_1.reducer,
    surveys: surveysReducer_1.default
});
