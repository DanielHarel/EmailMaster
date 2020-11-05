import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return (
                    <>
                    <li><Payments/></li>
                    <li style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>
                    <li><a href="/api/logout">LogOut</a></li>
                    </>
                );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'} 
                    className="left brand-logo" 
                    style={{marginLeft : 10}}
                    >
                    EmailMaster
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = (state) => {
    return {auth: state.auth};
}
export default connect(mapStateToProps)(Header);