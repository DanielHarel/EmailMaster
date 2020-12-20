import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, FormErrors, InjectedFormProps } from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields';

interface SurveyFormProps {
    onSurveySubmit: Function;
}

interface FormFields {
    [key: string]: string;
}

const SurveyForm: React.FC<SurveyFormProps & InjectedFormProps<{}, SurveyFormProps>> = (props: any): JSX.Element => {

    console.log(props);

    const renderFields = (): JSX.Element[] => {
        return formFields.map(({label, name}): JSX.Element => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }
    
    return (
        <div>
            <form onSubmit={props.handleSubmit(() => props.onSurveySubmit())}>
            {renderFields()}
            <Link to="/surveys" className="red btn-flat white-text">
                Cancel
            </Link>
            <button type="submit" className="teal btn-flat right white-text">Next<i className="material-icons right">done</i></button>
            </form>
        </div>
    );
    }

const validate = (values: FormFields): FormErrors<FormFields> => {
    const errors: FormErrors<FormFields> = {};
    
    errors.recipients = validateEmails(values.recipients || '');
    formFields.forEach((field) => {
        if (!values[field.name]) { 
            errors[field.name] = 'You must provide a value'
        }
    });
    return errors;
}

// export default reduxForm({
//     validate: validate,
//     form: 'surveyForm',
//     destroyOnUnmount: false
// })(SurveyForm);

const form = reduxForm<{}, SurveyFormProps>({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);

export default connect(null)(form);