"use strict";
// general email address validation function
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmails = void 0;
exports.validateEmails = function (emails) {
    var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var invalidEmails = emails
        .split(',')
        .map(function (email) { return email.trim(); })
        .filter(function (email) { return re.test(email) === false; });
    if (invalidEmails.length) {
        return "These emails are invalid: " + invalidEmails;
    }
    return;
};
