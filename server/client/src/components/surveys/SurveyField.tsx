import React from 'react';

interface SurveyFormInterface {
    input: string;
    label: string;
    meta: {
        error: boolean | undefined;
        touched: boolean | undefined;
        invalid: boolean | undefined;
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