"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var recipientSchema = new mongoose_1.Schema({
    email: String,
    responded: { type: Boolean, default: false }
});
exports.default = recipientSchema;
// this is a mongodb subdocument.
