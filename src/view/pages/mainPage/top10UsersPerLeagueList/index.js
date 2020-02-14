import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper : {
        backgroundColor : "rgba(255, 255, 255, 0.52)",
        maxWidth: 'fit-content',
    },

    roundPaper: {
        backgroundColor: "rgba(255, 255, 255, 0.75)",
    },

    rootDiv: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

function createData(avatar, user, point) {
    return { avatar, user, point };
}

const rows = [
    createData("av", "user1", 25),
    createData("av", "user2", 20),
    createData("av", "user3", 15),
    createData("av", "user4", 10),
    createData("av", "user5", 5),
    createData("av", "user1", 25),
    createData("av", "user2", 20),
    createData("av", "user3", 15),
    createData("av", "user4", 10),
    createData("av", "user5", 5),
];


export default () => {
    const classes = useStyles();

    return (
        <div className={classes.rootDiv}>
            <Paper square className={classes.roundPaper}>
                <Grid container justify="center" className={classes.prevNextDiv}>
                    <Grid item>Top 10 Users</Grid>
                </Grid>
            </Paper>
        <TableContainer square component={Paper} className={classes.paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center"/>
                        <TableCell align="center" colSpan={2}>
                            users
                        </TableCell>
                        <TableCell align="center">points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.user}>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="right"><Avatar alt="Av" src={row.avatar}/></TableCell>
                            <TableCell align="left">{row.user}</TableCell>
                            <TableCell align="center">{row.point}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}
