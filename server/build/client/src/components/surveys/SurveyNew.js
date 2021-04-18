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
var core_1 = require("@material-ui/core");
var redux_form_1 = require("redux-form");
var SurveyForm_1 = __importDefault(require("./SurveyForm"));
var SurveyFormReview_1 = __importDefault(require("./SurveyFormReview"));
require("materialize-css/dist/css/materialize.min.css");
var useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        contentGrid: {
            width: '75%',
            marginTop: '2.5em'
        },
        mainContainer: {
            backgroundColor: '#bedcfa',
            height: '60rem'
        }
    });
});
var SurveyNew = function () {
    // a functional component to create a new survey. uses usestate to toggle for creating a survey to reviewing it.
    var classes = useStyles();
    var _a = react_1.useState(false), showFormReview = _a[0], setShowFormReview = _a[1];
    var renderContent = function () {
        if (showFormReview) {
            return react_1.default.createElement(SurveyFormReview_1.default, { onCancel: function () { return setShowFormReview(false); } });
        }
        return react_1.default.createElement(SurveyForm_1.default, { onSurveySubmit: function () { return setShowFormReview(true); } });
    };
    return (react_1.default.createElement(core_1.Grid, { container: true, direction: 'column', className: classes.mainContainer },
        react_1.default.createElement(core_1.Grid, { item: true, container: true, justify: 'center' },
            react_1.default.createElement(core_1.Grid, { item: true, className: classes.contentGrid }, renderContent()))));
};
exports.default = redux_form_1.reduxForm({
    form: 'surveyForm'
})(SurveyNew);
