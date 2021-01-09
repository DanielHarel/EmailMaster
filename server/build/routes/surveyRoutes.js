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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var path_parser_1 = require("path-parser");
var url_1 = require("url");
var mongoose_1 = __importDefault(require("mongoose"));
var requireLogin_1 = __importDefault(require("../middlewares/requireLogin"));
var requireCredits_1 = __importDefault(require("../middlewares/requireCredits"));
var Mailer_1 = __importDefault(require("../services/Mailer"));
var surveyTemplate_1 = __importDefault(require("../services/emailTemplates/surveyTemplate"));
var Survey = mongoose_1.default.model('surveys');
var surveyRoutes = function (app) {
    app.get('/api/surveys', requireLogin_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var surveys;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Survey.find({ _user: req.user.id })
                        .select({ recipients: false })];
                case 1:
                    surveys = _a.sent();
                    res.send(surveys);
                    return [2 /*return*/];
            }
        });
    }); });
    /* when a user votes on their email 2 things happen: a get request with the survey id and users choice is
    is sent and gets the response of 'thanks for voting", and a post request is made for the
    following route: /api/surveys/webhook
    */
    app.get('/api/surveys/:surveyId/:choice', function (req, res) {
        res.send('Thanks for voting!');
    });
    /* this post request is done by sendgrid to this route (defined on the sendgrid dashboard) and includes all
    the get requests made to /api/surveys/:surveyId/:choice, and the request bodies.
    */
    app.post('/api/surveys/webhooks', function (req, res) {
        /* the surveyId and the choice of the user are extracted from the
        get request to the /api/surveys/:surveyId/:choice path
        the following const p defines for the Path object how to parse any given route.
        */
        var p = new path_parser_1.Path('/api/surveys/:surveyId/:choice');
        /* the req.body sent by sendgrid will be an array of objects, each containing the user email, the route that was
        recorded on the get request and answer.
        the following chain of functions parses the routes into user Ids, answers, and user emails.
        It then removes from the array any objects that don't contain all three, and then removes
        any duplicates (may occur if a user answered one survey more than once).
        */
        _.chain(req.body)
            .map(function (_a) {
            var email = _a.email, url = _a.url;
            /* match applies the "test" method of the our created const p to the url in the current item we
            are mapping over. if the url conformes to the proparties defined earlier in const p, const match
            will be created (an object) and will include a surveyId and choice keys, otherwise match will equal "null".
            */
            var match = p.test(new url_1.URL(url).pathname);
            if (match) {
                return { email: email, surveyId: match.surveyId, choice: match.choice };
            }
        })
            .compact() /*this removes any 'undefined' items from the array of objects (created as a result of
            records that were made by users that opened the survey email and did not choose an answer, thus recorded
            on sendgrid as "bounce").
            */
            //@ts-ignore
            .uniqBy('email', 'surveyId')
            .each(function (_a) {
            var _b;
            var surveyId = _a.surveyId, email = _a.email, choice = _a.choice;
            Survey.updateOne({
                _id: surveyId,
                recipients: {
                    $elemMatch: { email: email, responded: false }
                }
            }, {
                $inc: (_b = {}, _b[choice] = 1, _b),
                $set: { 'recipients.$.responded': true },
                lastResponded: new Date()
            }).exec();
        })
            .value();
        res.send({});
    });
    app.post('/api/surveys', requireLogin_1.default, requireCredits_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, title, subject, body, recipients, survey, mailer, user, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, title = _a.title, subject = _a.subject, body = _a.body, recipients = _a.recipients;
                    survey = new Survey({
                        title: title,
                        body: body,
                        subject: subject,
                        recipients: recipients.split(',').map(function (email) { return ({ email: email.trim() }); }),
                        _user: req.user.id,
                        dateSent: Date.now()
                    });
                    mailer = new Mailer_1.default(survey, surveyTemplate_1.default(survey));
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, mailer.send()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, survey.save()];
                case 3:
                    _b.sent();
                    req.user.credits -= 1;
                    return [4 /*yield*/, req.user.save()];
                case 4:
                    user = _b.sent();
                    res.send(user);
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _b.sent();
                    res.status(422).send(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); });
};
exports.default = surveyRoutes;
