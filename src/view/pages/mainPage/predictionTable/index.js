import React, {useState, useEffect}/* , { useState } */ from 'react';
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
import FixtureRow from '../../../components/FixtureRow';
import getFixturesOfCurrentLeagueAndRound from '../../../../helpers/databaseGets/getFixturesOfCurrentLeagueAndRound';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: "rgba(255, 255, 255, 0.52)",
        maxHeight: "335px",
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
    }
}));


function PredictionTable({leagueId, round, setRound}) {
    const classes = useStyles();

    const [rows, setRows] = useState({});
    const [value, setValue] = useState(0);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        round && getFixturesOfCurrentLeagueAndRound(leagueId, round)
            .then(matches => setRows(Object.values(matches).sort((m1, m2) => m1.event_timestamp - m2.event_timestamp)))
    }, [leagueId, round]);

    const handleRoundChangeCLick = val => setRound(/* val > 0 ?  */round + val);

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className={classes.rootDiv}>
            <Paper square className={classes.roundCaption}>
                <Grid container justify="space-between" className={classes.prevNextDiv} alignItems='center'>
                    <Grid className={classes.clickable} onClick={() => handleRoundChangeCLick(-1)} item>
                        <Button
                            component='span'
                            size="small"
                            startIcon={<NavigateBeforeIcon/>}
                        >
                            previous round
                        </Button>
                    </Grid>
                    <Grid item>{`Round ${round}`}</Grid>
                    <Grid className={classes.clickable} onClick={() => handleRoundChangeCLick(1)} item>
                        <Button
                            component='span'
                            size="small"
                            endIcon={<NavigateNextIcon/>}
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
                                <TableCell align="center" padding="none"/>
                                <TableCell align="right" padding="none">First Team</TableCell>
                                <TableCell align="center" padding="none">Result</TableCell>
                                <TableCell align="left" padding="none">Second Team</TableCell>
                                <TableCell align="center" padding="none">x2</TableCell>
                                <TableCell align="center" padding="none">Prediction</TableCell>
                                <TableCell align="center" padding="none">Points</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(rows)[0] && rows.map(row => (
                                <FixtureRow row={row} value={value} setValue={setValue} info={info} setInfo={setInfo}/>
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
