import React, { useState, useEffect }/* , { useState } */ from 'react';
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
    Grid,
    Checkbox,
} from '@material-ui/core';
import PredictionInput from './predictionInput';
import getFixturesOfCurrentLeagueAndRound from '../../../../helpers/databaseSetsGets/getFixturesOfCurrentLeagueAndRound';

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: "rgba(255, 255, 255, 0.52)",
        maxWidth: 'fit-content'
    },

    roundPaper: {
        backgroundColor: "rgba(255, 255, 255, 0.75)",
    },

    button: {
        alignSelf: 'flex-end',
    },

    rootDiv: {
        display: 'flex',
        flexDirection: 'column',
    },

    inputsContainer: {
        display: 'flex',
    },
}));

// function createData(id, i, firstTeam, result, secondTeam, x2, prediction, points) {
//     return { id, i, firstTeam, result, secondTeam, x2, prediction, points };
// };

// const rows = [
//     createData(0, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`) -->
//     createData(1, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
//     createData(2, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
//     createData(3, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 2), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
//     createData(4, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`) -->
//     createData(5, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
//     createData(6, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
//     createData(7, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`) -->
//     createData(8, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
//     createData(9, '+', 'liverpool', '1-0', 'tottenham', 'x2', '2-0', 1), //fetch(`...leagues/:?leagueId=${leagueId}/?roundId:${roundId}`)
// ];

// const currentLeagueThisTourMatches = (async leagueId => {
//     let gamesIds = await fetch(`.../leagues:?leagueId=${leagueId}/currentTour`)
//     let curMatches = await Promise.all(gamesIds.map(matchId => fetch(`...fixtures:?matchId=${matchId}`)))
//     return curMatches;
// })()

function PredictionTable({ leagueId, round }) {
    const classes = useStyles();

    const [rows, setRows] = useState({})
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        round && getFixturesOfCurrentLeagueAndRound(leagueId, round)
            .then(matches => setRows(Object.values(matches).sort((m1,m2) => m1.event_timestamp - m2.event_timestamp)))
    },[leagueId, round])

    const handleChange = e => {
        setChecked(e.target.checked);
    };

    const handleSubmit = e => {
        e.preventDefault();
    }

    // const [currentMatches, setCurrentMatches] = useState([])
    return (
        <div className={classes.rootDiv}>
            <Paper square className={classes.roundPaper}>
                <Grid container justify="space-between" spacing={5} className={classes.prevNextDiv}>
                    <Grid item>{'<previous'}</Grid>
                    <Grid item>{'currentRound#'}</Grid>
                    <Grid item>{'next>'}</Grid>
                </Grid>
            </Paper>
            <form onSubmit={handleSubmit}>
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
                            {Object.keys(rows)[0] && rows.map(row => (
                                <TableRow key={row.fixture_id}>
                                    <TableCell component="th" scope="row" align="center">
                                        i
                                    </TableCell>
                                    <TableCell align="right">{row.homeTeam.team_name}</TableCell>
                                    <TableCell align="center">{row.statusShort === 'FT' ? row.score.fulltime : '?'}</TableCell>
                                    <TableCell align="left">{row.awayTeam.team_name}</TableCell>
                                    <TableCell align="center">
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChange}
                                            value={checked}
                                            color='primary'
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        /></TableCell>
                                    <TableCell align="center">
                                        <div className={classes.inputsContainer}>
                                            <PredictionInput width={10} /> : <PredictionInput width={10} />
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">0</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
                <Grid container justify="flex-end">
                    <Button
                        type="submit"
                        variant="contained"
                    >Save Prediction</Button>
                </Grid>
            </form>
        </div>
    );
}

export default PredictionTable;