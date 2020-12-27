import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew'

interface AppProps {
    fetchUser: Function;
}

const App = (props: AppProps): JSX.Element => {
    
    // the main App functional component. when it first loads up it uses useEffect to call the fetchUser action in order to
    // check if the current user is logged in, and if so, what are his relevant details.

    useEffect(() => {
        props.fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};


export default connect(null, actions)(App);