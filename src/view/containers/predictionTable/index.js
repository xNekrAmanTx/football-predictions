import React from 'react';
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
    Divider
} from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },

    button: {
        position: 'absolute',
        right: 0,
    },

    prevNextDiv: {
        display: 'flex',
        margin: 'auto',
        width: 'fit-content'
    },

    rootDiv: {
        position: 'relative'
    },
});

function createData(i, firstTeam, result, secondTeam, x2, prediction, points) {
    return { i, firstTeam, result, secondTeam, x2, prediction, points };
}

const rows = [
    createData('+', 159, 6.0, 24, 4.0, 1, 2),
    createData('+', 237, 9.0, 37, 4.3, 1, 2),
    createData('+', 262, 16.0, 24, 6.0, 1, 2),
    createData('+', 305, 3.7, 67, 4.3, 1, 2),
    createData('+', 356, 16.0, 49, 3.9, 1, 2),
];

function PredictionTable() {
    const classes = useStyles();

    return (
        <div className={classes.rootDiv}>
            <div className={classes.prevNextDiv}>
                <span>previous</span><Divider orientation={"vertical"}/><span>next</span>
            </div>
            <form>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>i</TableCell>
                                <TableCell align="right">First Team</TableCell>
                                <TableCell align="right">Result</TableCell>
                                <TableCell align="right">Second Team</TableCell>
                                <TableCell align="right">x2</TableCell>
                                <TableCell align="right">Prediction</TableCell>
                                <TableCell align="right">Points</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.i}>
                                    <TableCell component="th" scope="row">
                                        {row.i}
                                    </TableCell>
                                    <TableCell align="right">{row.firstTeam}</TableCell>
                                    <TableCell align="right">{row.result}</TableCell>
                                    <TableCell align="right">{row.secondTeam}</TableCell>
                                    <TableCell align="right">{row.x2}</TableCell>
                                    <TableCell align="right">{row.prediction}</TableCell>
                                    <TableCell align="right">{row.points}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >Save Prediction</Button>
            </form>
        </div>
    );
}

export default PredictionTable;