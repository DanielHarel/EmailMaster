import React, { useState } from 'react';
import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import 'materialize-css/dist/css/materialize.min.css';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        contentGrid: {
            width: '75%',
            marginTop: '2.5em'
        },
        mainContainer: {
            backgroundColor: '#bedcfa',
            height: '60rem'
        }
    })    
);

const SurveyNew: React.FC = (): JSX.Element => {
    // a functional component to create a new survey. uses usestate to toggle for creating a survey to reviewing it.
    const classes = useStyles();
    
    const [showFormReview, setShowFormReview] = useState(false);

    const renderContent = (): JSX.Element => {
        if (showFormReview) {
            return <SurveyFormReview onCancel={() => setShowFormReview(false)} />;
        }

        return <SurveyForm onSurveySubmit={() => setShowFormReview(true)} />;
    }


    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid item container justify='center'>
                <Grid item className={classes.contentGrid}>
                    {renderContent()}
                </Grid>
            </Grid>
        </Grid>   
        );

}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);