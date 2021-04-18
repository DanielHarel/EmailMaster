import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, FormErrors, InjectedFormProps } from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import { validateEmails } from '../../utils/validateEmails'
import formFields from './formFields';


interface SurveyFormProps {
    onSurveySubmit: Function;
}

interface FormFields {
    [key: string]: string;
}

const SurveyForm: React.FC<SurveyFormProps & InjectedFormProps<{}, SurveyFormProps>> = (props: any): JSX.Element => {
    // a redux-form functional component that utilises the validate funtion to check all the 
    // required fields in the form (all fields) were filled.

    const renderFields = (): JSX.Element[] => {
        // maps over the different fields of the form as defined in formFields and renders them.
        return formFields.map(({label, name}): JSX.Element => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }
    
    return (
        // renders the redux form with the fields rendered through renderFields. 
        <form  onSubmit={props.handleSubmit(() => props.onSurveySubmit())}>
            {renderFields()}
            <Link to="/surveys" className="red white-text darken-3 btn-flat">
                Cancel
            </Link>
            <button type="submit" className="indigo btn-flat right white-text">Next<i className="material-icons right">done</i></button>
        </form>
    );
}

const validate = (values: FormFields): FormErrors<FormFields> => {
    // a function to validate answers given in the redux-form component. iterates over the fields and returns an
    // error object for relevant fields.
    const errors: FormErrors<FormFields> = {};
    
    errors.recipients = validateEmails(values.recipients || '');
    formFields.forEach((field) => {
        if (!values[field.name]) { 
            errors[field.name] = 'You must provide a value'
        }
    });
    return errors;
}

const form = reduxForm<{}, SurveyFormProps>({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);

export default connect(null)(form);