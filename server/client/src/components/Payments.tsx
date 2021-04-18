import { Button } from '@material-ui/core';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

interface PaymentsProps {
    handleToken: Function;
}

// this functional component handles the Stripe api money charge and uses the stripe key. it take a token and handles
// it with the handleToken action supplied through the connect function as props

const Payments = (props: PaymentsProps) => {
    return (
        <StripeCheckout
            name="EmailMaster"
            description="$5 for 5 email credits"
            amount={500}
            token={token => props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY || ''}
        >
        <Button color="inherit" variant="outlined">Add Credits</Button>
        </StripeCheckout>
    );
};


export default connect(null, actions)(Payments);