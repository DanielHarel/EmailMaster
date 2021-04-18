"use strict";
// this is strictly for development server. the folowwing middleware makes sure that the google auth procces can
// work with the target back-end localhost (which differs from the localhost used to run the fron-end).
var createProxyMiddleware = require("http-proxy-middleware").createProxyMiddleware;
module.exports = function (app) {
    app.use(["/api", "/auth/google"], createProxyMiddleware({
        target: "http://localhost:5000",
    }));
};
