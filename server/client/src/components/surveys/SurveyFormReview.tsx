import React from 'react';
import {connect} from 'react-redux';
import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import formFields from './formFields';
import * as actions from '../../actions';
import {withRouter, RouteComponentProps} from 'react-router-dom';

interface SurveyFormReviewProps {
    onCancel: Function;
    formValues: {
        [key:string]: string
    };
    submitSurvey: Function;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        contentGrid: {
            width: '75%',
            marginTop: '2.5em'
            // textAlign: 'center'
        },
        mainContainer: {
            backgroundColor: '#bedcfa',
            height: '60rem'
        }
    })    
);

const SurveyFormReview: React.FC<SurveyFormReviewProps & RouteComponentProps> = ({ onCancel, formValues, submitSurvey, history }): JSX.Element => {
    // functional component that enables the user to review the survey before it is sent out.
    const classes = useStyles();
    
    const reviewFields = formFields.map(({name, label}) => {
        // maps over the different fields of the form as defined in formFields and renders them.
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        // renders the review window, a cancel button to call onCancel supplied through SurveyNew component and toggles
        // the component state and Send button that calls submitSurvey action and hands the form values
        // and history String[] retirived from RouteComponentProps of react-router-dom to change the history
        // <div>
        //     <h5>Please review your entries</h5>
        //     {reviewFields}
        //      <button className="red white-text darken-3 btn-flat" onClick={() => onCancel()}>Back</button>
        //      <button className="green white-text btn-flat right" onClick={() => submitSurvey(formValues, history)}>
        //         Send Survey
        //         <i className="material-icons right">email</i>
        //      </button>
        // </div>
        <Grid container direction='column'>
            <Grid item container justify='center'>
                <Grid item className={classes.contentGrid}>
                    <h5>Please review your entries</h5>
                    {reviewFields}
                </Grid>
                <Grid item className={classes.contentGrid}>
                    <button className="red white-text darken-3 btn-flat" onClick={() => onCancel()}>Back</button>
                    <button className="green white-text btn-flat right" onClick={() => submitSurvey(formValues, history)}>
                        Send Survey
                        <i className="material-icons right">email</i>
                    </button>
                </Grid>
            </Grid>
        </Grid>

    );
};

const mapStateToProps = (state: any) => {
    return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));