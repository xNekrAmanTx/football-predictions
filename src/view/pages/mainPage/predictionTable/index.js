import React/* , { useState } */ from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    makeStyles,
    Button,
    Divider,
    Grid,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        minWidth: 350,
        backgroundColor: "rgba(255, 255, 255, 0.52)",
    },

    button: {

        alignSelf: 'flex-end',

    },

    rootDiv: {

        display: 'flex',
        flexDirection: 'column',
    },
}));

function createData(id, i, firstTeam, result, secondTeam, x2, prediction, points) {
    return {id, i, firstTeam, result, secondTeam, x2, prediction, points};
};

const rows = [
    createData(0, '+', 237, 9.0, 37, 4.3, 1, 2), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`) -->
    createData(1, '+', 262, 16.0, 24, 6.0, 1, 2), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
    createData(2, '+', 305, 3.7, 67, 4.3, 1, 2), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
    createData(3, '+', 356, 16.0, 49, 3.9, 1, 2), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
];

// const currentLeagueThisTourMatches = (async leagueId => {
//     let gamesIds = await fetch(`.../leagues:?leagueId=${leagueId}/currentTour`)
//     let curMatches = await Promise.all(gamesIds.map(matchId => fetch(`...fixtures:?matchId=${matchId}`)))
//     return curMatches;
// })()

function PredictionTable() {
    const classes = useStyles();

    // const [currentMatches, setCurrentMatches] = useState([])
    return (
        <div className={classes.rootDiv}>
            {/* <Paper square> */}
            <Grid container justify="center" spacing={5} className={classes.prevNextDiv}>
                <Grid item>previous</Grid><Divider orientation={"vertical"}/><Grid item>next</Grid>
            </Grid>
            {/* </Paper> */}
            <form>
                <TableContainer square component={Paper} className={classes.paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">i</TableCell>
                                <TableCell align="right">First Team</TableCell>
                                <TableCell align="center">Result</TableCell>
                                <TableCell align="left">Second Team</TableCell>
                                <TableCell align="center">x2</TableCell>
                                <TableCell align="center">Prediction</TableCell>
                                <TableCell align="center">Points</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row" align="center">
                                        {row.i}
                                    </TableCell>
                                    <TableCell align="right">{row.firstTeam}</TableCell>
                                    <TableCell align="center">{row.result}</TableCell>
                                    <TableCell align="left">{row.secondTeam}</TableCell>
                                    <TableCell align="center">{row.x2}</TableCell>
                                    <TableCell align="center">{row.prediction}</TableCell>
                                    <TableCell align="center">{row.points}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
                <Grid container justify="flex-end">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        // className={classes.button}
                    >Save Prediction</Button>
                </Grid>
            </form>
        </div>
    );
}

export default PredictionTable;
