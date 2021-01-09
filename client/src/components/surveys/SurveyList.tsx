/* eslint-disable jsx-a11y/anchor-is-valid */
import { makeStyles, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
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

    const useStyles = makeStyles({
        root: {
          minWidth: 275,
          backgroundColor: '#CFD4EC',
          margin: '10px 20px 10px 20px',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
    
    const classes = useStyles();

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
                <Card className={classes.root} key={survey._id}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {survey.title}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {survey.body}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                        </Typography>
                    </CardContent>
                        <CardActions>
                            <Button size="small">Yes: {survey.yes}</Button>
                            <Button size="small">No: {survey.no}</Button>
                        </CardActions>
                </Card>
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