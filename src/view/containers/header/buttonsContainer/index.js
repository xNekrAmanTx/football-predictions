import React from 'react';
import {Button} from '@material-ui/core';
import {
    Link,
    useLocation,
} from 'react-router-dom';
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
}


export default (props) => {


    const location = useLocation();

    return (
        <div style={blockStyle}>
            <Typography variant="body2">Home</Typography>


            <Link to={paths.rules} style={linkStyle}>
                <Typography variant="body2">
                    About </Typography>
            </Link>

            <Button
                style={buttonStyle}
                disabled={location.pathname === paths.signup}
                color="primary"
                onClick={props.handleOpen}
            >
                Log In
            </Button>
            <LoginDialogForm {...props}/>
            <Link to={paths.signup} style={linkStyle}>
                <Button color="primary"
                        style={buttonStyle}>
                    Sign up
                </Button>
            </Link>
        </div>
    )
}
