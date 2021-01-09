import React, { useState } from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import 'materialize-css/dist/css/materialize.min.css';

const SurveyNew: React.FC = (): JSX.Element => {
    // a functional component to create a new survey. uses usestate to toggle fro creating a survey to reviewing it.
    
    const [showFormReview, setShowFormReview] = useState(false);

    const renderContent = (): JSX.Element => {
        if (showFormReview) {
            return <SurveyFormReview onCancel={() => setShowFormReview(false)} />;
        }

        return <SurveyForm onSurveySubmit={() => setShowFormReview(true)} />;
    }


    return renderContent();

}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);