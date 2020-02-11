import React from 'react';

import {
    makeStyles,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Grid
} from '@material-ui/core';

const useStyles = makeStyles({
    paper: {
        backgroundColor: "rgba(255, 255, 255, 0.52)",
        width: "auto"
    },
    table: {
        minWidth: 450,
    },
});


// let teamObj = {
//     position: 1,
//     name: 'Liverpool',
//     matches: 25,
//     points: 73,
// }
let team = [1, 'Liverpool', 25, 73]

class Team {
    constructor(/* {position,name,matches,points} */datas = team) {
        this.datas = datas;
    }
}

let tableHead = ['', 'team', 'm', 'p']

const rows = Array(20).fill('').map(() => new Team())

export default function TournamentTable() {
    const classes = useStyles();

    return (
        <TableContainer square className={classes.paper}>

            <Table className={classes.table} aria-label='tournament table'>

                <TableHead>
                    <TableRow>
                        {tableHead.map((str, i) => <TableCell align={i - 1 ? 'center' : 'left'}>{str}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            {row.datas.map((data, i) => <TableCell
                                align={i - 1 ? 'center' : 'left'}>{data}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>

    );
}
