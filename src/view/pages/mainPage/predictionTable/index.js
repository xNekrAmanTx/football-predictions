import React, { useState, useEffect } from 'react';

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
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import setUserPrediction from '../../../../helpers/databaseSets/setUserPrediction';
import FixtureRow from '../../../components/FixtureRow';
import getRoundsNumber from '../../../../helpers/databaseGets/getRoundsNumber';


const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: "rgba(255, 255, 255, 0.52)",
        maxHeight: "390px",
        marginBottom: "20px"
    },

    roundCaption: {
        backgroundColor: "rgba(255, 255, 255, 0.75)",
    },

    clickable: {
        cursor: 'pointer',
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

    table: {
        whiteSpace: 'noWrap',
    },

    textCenter: {
        textAlign: 'center',
    },
}));


function PredictionTable({ user, leagueId, round, setRound, fixtures }) {

    const classes = useStyles();

    const [checkboxValue, setCheckboxValue] = useState(0);
    const [roundsCount, setRoundsCount] = useState(0);

    const areAllStarted = fixtures.every(fix => fix.statusShort !== 'NS')

    const handleRoundChangeCLick = dif => round + dif > 0 && round + dif <= roundsCount && setRound(round + dif);

    const handleSubmit = e => {
        e.preventDefault();
        fixtures.map(fixture => {
            let id = fixture.fixture_id;
            let matchRow = document.getElementById(id);
            let x2 = checkboxValue === id;
            let [home, away] = [...matchRow.querySelectorAll('input[type=number]')].map(inp => inp.value);
            home && away && setUserPrediction(user.displayName, leagueId, round, id, x2, home, away, 0);
        });
    };

    useEffect(() => {
        getRoundsNumber(leagueId).then(roundsNumber => setRoundsCount(roundsNumber))
    }, [leagueId])


    return (
        <div className={classes.rootDiv}>
            <Paper square className={classes.roundCaption}>
                <Grid container justify="space-between" className={classes.prevNextDiv} alignItems='center'>
                    <Grid onClick={() => handleRoundChangeCLick(-1)} item>
                        <Button
                            disabled={round === 1}
                            component='span'
                            color="primary"
                            size="small"
                            startIcon={<NavigateBeforeIcon />}
                        >
                            previous round
                        </Button>
                    </Grid>
                    <Grid item>{`Round ${round}`}</Grid>
                    <Grid onClick={() => handleRoundChangeCLick(1)} item>
                        <Button
                            disabled={round === roundsCount}
                            component='span'
                            color="primary"
                            size="small"
                            endIcon={<NavigateNextIcon />}
                        >
                            next round
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <form onSubmit={handleSubmit}>
                <TableContainer square component={Paper} className={classes.paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell align="center" padding="none" />
                                <TableCell align="right" padding="none">First Team</TableCell>
                                <TableCell align="center" padding="none">Result</TableCell>
                                <TableCell align="left" padding="none">Second Team</TableCell>
                                {user && <>
                                    <TableCell align="center" padding="none">x2</TableCell>
                                    <TableCell align="center" padding="none">Prediction</TableCell>
                                    <TableCell align="center" padding="none">Points</TableCell>
                                </>}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fixtures.map(fixture => (
                                <FixtureRow
                                    fixtures={fixtures}
                                    key={fixture.fixture_id}
                                    fixture={fixture}
                                    checkboxValue={checkboxValue}
                                    setCheckboxValue={setCheckboxValue}
                                    user={user}
                                    leagueId={leagueId}
                                    roundId={round}

                                />
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
                {user
                    ? <Grid container justify="flex-end">
                        <Button
                            disabled={areAllStarted}
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >Save Prediction</Button>
                    </Grid>
                    : <Grid container className={classes.textCenter} component='h3' justify='center'> Please sign in to predict </Grid>}
            </form>
        </div>
    );
}

export default PredictionTable;
