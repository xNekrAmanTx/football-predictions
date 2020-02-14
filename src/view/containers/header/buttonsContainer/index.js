import React from 'react';
import {Button} from '@material-ui/core';
import {
    Link,
    useLocation,
} from 'react-router-dom';
// <<<<<<< main-ui
import {paths} from '../../../constants';
import LoginDialogForm from '../../loginDialog';
// import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";


import {makeStyles} from '@material-ui/core/styles';
//
// const useStyles = makeStyles(theme => ({
//     headerBlock: {
//
//     },
//     header: {
//         backgroundColor: "rgba(255, 255, 255, 0.15)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         width: "-webkit-fill-available",
//         color: "#fff",
//         padding: '10px'
//     },
//     MuiDialogTitle: {
//         color: "#fff",
//
//     }
//
// });
// =======
import { paths } from '../../../../constants';
import LoginDialogForm from '../../loginDialog';
import firebase from 'firebase/app';
import 'firebase/auth';
// >>>>>>> master

const linkStyle = {
    textDecoration: 'none',
    color: "#fff"
};

// <<<<<<< main-ui
const buttonStyle = {
    color: "#4e5569",
    backgroundColor: "#f6f7fb"

};
const blockStyle = {
    display: "flex",
    minWidth: "300px",
    justifyContent: "space-between",
    alignItems: "center"
}


// export default (props) => {


// =======
export default ({user, ...props}) => {
    
// >>>>>>> master
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
// <<<<<<< main-ui
        <div style={blockStyle}>
            <Typography variant="body2">Home</Typography>


            <Link to={paths.rules} style={linkStyle}>
                <Typography variant="body2">
                    About </Typography>
            </Link>

// =======
//         <div style={blockStyle}>
            {!user ? 
            <>
// >>>>>>> master
            <Button
                style={buttonStyle}
                disabled={location.pathname === paths.signup}
                color="primary"
                onClick={props.handleOpen}>
                    Log In
            </Button>
            <LoginDialogForm {...props}/>
            <Link to={paths.signup} style={linkStyle}>
// <<<<<<< main-ui
                <Button color="primary"
                        style={buttonStyle}>
// =======
//                 <Button variant="contained" color="primary">
// >>>>>>> master
                    Sign up
                </Button>
            </Link>
            </> :
            <Button color="primary" onClick={handleLogout}>Log Out</Button>}
        </div>
    )
}
