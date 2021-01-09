"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireCredits = function (req, res, next) {
    if (req.user.credits < 1) {
        return res.status(403).send({ error: 'Not enough credits!' });
    }
    next();
};
exports.default = requireCredits;
