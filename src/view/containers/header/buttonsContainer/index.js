import React from 'react';
import { Button } from '@material-ui/core';
import { 
    Link,
    useLocation,
} from 'react-router-dom';
import { paths } from '../../../constants';
import LoginDialogForm from '../../loginDialog';
import firebase from 'firebase/app';
import 'firebase/auth';

const linkStyle = {
    textDecoration: 'none'
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
        <div className="">
            {!user ? 
            <div>
            <Button
                disabled={location.pathname === paths.signup}
                color="primary"
                onClick={props.handleOpen}>
                    Log In
            </Button>
            <LoginDialogForm {...props}/>
            <Link to={paths.signup} style={linkStyle}>
                <Button color="primary">
                    Sign up
                </Button>
            </Link>
            </div> :
            <Button color="primary" onClick={handleLogout}>Log Out</Button>}
        </div>
    )
}
