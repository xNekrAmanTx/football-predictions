import React, { useState } from 'react';
import {
    TableRow,
    TableCell,
    Checkbox,
    IconButton,
    Fade,
    Paper,
    Typography,
    makeStyles,
} from "@material-ui/core";
import PredictionInput from './predictionInput';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
    inputsContainer: {
        display: 'flex',
    },
}));

export default ({ fixture, checkboxValue, setCheckboxValue,/*  info, setInfo */ }) => {
    const classes = useStyles();
    const [info, setInfo] = useState(false);

    const finished = fixture.statusShort === 'FT';

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
            <TableCell align="center"><span>{ finished ? fixture.goalsHomeTeam + ' : ' + fixture.goalsAwayTeam : '- : -'}</span></TableCell>
            <TableCell align="left">{fixture.awayTeam.team_name}</TableCell>
            <TableCell align="center">
                <Checkbox
                    checked={fixture.fixture_id == checkboxValue}
                    onChange={handleCheckboxChange}
                    value={fixture.fixture_id}
                    color='secondary'
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                /></TableCell>
            <TableCell align="center">
                {fixture.statusShort !== 'FT' ?
                    <div className={classes.inputsContainer}>
                        <PredictionInput width={10} /> : <PredictionInput width={10} />
                    </div> : '- : -'}
            </TableCell>
            <TableCell align="center">0</TableCell>
        </TableRow>
        {info
            &&
            <TableRow>
                <TableCell />
                <TableCell colSpan={5}>
                    <Paper>
                        <Typography color="textSecondary">
                            Match start:
                            </Typography>
                    </Paper>
                </TableCell>
                <TableCell />
            </TableRow>}
    </>
    );
}