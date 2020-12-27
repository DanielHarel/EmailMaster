import React from 'react';

interface SurveyFormInterface {
    input: String;
    label: String;
    meta: {
        error: Boolean;
        touched: Boolean;
    };
}

const SurveyField: React.FC<SurveyFormInterface> = ({input, label, meta: {error, touched}}): JSX.Element => {
    // functional component representing a single field of input for the survey. after the field is touched, it
    // checks automatically for errors.
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}}/>
            <div className="red-text" style={{marginBottom: '20px'}}>
            {touched && error}
            </div>
            
        </div>
    );
};

export default SurveyField;