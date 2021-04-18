"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var redux_form_1 = require("redux-form");
var react_router_dom_1 = require("react-router-dom");
var SurveyField_1 = __importDefault(require("./SurveyField"));
var validateEmails_1 = require("../../utils/validateEmails");
var formFields_1 = __importDefault(require("./formFields"));
var SurveyForm = function (props) {
    // a redux-form functional component that utilises the validate funtion to check all the 
    // required fields in the form (all fields) were filled.
    var renderFields = function () {
        // maps over the different fields of the form as defined in formFields and renders them.
        return formFields_1.default.map(function (_a) {
            var label = _a.label, name = _a.name;
            return react_1.default.createElement(redux_form_1.Field, { key: name, component: SurveyField_1.default, type: "text", label: label, name: name });
        });
    };
    return (
    // renders the redux form with the fields rendered through renderFields. 
    react_1.default.createElement("form", { onSubmit: props.handleSubmit(function () { return props.onSurveySubmit(); }) },
        renderFields(),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/surveys", className: "red white-text darken-3 btn-flat" }, "Cancel"),
        react_1.default.createElement("button", { type: "submit", className: "indigo btn-flat right white-text" },
            "Next",
            react_1.default.createElement("i", { className: "material-icons right" }, "done"))));
};
var validate = function (values) {
    // a function to validate answers given in the redux-form component. iterates over the fields and returns an
    // error object for relevant fields.
    var errors = {};
    errors.recipients = validateEmails_1.validateEmails(values.recipients || '');
    formFields_1.default.forEach(function (field) {
        if (!values[field.name]) {
            errors[field.name] = 'You must provide a value';
        }
    });
    return errors;
};
var form = redux_form_1.reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
exports.default = react_redux_1.connect(null)(form);
