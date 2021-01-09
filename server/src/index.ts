import express, { Express } from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import bodyParser from 'body-parser';

const keys = require('./config/keys');
require('./models/EmailUser');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

import authRoutes from './routes/authRoutes';
import billingRoutes from './routes/billingRoutes';
import surveyRoutes from './routes/surveyRoutes';

const app: Express = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

declare global {
    namespace Express {
        interface User {
            credits: number;
            save: Function;
            id: string;
        }
    }
}

authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

// require('./routes/authRoutes')(app);
// require('./routes/billingRoutes')(app);
// require('./routes/surveyRoutes')(app);

// require('./routes/surveyRoutesJs')(app);

if (process.env.NODE_ENV === 'production')  {
    //making sure express will serve up production assets:
    app.use(express.static('client/build'));


    //express will serve up index.html if it doesnt recognize the route:
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);