import React from 'react';
import {Link} from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = (): JSX.Element => {
    // functional component that shows the list of seurveys the user created and a button to create a new survey
    return (
        <div>
            <SurveyList/>
            <div className="fixed-action-btn">
                <Link to='/surveys/new' className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;