import React from 'react';
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
    footer: {
        backgroundColor: "#a7d129",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "-webkit-fill-available",
        color: "#1b1919",
    }
})

function Footer({classes}) {
    return (
        <footer className={classes.footer}>
            Footer   
        </footer>
    )
}

export default withStyles(styles)(Footer)