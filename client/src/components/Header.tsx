import React, { useState } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';

import { AppBar, Toolbar, Hidden, Typography, Button, makeStyles, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface HeaderProps {
    dispatch: Function;
    auth: {
        credits: Number;
        googleId: String;
        id: String;
    };
}

//  this is the header functional component.

const Header = (props: HeaderProps): JSX.Element => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

    const classes = useStyles();
    
    const renderContent = (): JSX.Element | undefined => {
        // renders the content of the header. if auth is undefined it renders login button. during the async request
        // (when the auth is null) it renders nothing. when auth is complete it renders the peyments component, users 
        // credit status and a logout button

        if (props.auth === null) {
            return;
        }
        if (!props.auth) {
            return (
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Button color="inherit" href='/'>EmailMaster</Button>
                        </Typography>
                        <Button color="inherit" href="/auth/google" variant="outlined">Login With Google</Button>
                    </Toolbar>
                </AppBar>
            );
        } else {
            return (
                <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Button color="inherit" href='/surveys'>EmailMaster</Button>
                    </Typography>
                    <Hidden mdUp>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon style={{ color: '#FFFFFF' }} />
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Credits: {props.auth.credits}</MenuItem>
                            <MenuItem onClick={handleClose}><Payments/></MenuItem>
                            <MenuItem onClick={handleClose}><Button color="inherit" href="/api/logout" variant="outlined" style={{marginLeft : 20}}>LogOut</Button></MenuItem>
                        </Menu>
                    </Hidden>
                    <Hidden only={['xs', 'sm']}>
                        <div style={{display: 'flex', alignItems: 'space-between'}}>
                        <Typography variant="h6" className={classes.title} style={{marginRight : 20}}>Credits: {props.auth.credits}</Typography>
                        <Payments/>
                        <Button color="inherit" href="/api/logout" variant="outlined" style={{marginLeft : 20}}>LogOut</Button>
                        </div>
                    </Hidden>
                </Toolbar>
                </AppBar>
            );
        }
    }

    return (
        <div>{renderContent()}</div>
    );
}

const mapStateToProps = (state: any) => {
    return {auth: state.auth};
}
export default connect(mapStateToProps)(Header);