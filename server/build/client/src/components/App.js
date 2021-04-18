"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var actions = __importStar(require("../actions"));
var styles_1 = require("@material-ui/core/styles");
var theme_1 = __importDefault(require("../ui/theme"));
var Header_1 = __importDefault(require("./Header"));
var Landing_1 = __importDefault(require("./Landing"));
var Dashboard_1 = __importDefault(require("./Dashboard"));
var SurveyNew_1 = __importDefault(require("./surveys/SurveyNew"));
var App = function (props) {
    // the main App functional component. when it first loads up it uses useEffect to call the fetchUser action in order to
    // check if the current user is logged in, and if so, what are his relevant details.
    react_1.useEffect(function () {
        props.fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(styles_1.ThemeProvider, { theme: theme_1.default },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(Header_1.default, null),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Landing_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/surveys", component: Dashboard_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/surveys/new", component: SurveyNew_1.default })))));
};
exports.default = react_redux_1.connect(null, actions)(App);
