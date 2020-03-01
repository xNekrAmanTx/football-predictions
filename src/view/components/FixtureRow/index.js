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
import getUserPrediction from '../../../helpers/databaseGets/getUserPrediction';


const useStyles = makeStyles({
    inputsContainer: {
        display: 'flex',
    },
    right: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    left: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    overflow: {
        maxWidth: 100,
        textOverflow: 'elipsis',
    },
});

export default ({ user, leagueId, roundId, fixture, checkboxValue, setCheckboxValue, fixtures }) => {
    const classes = useStyles();
    const fixId = fixture.fixture_id;
    const [info, setInfo] = useState(false);

    const [prediction, setPrediction] = useState({
        home: '',
        away: '',
        points: 0,
    });

    const predictionHandler = snapshot => {
        let pred = snapshot.val();
        if (pred) {
            pred.x2 && setCheckboxValue(fixId);
            setPrediction({
                home: pred.homeGoals,
                away: pred.awayGoals,
                points: pred.fixturePoints,
            })
        }
    }

    useEffect(() => {
        let canselled = false;
        !canselled && user && getUserPrediction(predictionHandler, user.displayName, leagueId, roundId, fixId)

        return () => {
            canselled = true;
            setCheckboxValue(0);
            setPrediction({
                home: '',
                away: '',
                points: 0,
            })
        }
    }, [])

    const isFinished = fixture.statusShort === 'FT';
    const isNotStarted = fixture.statusShort === 'NS';

    function handleCheckboxChange() {
        if (checkboxValue && fixtures.find(fix => fix.fixture_id === checkboxValue).statusShort === 'FT') return;
        setCheckboxValue(fixId);
    }

    function handleInfoClick() {
        setInfo(!info)
    }

    return (<>
        <TableRow key={fixId} id={fixId}>
            <TableCell component="th" scope="row" align="center">
                <IconButton onClick={handleInfoClick} value={fixId}>
                    <InfoIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right">
                <div className={classes.right}>
                    {fixture.homeTeam.team_name}
                    &nbsp;
                    <img src={fixture.homeTeam.logo} alt={fixture.homeTeam.team_id} width="30" height="30" />
                </div>
            </TableCell>
            <TableCell align="center"><span>{isFinished ? fixture.goalsHomeTeam + ' : ' + fixture.goalsAwayTeam : '- : -'}</span></TableCell>
            <TableCell align="left">
                <div className={classes.left}>
                    <img src={fixture.awayTeam.logo} alt={fixture.awayTeam.team_id} width="30" height="30" />
                    &nbsp;
                    {fixture.awayTeam.team_name}
                </div>
            </TableCell>
            {user && <>
                <TableCell align="center">
                    <Checkbox
                        disabled={!isNotStarted || !prediction.home || !prediction.away}
                        checked={fixId === checkboxValue}
                        onChange={handleCheckboxChange}
                        value={fixId}
                        color='secondary'
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </TableCell>
                <TableCell align="center">
                    {isNotStarted ?
                        <div className={classes.inputsContainer}>
                            <PredictionInput prediction={prediction} setPrediction={setPrediction} which='home' />
                            {` - `}
                            <PredictionInput prediction={prediction} setPrediction={setPrediction} which='away' />
                        </div>
                        : `${prediction.home || '-'} : ${prediction.away || '-'}`}
                </TableCell>
                <TableCell align="center">{prediction.points}</TableCell>
            </>}
        </TableRow>
        {info
            &&
            <TableRow>
                <TableCell />
                <TableCell colSpan={3}>
                    <Paper>
                        <Typography color="textSecondary" className={classes.overflow}>
                            {`Match start: ${new Date(fixture.event_date)}`}
                        </Typography>
                    </Paper>
                </TableCell>
                {user && <TableCell colSpan={3} />}
            </TableRow>}
    </>
    );
}