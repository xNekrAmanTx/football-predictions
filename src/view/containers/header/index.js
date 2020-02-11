import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles'
import HeaderLogo from './logo';
import HeaderButtonsContainer from './buttonsContainer'
import firebase from 'firebase/app';
import 'firebase/auth';

const styles = () => ({
    header: {
        backgroundColor: "#a7d129",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "-webkit-fill-available",
        color: "#1b1919",
        padding: '10px'
    }
});

function Header({classes, user, ...restProps}) {
    
    console.log('Header@ ashxatec');
    console.log(user, firebase.auth().currentUser, 'header');

    return (
        <header className={classes.header}>
            <HeaderLogo />

            <span>{user ? user.email : 'Guest' }</span>

            <HeaderButtonsContainer user={user} {...restProps}/>
        </header>
    )
}

export default withStyles(styles)(Header)
