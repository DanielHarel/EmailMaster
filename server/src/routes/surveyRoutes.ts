import * as _ from 'lodash';
import  { Path } from 'path-parser';
import  { URL } from 'url';
import  mongoose from 'mongoose';
import  requireLogin from '../middlewares/requireLogin';
import  requireCredits from '../middlewares/requireCredits';
import  Mailer from '../services/Mailer';
import  surveyTemplate from '../services/emailTemplates/surveyTemplate';
import { Express, Request, Response } from 'express';

const Survey = mongoose.model('surveys');

const surveyRoutes = (app: Express) => {

    app.get('/api/surveys', requireLogin, async (req: Request, res: Response) => {
        const surveys = await Survey.find({_user: req.user!.id})
            .select({ recipients: false });

        res.send(surveys);
    });

    /* when a user votes on their email 2 things happen: a get request with the survey id and users choice is
    is sent and gets the response of 'thanks for voting", and a post request is made for the 
    following route: /api/surveys/webhook
    */
    app.get('/api/surveys/:surveyId/:choice', (req: Request, res: Response) => {
        res.send('Thanks for voting!')
    });

    /* this post request is done by sendgrid to this route (defined on the sendgrid dashboard) and includes all 
    the get requests made to /api/surveys/:surveyId/:choice, and the request bodies.
    */
    app.post('/api/surveys/webhooks', (req: Request, res: Response) => {

        /* the surveyId and the choice of the user are extracted from the
        get request to the /api/surveys/:surveyId/:choice path 
        the following const p defines for the Path object how to parse any given route.
        */
        const p = new Path('/api/surveys/:surveyId/:choice');

        /* the req.body sent by sendgrid will be an array of objects, each containing the user email, the route that was
        recorded on the get request and answer.
        the following chain of functions parses the routes into user Ids, answers, and user emails. 
        It then removes from the array any objects that don't contain all three, and then removes
        any duplicates (may occur if a user answered one survey more than once).
        */
        _.chain(req.body)
            .map(({email, url}) => {
                /* match applies the "test" method of the our created const p to the url in the current item we
                are mapping over. if the url conformes to the proparties defined earlier in const p, const match
                will be created (an object) and will include a surveyId and choice keys, otherwise match will equal "null".
                */
                const match = p.test(new URL(url).pathname);
                if (match) {
                    return {email: email, surveyId: match.surveyId, choice: match.choice};
                }
            })
            .compact() /*this removes any 'undefined' items from the array of objects (created as a result of
                records that were made by users that opened the survey email and did not choose an answer, thus recorded
                on sendgrid as "bounce").
                */
            //@ts-ignore
            .uniqBy<>('email', 'surveyId')
            .each(({surveyId, email, choice}) => {
                Survey.updateOne({
                    _id: surveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false}
                    }
                }, {
                    $inc: { [choice]: 1 },
                    $set: { 'recipients.$.responded': true },
                    lastResponded: new Date()
                }).exec();
            })
            .value();

        res.send({});
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req: Request, res: Response) => {

        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title: title,
            body: body,
            subject: subject,
            recipients: recipients.split(',').map((email: string) => ({ email: email.trim() })),
            _user: req.user!.id,
            dateSent: Date.now()
        });

        //@ts-ignore
        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();
            await survey.save();
            req.user!.credits -= 1;
            const user = await req.user!.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
};

export default surveyRoutes;