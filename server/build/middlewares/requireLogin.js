"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireLogin = function (req, res, next) {
    if (!req.user) {
        return res.status(401).send({ error: 'you must log in!' });
    }
    next();
};
exports.default = requireLogin;
