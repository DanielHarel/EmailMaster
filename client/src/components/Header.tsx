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
    } | null;
}

const Header = (props: HeaderProps): JSX.Element => {
    console.log(props);
    
    const renderContent = (): JSX.Element => {
        // switch (props.auth) {
        //     case null:
        //         return <></>;
        //     case false:
        //         return (
        //             <li><a href="/auth/google">Login With Google</a></li>
        //         );
        //     default:
        //         return (
        //             <>
        //             <li><Payments/></li>
        //             <li style={{ margin: '0 10px' }}>Credits: {props.auth.credits}</li>
        //             <li><a href="/api/logout">LogOut</a></li>
        //             </>
        //         );
        // }
        if (props.auth === null) {
            return <></>;
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