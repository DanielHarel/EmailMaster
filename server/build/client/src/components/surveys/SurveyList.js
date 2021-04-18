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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jsx-a11y/anchor-is-valid */
var core_1 = require("@material-ui/core");
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var actions_1 = require("../../actions");
var SurveyList = function (props) {
    var useStyles = core_1.makeStyles({
        root: {
            minWidth: 275,
            backgroundColor: '#CFD4EC',
            margin: '10px 20px 10px 20px',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });
    var classes = useStyles();
    // a functional component to show the users past surveys. uses useEffect to fetch the users surveys on first load.
    react_1.useEffect(function () {
        props.fetchSurveys();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var renderSurveys = function () {
        // this function takes all the surveys that arrive in array form and maps over them, rendering each one into a card.
        // uses reverse() to show the most recent surveys first.
        return props.surveys.reverse().map(function (survey) {
            return (react_1.default.createElement(core_1.Card, { className: classes.root, key: survey._id },
                react_1.default.createElement(core_1.CardContent, null,
                    react_1.default.createElement(core_1.Typography, { variant: "h5", component: "h2" }, survey.title),
                    react_1.default.createElement(core_1.Typography, { className: classes.pos, color: "textSecondary" }, survey.body),
                    react_1.default.createElement(core_1.Typography, { variant: "body2", component: "p" },
                        "Sent on: ",
                        new Date(survey.dateSent).toLocaleDateString())),
                react_1.default.createElement(core_1.CardActions, null,
                    react_1.default.createElement(core_1.Button, { size: "small" },
                        "Yes: ",
                        survey.yes),
                    react_1.default.createElement(core_1.Button, { size: "small" },
                        "No: ",
                        survey.no))));
        });
    };
    return (
    // since renderSurveys returns an array, a reactFragment is needed.
    react_1.default.createElement(react_1.default.Fragment, null, renderSurveys()));
};
var mapStateToProps = function (state) {
    return { surveys: state.surveys };
};
exports.default = react_redux_1.connect(mapStateToProps, { fetchSurveys: actions_1.fetchSurveys })(SurveyList);
