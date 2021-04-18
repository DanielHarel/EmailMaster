"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import 'materialize-css/dist/css/materialize.min.css';
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var App_1 = __importDefault(require("./components/App"));
var reducers_1 = __importDefault(require("./reducers"));
var axios_1 = __importDefault(require("axios"));
//@ts-ignore
window.axios = axios_1.default;
var store = redux_1.createStore(reducers_1.default, {}, redux_1.applyMiddleware(redux_thunk_1.default));
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(App_1.default, null)), document.querySelector('#root'));
