"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        landingTextGrid: {
            width: '50%',
            textAlign: 'center'
        },
        mainContainer: {
            backgroundColor: '#bedcfa',
            height: '60rem'
        }
    });
});
// landing page
var Landing = function () {
    var classes = useStyles();
    return (react_1.default.createElement(core_1.Grid, { container: true, direction: 'column', className: classes.mainContainer },
        react_1.default.createElement(core_1.Grid, { item: true },
            react_1.default.createElement(core_1.Typography, { align: 'center', variant: 'h1' }, "Welcome to EmailMaster!")),
        react_1.default.createElement(core_1.Grid, { item: true, container: true, justify: 'center' },
            react_1.default.createElement(core_1.Grid, { item: true, className: classes.landingTextGrid },
                react_1.default.createElement(core_1.Typography, { align: 'center', variant: 'h4' }, "The webapp that lets you collect input from your users in 3 simple steps:"))),
        react_1.default.createElement(core_1.Grid, { item: true },
            react_1.default.createElement(core_1.Typography, { align: 'center', variant: 'h6' }, "Login with Google")),
        react_1.default.createElement(core_1.Grid, { item: true },
            react_1.default.createElement(core_1.Typography, { align: 'center', variant: 'h6' }, "Compile a survey")),
        react_1.default.createElement(core_1.Grid, { item: true },
            react_1.default.createElement(core_1.Typography, { align: 'center', variant: 'h6' }, "And monitor the feedback on your Dashboard!"))));
};
exports.default = Landing;
