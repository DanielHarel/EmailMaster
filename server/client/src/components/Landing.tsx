import React from 'react';
import { Grid, Typography, makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        landingTextGrid: {
            width: '50%',
            textAlign: 'center'
        },
        mainContainer: {
            backgroundColor: '#bedcfa',
            height: '60rem'
        }
    })    
);
// landing page

const Landing = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid item>
                <Typography align='center' variant='h1'>
                    Welcome to EmailMaster!
                </Typography>
            </Grid>
            <Grid item container justify='center'>
                <Grid item className={classes.landingTextGrid} >
                    <Typography align='center' variant='h4'>
                        The webapp that lets you collect input from your users in 3 simple steps:
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Typography align='center' variant='h6'>
                    Login with Google
                </Typography>
            </Grid>
            <Grid item>
                <Typography align='center' variant='h6'>
                    Compile a survey
                </Typography>
            </Grid>
            <Grid item>
                <Typography align='center' variant='h6'>
                    And monitor the feedback on your Dashboard!
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Landing;