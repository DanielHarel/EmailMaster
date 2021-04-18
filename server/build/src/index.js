"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var passport_1 = __importDefault(require("passport"));
var body_parser_1 = __importDefault(require("body-parser"));
var keys = require('./config/keys');
require('./models/EmailUser');
require('./models/Survey');
require('./services/passport');
mongoose_1.default.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
var billingRoutes_1 = __importDefault(require("./routes/billingRoutes"));
var surveyRoutes_1 = __importDefault(require("./routes/surveyRoutes"));
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cookie_session_1.default({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
authRoutes_1.default(app);
billingRoutes_1.default(app);
surveyRoutes_1.default(app);
// require('./routes/authRoutes')(app);
// require('./routes/billingRoutes')(app);
// require('./routes/surveyRoutes')(app);
// require('./routes/surveyRoutesJs')(app);
if (process.env.NODE_ENV === 'production') {
    //making sure express will serve up production assets:
    app.use(express_1.default.static('client/build'));
    //express will serve up index.html if it doesnt recognize the route:
    var path_1 = require('path');
    app.get('*', function (req, res) {
        res.sendFile(path_1.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
var PORT = process.env.PORT || 5000;
app.listen(PORT);
