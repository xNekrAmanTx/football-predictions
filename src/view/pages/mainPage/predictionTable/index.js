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
import PredictionInput from './predictionInput';

const useStyles = makeStyles(theme => ({
// <<<<<<< main-ui
    paper: {
        minWidth: 350,
        backgroundColor: "rgba(255, 255, 255, 0.52)",
    },

    button: {

        alignSelf: 'flex-end',

    },

    rootDiv: {

// =======
//     table: {
//         minWidth: 500,
//     },

//     // prevNextDiv: {
//     // },

//     rootDiv: {
// >>>>>>> master
        display: 'flex',
        flexDirection: 'column',
    },
    
    inputsContainer: {
        display: 'flex',
    },
}));

function createData(id, i, firstTeam, result, secondTeam, x2, prediction, points) {
    return {id, i, firstTeam, result, secondTeam, x2, prediction, points};
};

const rows = [
    createData(0, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`) -->
    createData(1, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
    createData(2, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
    createData(3, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 2), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
    createData(4, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`) -->
    createData(5, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
    createData(6, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
    createData(7, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`) -->
    createData(8, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
    createData(9, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
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
                                    <TableCell align="center">
                                        <div className={classes.inputsContainer}>
                                            <PredictionInput width={10}/> : <PredictionInput width={10}/>
                                        </div>
                                    </TableCell>
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
// <<<<<<< main-ui
//                         color="primary"
//                         // className={classes.button}
// =======
                        color="secondary"
// >>>>>>> master
                    >Save Prediction</Button>
                </Grid>
            </form>
        </div>
    );
}

export default PredictionTable;
