import React from 'react';
import {Button} from '@material-ui/core';
import {
    Link,
    useLocation,
} from 'react-router-dom';
import {Typography} from "@material-ui/core";
import { paths } from '../../../../constants';
import LoginDialogForm from '../../loginDialog';
import firebase from 'firebase/app';
import 'firebase/auth';

const linkStyle = {
    textDecoration: 'none',
    color: "#fff"
};

const buttonStyle = {
    color: "#4e5569",
    backgroundColor: "#f6f7fb"

};
const blockStyle = {
    display: "flex",
    minWidth: "300px",
    justifyContent: "space-between",
    alignItems: "center"
};

export default ({user, ...props}) => {
    const location = useLocation();

    const handleLogout = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log(firebase.auth().currentUser, user.email, 'logout')
          }).catch(function(error) {
            // An error happened.
          });
    };

    return (
        <div style={blockStyle}>
            <Link to={paths.rules} style={linkStyle}>
                <Typography variant="body2">Top Users</Typography>
            </Link>
            <Link to={paths.rules} style={linkStyle}>
                <Typography variant="body2">Rules</Typography>
            </Link>
            {!user ? 
            <>
            <Button
                style={buttonStyle}
                disabled={location.pathname === paths.signup}
                color="primary"
                onClick={props.handleOpen}>
                    Log In
            </Button>
            <LoginDialogForm {...props}/>
            <Link to={paths.signup} style={linkStyle}>
                <Button color="primary"
                        style={buttonStyle}>
                    Sign up
                </Button>
            </Link>
            </> :
            <Button color="primary" onClick={handleLogout}>Log Out</Button>}
        </div>
    )
}
