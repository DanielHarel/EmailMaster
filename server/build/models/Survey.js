"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.surveySchema = void 0;
var mongoose_1 = require("mongoose");
var Recipient_1 = __importDefault(require("./Recipient"));
;
exports.surveySchema = new mongoose_1.Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [Recipient_1.default],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'EmailUser' },
    dateSent: Date,
    lastResponded: Date
});
exports.default = mongoose_1.model('surveys', exports.surveySchema);
