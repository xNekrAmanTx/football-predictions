import React, { useEffect, useState } from 'react';
//import withStyles from '@material-ui/core';
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
})

function Header({classes, ...restProps}) {
    // async function getUser(){
    //     let obj = await firebase.auth();
    //     let user = obj.currentUser;
    //     console.log(user);
    //     return user;
    // }
    // getUser().then(res => setUser(res))
    const [user, setUser] = useState(firebase.auth().currentUser);

    console.log('Header@ ashxatec');
    console.log(user, firebase.auth().currentUser, 'header');
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user, 'headerStateChanged');
            setUser(user);
        } else {
         // No user is signed in.
         console.log(user, 'headerStateChanged else');
         setUser(null);
        }
  });

    return (
        <header className={classes.header}>
            <HeaderLogo />
            {user ? <span>{user.email}</span> : <span>Guest</span>}
            <HeaderButtonsContainer user={user} {...restProps}/>
        </header>
    )
}

export default withStyles(styles)(Header)

// <img src='./'/>

// '../../images/headerLogo'