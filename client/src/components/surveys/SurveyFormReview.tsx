import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import {withRouter, RouteComponentProps} from 'react-router-dom';

interface SurveyFormReviewProps {
    onCancel: Function;
    formValues: {
        [key:string]: string
    };
    submitSurvey: Function;
    history: String[];
}

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }: SurveyFormReviewProps & RouteComponentProps): JSX.Element => {

    const reviewFields = formFields.map(({name, label}) => {
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
        <div>
            <h5>Please review your entries</h5>
            {reviewFields}
             <button className="yellow white-text darken-3 btn-flat" onClick={() => onCancel()}>Back</button>
             <button className="green white-text btn-flat right" onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
             </button>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));