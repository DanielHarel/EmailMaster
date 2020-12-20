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