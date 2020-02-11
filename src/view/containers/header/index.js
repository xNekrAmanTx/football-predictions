import React from 'react';
//import withStyles from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles'
import HeaderLogo from './logo';
import HeaderButtonsContainer from './buttonsContainer'

const styles = () => ({
    header: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "-webkit-fill-available",
        color: "#fff",
        padding: '10px'
    },
    MuiDialogTitle: {
        color: "#fff",

    }

})

function Header({classes, ...restProps}) {
    return (
        <header className={classes.header}>
            <HeaderLogo />
            <HeaderButtonsContainer {...restProps}/>
        </header>
    )
}

export default withStyles(styles)(Header)

// <img src='./'/>

// '../../images/headerLogo'
