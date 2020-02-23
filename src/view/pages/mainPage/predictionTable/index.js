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
} from '@material-ui/core';
import FixtureRow from '../../../components/FixtureRow';
import getFixturesOfCurrentLeagueAndRound from '../../../../helpers/databaseGets/getFixturesOfCurrentLeagueAndRound';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import setUserPrediction from '../../../../helpers/databaseSets/setUserPrediction';


const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: "rgba(255, 255, 255, 0.52)",
        maxWidth: 'fit-content'
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
}));

function PredictionTable({ user, leagueId, round, setRound }) {
    const classes = useStyles();

    const [fixtures, setFixtures] = useState([]);
    const [checkboxValue, setCheckboxValue] = useState(0);
    const [roundsCount, setRoundsCount] = useState(0);

    const handler = snapshot => {
        setFixtures(Object.values(snapshot.val() || fixtures).sort((m1, m2) => m1.event_timestamp - m2.event_timestamp))
    }

    useEffect(() => {
        round && getFixturesOfCurrentLeagueAndRound(handler, leagueId, round)
        // return () => {
        //     setCheckboxValue(0)
        // }
    }, [leagueId, round]);

    const handleRoundChangeCLick = val => setRound(/* val > 0 ?  */round + val);

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

    return (
        <div className={classes.rootDiv}>
            <Paper square className={classes.roundCaption}>
                <Grid container justify="space-between" className={classes.prevNextDiv} alignItems='center'>
                    <Grid className={classes.clickable} onClick={() => handleRoundChangeCLick(-1)} item>
                        <Button
                            component='span'
                            color="secondary"
                            size="small"
                            startIcon={<NavigateBeforeIcon />}
                        >
                            previous round
                        </Button>
                    </Grid>
                    <Grid item>{`Round ${round}`}</Grid>
                    <Grid className={classes.clickable} onClick={() => handleRoundChangeCLick(1)} item>
                        <Button
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
                <TableContainer component={Paper} className={classes.paper}>
                    <Table /* className={classes.table} */ aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" />
                                <TableCell align="right">First Team</TableCell>
                                <TableCell align="center">Result</TableCell>
                                <TableCell align="left">Second Team</TableCell>
                                {user && <>
                                    <TableCell align="center">x2</TableCell>
                                    <TableCell align="center">Prediction</TableCell>
                                    <TableCell align="center">Points</TableCell>
                                </>}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fixtures.map(fixture => (
                                <FixtureRow
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
                {user ? <Grid container justify="flex-end">
                    <Button
                        // disabled={}
                        type="submit"
                        variant="contained"
                    >Save Prediction</Button>
                </Grid> : <Grid component='h3' justify='center'> Please sign in to predict </Grid>}
            </form>
        </div>
    );
}

export default PredictionTable;