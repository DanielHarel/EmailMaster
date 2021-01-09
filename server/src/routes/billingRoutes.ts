import keys from '../config/keys';

// import stripe from 'stripe'(keys.stripeSecretKey);

import Stripe from 'stripe';
// @ts-ignore - keys.stripeSecretKey will never be nul
const stripe = new Stripe(keys.stripeSecretKey, {
  apiVersion: "2020-08-27",
});

import requireLogin from '../middlewares/requireLogin';

import { Express, Request, Response } from 'express';



const billingRoutes = (app: Express) => {
    app.post('/api/stripe', requireLogin, async (req: Request, res: Response) => {

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        req.user!.credits += 5;

        const user = await req.user!.save();

        res.send(user);
    });
};

export default billingRoutes;