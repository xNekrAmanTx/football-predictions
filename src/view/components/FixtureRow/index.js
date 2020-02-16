import React, {useState} from 'react';
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

export default ({row, value, setValue, info, setInfo}) => {
    const classes = useStyles();

    function handleCheckboxChange(){
        setValue(row.fixture_id)
    }

    function handleInfoClick() {
        let resInfo = [...info];
        if(info.includes(row.fixture_id)) {
            resInfo.splice(info.indexOf(row.fixture_id), 1)
        } else {
            resInfo.push(row.fixture_id)
        }
        setInfo(resInfo)
    }

    return (<>
                <TableRow key={row.fixture_id}>
                    <TableCell component="th" scope="row" align="center">
                        <IconButton onClick={handleInfoClick} value={row.fixture_id}>
                            <InfoIcon/>
                        </IconButton>
                    </TableCell>
                    <TableCell align="right">{row.homeTeam.team_name}</TableCell>
                    <TableCell align="center"><span>{row.statusShort === 'FT' ? row.goalsHomeTeam + ' : ' + row.goalsAwayTeam : '- : -'}</span></TableCell>
                    <TableCell align="left">{row.awayTeam.team_name}</TableCell>
                    <TableCell align="center">
                        <Checkbox
                            checked={row.fixture_id == value}
                            onChange={handleCheckboxChange}
                            value={row.fixture_id}
                            color='secondary'
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></TableCell>
                    <TableCell align="center">
                        {row.statusShort !== 'FT' ?
                        <div className={classes.inputsContainer}>
                            <PredictionInput width={10} /> : <PredictionInput width={10} />
                        </div> : '- : -'}
                    </TableCell>
                    <TableCell align="center">0</TableCell>
                </TableRow>
        {info.includes(row.fixture_id) &&
        <TableRow>
            <TableCell/>
            <TableCell colSpan={5}>
                        <Paper>
                            <Typography color="textSecondary">
                                Match start:
                            </Typography>
                        </Paper>
            </TableCell>
            <TableCell/>
            </TableRow>}
        </>
    );
}