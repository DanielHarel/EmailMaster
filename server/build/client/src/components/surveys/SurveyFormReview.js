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
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var formFields_1 = __importDefault(require("./formFields"));
var actions = __importStar(require("../../actions"));
var react_router_dom_1 = require("react-router-dom");
var useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        contentGrid: {
            width: '75%',
            marginTop: '2.5em'
            // textAlign: 'center'
        },
        mainContainer: {
            backgroundColor: '#bedcfa',
            height: '60rem'
        }
    });
});
var SurveyFormReview = function (_a) {
    var onCancel = _a.onCancel, formValues = _a.formValues, submitSurvey = _a.submitSurvey, history = _a.history;
    // functional component that enables the user to review the survey before it is sent out.
    var classes = useStyles();
    var reviewFields = formFields_1.default.map(function (_a) {
        var name = _a.name, label = _a.label;
        // maps over the different fields of the form as defined in formFields and renders them.
        return (react_1.default.createElement("div", { key: name },
            react_1.default.createElement("label", null, label),
            react_1.default.createElement("div", null, formValues[name])));
    });
    return (
    // renders the review window, a cancel button to call onCancel supplied through SurveyNew component and toggles
    // the component state and Send button that calls submitSurvey action and hands the form values
    // and history String[] retirived from RouteComponentProps of react-router-dom to change the history
    // <div>
    //     <h5>Please review your entries</h5>
    //     {reviewFields}
    //      <button className="red white-text darken-3 btn-flat" onClick={() => onCancel()}>Back</button>
    //      <button className="green white-text btn-flat right" onClick={() => submitSurvey(formValues, history)}>
    //         Send Survey
    //         <i className="material-icons right">email</i>
    //      </button>
    // </div>
    react_1.default.createElement(core_1.Grid, { container: true, direction: 'column' },
        react_1.default.createElement(core_1.Grid, { item: true, container: true, justify: 'center' },
            react_1.default.createElement(core_1.Grid, { item: true, className: classes.contentGrid },
                react_1.default.createElement("h5", null, "Please review your entries"),
                reviewFields),
            react_1.default.createElement(core_1.Grid, { item: true, className: classes.contentGrid },
                react_1.default.createElement("button", { className: "red white-text darken-3 btn-flat", onClick: function () { return onCancel(); } }, "Back"),
                react_1.default.createElement("button", { className: "green white-text btn-flat right", onClick: function () { return submitSurvey(formValues, history); } },
                    "Send Survey",
                    react_1.default.createElement("i", { className: "material-icons right" }, "email"))))));
};
var mapStateToProps = function (state) {
    return { formValues: state.form.surveyForm.values };
};
exports.default = react_redux_1.connect(mapStateToProps, actions)(react_router_dom_1.withRouter(SurveyFormReview));
