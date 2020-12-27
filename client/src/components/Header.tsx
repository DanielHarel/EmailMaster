import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
    
    const renderContent = (): JSX.Element | undefined => {
        // renders the content of the header. if auth is undefined it renders login button. during the async request
        // (when the auth is null) it renders nuthing. when auth is complete it renders the peyments component, users 
        // credit status and a logout button

        if (props.auth === null) {
            return;
        }
        if (!props.auth) {
            return (
                <li><a href="/auth/google">Login With Google</a></li>
            );
        } else {
            return (
                <>
                <li><Payments/></li>
                <li style={{ margin: '0 10px' }}>Credits: {props.auth.credits}</li>
                <li><a href="/api/logout">LogOut</a></li>
                </>
            );
        }
    }

    return (
        <nav>
            <div className="nav-wrapper">
                {/* this link redirect to the surveys page if user is logged in or the home if not logged in */}
                <Link to={props.auth ? '/surveys' : '/'} 
                className="left brand-logo" 
                style={{marginLeft : 10}}
                >
                EmailMaster
                </Link>
                <ul className="right">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    );
}



const mapStateToProps = (state: any) => {
    return {auth: state.auth};
}
export default connect(mapStateToProps)(Header);