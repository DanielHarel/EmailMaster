"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var authRoutes = function (app) {
    app.get('/auth/google', passport_1.default.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get('/auth/google/callback', passport_1.default.authenticate('google'), function (req, res) {
        res.redirect('/surveys');
    });
    app.get('/api/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
    app.get('/api/current_user', function (req, res) {
        res.send(req.user);
    });
};
exports.default = authRoutes;
