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

    // a functional component to show the users past surveys. uses useEffect to fetch the users surveys on first load.

    useEffect(() => {
        props.fetchSurveys()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const renderSurveys = () => {
        // this function takes all the surveys that arrive in array form and maps over them, rendering each one into a card.
        // uses reverse() to show the most recent surveys first.
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
        // since renderSurveys returns an array, a reactFragment is needed.
        <>
            {renderSurveys()}
        </>
    );
}


const mapStateToProps = (state: any) => {
    return { surveys: state.surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);