// import React from 'react';
// import { withStyles } from '@material-ui/core/styles'
//
// const styles = () => ({
//     footer: {
//         backgroundColor: "#a7d129",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         width: "-webkit-fill-available",
//         color: "#1b1919",
//     }
// })
//
// function Footer({classes}) {
//     return (
//         <footer className={classes.footer}>
//             Footer
//         </footer>
//     )
// }
//
// export default withStyles(styles)(Footer)

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Predictor
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:  theme.palette.grey[800],
        width: '-webkit-fill-available',
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Footer</Typography>
                    <Copyright />
                </Container>
            </footer>
    );
}