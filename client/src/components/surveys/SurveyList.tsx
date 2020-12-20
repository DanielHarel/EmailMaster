/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../../actions';

interface Survey {
    _id: string;
    title: String;
    body: String;
    dateSent: string;
    yes: Number;
    no: Number;
}

interface SurveyListProps {
    fetchSurveys: Function;
    surveys: Survey[];
}

const SurveyList: React.FC<SurveyListProps> = (props): JSX.Element => {
    console.log(props);

    useEffect(() => {
        props.fetchSurveys()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const renderSurveys = () => {
        return props.surveys.reverse().map(survey => {
            return (
                <div className="card blue-grey darken-1" key={survey._id}>
                    <div className="card-content white-text">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            )
        });
    }

    return (
        <div>
            {renderSurveys()}
        </div>
    );
}


const mapStateToProps = (state: any) => {
    return { surveys: state.surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);