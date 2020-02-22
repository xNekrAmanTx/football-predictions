import React, { useState, useEffect } from 'react';
import {
    TableRow,
    TableCell,
    Checkbox,
    IconButton,
    Paper,
    Typography,
    makeStyles,
} from "@material-ui/core";
import PredictionInput from './predictionInput';
import InfoIcon from '@material-ui/icons/Info';
import firebase from 'firebase/app';
import 'firebase/database';


const useStyles = makeStyles(theme => ({
    inputsContainer: {
        display: 'flex',
    },
}));

export default ({ user, leagueId, roundId, fixture, checkboxValue, setCheckboxValue }) => {
    const classes = useStyles();
    const [info, setInfo] = useState(false);
    const [predictionHome, setPredictionHome] = useState('');
    const [predictionAway, setPredictionAway] = useState('');
    const [predictionPoints, setPredictionPoints] = useState(0);

    useEffect(() => {
        user && firebase.database().ref(`/users/${user.displayName}/predictions/${leagueId}/${roundId}/${fixture.fixture_id}`).on('value', snap => {
            let pred = snap.val();
            if (pred) {
                pred.x2 && setCheckboxValue(fixture.fixture_id);
                setPredictionHome(pred.homeGoals);
                setPredictionAway(pred.awayGoals);
            }
            return () => {
                setCheckboxValue(false);
                setPredictionHome('');
                setPredictionAway('');
            }
        })
    }, [])

    const isFinished = fixture.statusShort === 'FT';
    const isNotStarted = fixture.statusShort === 'NS';

    function handleCheckboxChange() {
        setCheckboxValue(fixture.fixture_id)
    }

    function handleInfoClick() {
        setInfo(!info)
    }

    return (<>
        <TableRow key={fixture.fixture_id} id={fixture.fixture_id}>
            <TableCell component="th" scope="row" align="center">
                <IconButton onClick={handleInfoClick} value={fixture.fixture_id}>
                    <InfoIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right">{fixture.homeTeam.team_name}</TableCell>
            <TableCell align="center"><span>{isFinished ? fixture.goalsHomeTeam + ' : ' + fixture.goalsAwayTeam : '- : -'}</span></TableCell>
            <TableCell align="left">{fixture.awayTeam.team_name}</TableCell>
            {user && <>
                <TableCell align="center">
                    <Checkbox
                        disabled={!isNotStarted || !predictionHome || !predictionAway}
                        checked={fixture.fixture_id === checkboxValue}
                        onChange={handleCheckboxChange}
                        value={fixture.fixture_id}
                        color='secondary'
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </TableCell>
                <TableCell align="center">
                    {isNotStarted ?
                        <div className={classes.inputsContainer}>
                            <PredictionInput value={predictionHome} setValue={setPredictionHome} />
                            {` - `}
                            <PredictionInput value={predictionAway} setValue={setPredictionAway} />
                        </div>
                        : `${predictionHome || '-'} : ${predictionAway || '-'}`}
                </TableCell>
                <TableCell align="center">{0}</TableCell>
            </>}
        </TableRow>
        {info
            &&
            <TableRow>
                <TableCell />
                <TableCell colSpan={3}>
                    <Paper>
                        <Typography color="textSecondary">
                            Match start:
                            </Typography>
                    </Paper>
                </TableCell>
                {user && <TableCell colSpan={3} />}
            </TableRow>}
    </>
    );
}