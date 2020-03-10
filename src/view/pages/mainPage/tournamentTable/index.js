import React, { useEffect, useState } from 'react';

import {
    makeStyles,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Grid,
} from '@material-ui/core';

import getTournamentTable from '../../../../helpers/databaseSetsGets/getTournamentTable';

const useStyles = makeStyles({
    paper: {
        backgroundColor: "rgba(255, 255, 255, 0.52)",
        minWidth: '17rem',
    },
    rootDiv: {
        display: 'flex',
        flexDirection: 'column',
    },

    roundPaper: {
        backgroundColor: "rgba(255, 255, 255, 0.75)",
    },

    nowrap: {
        whiteSpace:'nowrap',
    },
});

export default function TournamentTable({ leagueId }) {
    const classes = useStyles();

    const [standings, setStandings] = useState([]);

    useEffect(() => {
        getTournamentTable(leagueId).then(standings => setStandings(standings))
    }, [leagueId])

    return (
        <div className={classes.rootDiv}>
            <Paper square className={classes.roundPaper}>
                <Grid container justify="center" className={classes.prevNextDiv}>
                    <Grid item>Tournament Table</Grid>
                </Grid>
            </Paper>
            <TableContainer className={classes.paper}>
                <Table className={classes.table} aria-label='tournament table'>
                    <TableHead>
                        <TableRow>
                            {['', 'team', 'm', 'p'].map((str, i) =>
                                <TableCell key={i} align={i - 1 ? 'center' : 'left'} padding="none">{str}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {standings.map(team => (
                            <TableRow key={team.team_id} hover /* className={classes.nowrap} */>
                                <TableCell align='center' padding="none">{team.rank} </TableCell>
                                <TableCell padding="none">
                                    <Grid container alignItems="center">
                                        <img src={team.logo} alt={team.team_id} width="30" height="30" />
                                        &nbsp;
                                        {team.teamName}
                                    </Grid>
                                </TableCell>
                                <TableCell align='center' padding="none">{team.all.matchsPlayed}</TableCell>
                                <TableCell align='center' padding="none">{team.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
