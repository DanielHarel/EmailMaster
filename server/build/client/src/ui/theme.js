"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
var blue1 = "#bedcfa";
var blue2 = "#98acf8";
var purple1 = "#b088f9";
var purple2 = "#da9ff9";
exports.default = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: purple1
        },
        secondary: {
            main: blue1
        },
        blue1: {
            main: blue1
        },
        blue2: {
            main: blue2
        },
        purple1: {
            main: purple1
        },
        purple2: {
            main: purple2
        },
    },
    typography: {
        h1: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: '3.5rem',
            lineHeight: '1.5'
        },
        h4: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: '2.5rem',
            lineHeight: '1.5'
        },
        h6: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: '1.5'
        }
    }
});
