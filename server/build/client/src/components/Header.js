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
var Payments_1 = __importDefault(require("./Payments"));
var core_1 = require("@material-ui/core");
var Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
//  this is the header functional component.
var Header = function (props) {
    var _a = react_1.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var useStyles = core_1.makeStyles(function (theme) { return ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }); });
    var classes = useStyles();
    var renderContent = function () {
        // renders the content of the header. if auth is undefined it renders login button. during the async request
        // (when the auth is null) it renders nothing. when auth is complete it renders the peyments component, users 
        // credit status and a logout button
        if (props.auth === null) {
            return;
        }
        if (!props.auth) {
            return (react_1.default.createElement(core_1.AppBar, { position: "static" },
                react_1.default.createElement(core_1.Toolbar, null,
                    react_1.default.createElement(core_1.Typography, { variant: "h6", className: classes.title },
                        react_1.default.createElement(core_1.Button, { color: "inherit", href: '/' }, "EmailMaster")),
                    react_1.default.createElement(core_1.Button, { color: "inherit", href: "/auth/google", variant: "outlined" }, "Login With Google"))));
        }
        else {
            return (react_1.default.createElement(core_1.AppBar, { position: "static" },
                react_1.default.createElement(core_1.Toolbar, null,
                    react_1.default.createElement(core_1.Typography, { variant: "h6", className: classes.title },
                        react_1.default.createElement(core_1.Button, { color: "inherit", href: '/surveys' }, "EmailMaster")),
                    react_1.default.createElement(core_1.Hidden, { mdUp: true },
                        react_1.default.createElement(core_1.Button, { "aria-controls": "simple-menu", "aria-haspopup": "true", onClick: handleClick },
                            react_1.default.createElement(Menu_1.default, { style: { color: '#FFFFFF' } })),
                        react_1.default.createElement(core_1.Menu, { id: "simple-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose },
                            react_1.default.createElement(core_1.MenuItem, { onClick: handleClose },
                                "Credits: ",
                                props.auth.credits),
                            react_1.default.createElement(core_1.MenuItem, { onClick: handleClose },
                                react_1.default.createElement(Payments_1.default, null)),
                            react_1.default.createElement(core_1.MenuItem, { onClick: handleClose },
                                react_1.default.createElement(core_1.Button, { color: "inherit", href: "/api/logout", variant: "outlined", style: { marginLeft: 20 } }, "LogOut")))),
                    react_1.default.createElement(core_1.Hidden, { only: ['xs', 'sm'] },
                        react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'space-between' } },
                            react_1.default.createElement(core_1.Typography, { variant: "h6", className: classes.title, style: { marginRight: 20 } },
                                "Credits: ",
                                props.auth.credits),
                            react_1.default.createElement(Payments_1.default, null),
                            react_1.default.createElement(core_1.Button, { color: "inherit", href: "/api/logout", variant: "outlined", style: { marginLeft: 20 } }, "LogOut"))))));
        }
    };
    return (react_1.default.createElement("div", null, renderContent()));
};
var mapStateToProps = function (state) {
    return { auth: state.auth };
};
exports.default = react_redux_1.connect(mapStateToProps)(Header);
