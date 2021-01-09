"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var keys_1 = __importDefault(require("../../config/keys"));
var surveyTemplate = function (survey) {
    return "\n        <html>\n            <body>\n                <div style=\"text-align: center;\">\n                    <h3>I'd like your input!</h3>\n                    <p>Please answer the following question</p>\n                    <p>" + survey.body + "</p>\n                    <div>\n                        <a href=\"" + keys_1.default.redirectDomain + "/api/surveys/" + survey.id + "/yes\">Yes</a>\n                    </div>\n                    <div>\n                        <a href=\"" + keys_1.default.redirectDomain + "/api/surveys/" + survey.id + "/no\">No</a>\n                    </div>\n                </div>\n            </body>\n        </html>\n    ";
};
exports.default = surveyTemplate;
