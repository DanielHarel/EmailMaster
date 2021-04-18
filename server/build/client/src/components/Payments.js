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
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
var react_stripe_checkout_1 = __importDefault(require("react-stripe-checkout"));
var react_redux_1 = require("react-redux");
var actions = __importStar(require("../actions"));
// this functional component handles the Stripe api money charge and uses the stripe key. it take a token and handles
// it with the handleToken action supplied through the connect function as props
var Payments = function (props) {
    return (react_1.default.createElement(react_stripe_checkout_1.default, { name: "EmailMaster", description: "$5 for 5 email credits", amount: 500, token: function (token) { return props.handleToken(token); }, stripeKey: process.env.REACT_APP_STRIPE_KEY || '' },
        react_1.default.createElement(core_1.Button, { color: "inherit", variant: "outlined" }, "Add Credits")));
};
exports.default = react_redux_1.connect(null, actions)(Payments);
