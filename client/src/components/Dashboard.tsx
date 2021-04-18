import React from 'react';
import SurveyList from './surveys/SurveyList';
import { Grid, Fab, makeStyles, createStyles, Theme  } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        mainContainer: {
            backgroundColor: '#bedcfa',
            height: '100%'
        },
        surveyItems: {
            width: '75%'
        }
    })    
);

const Dashboard = (): JSX.Element => {
    // functional component that shows the list of seurveys the user created and a button to create a new survey
    const classes = useStyles();

    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid item container justify='center'>
                <Grid item className={classes.surveyItems}>
                    <SurveyList/>
                </Grid>
            </Grid>
            <Fab color='primary' component='button' href='/surveys/new' style={{position: 'fixed', right: 20, bottom: 20}}>
                <AddIcon/>
            </Fab>
        </Grid>
        // <div>
        //     <SurveyList/>

        //     <div className="fixed-action-btn">
        //         <Link to='/surveys/new' className="btn-floating btn-large red">
        //             <i className="material-icons">add</i>
        //         </Link>
        //     </div>
        // </div>
    );
};

export default Dashboard;