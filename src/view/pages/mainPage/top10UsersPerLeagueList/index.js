import React, { useState, useEffect } from "react";

import { Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from "@material-ui/core";

import firebase from 'firebase/app';
import 'firebase/database';
import getUsers from "../../../../helpers/databaseGets/getUsers";
import { calculateMatchPoints } from "../../../../helpers/calculatePoints";

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: "rgba(255, 255, 255, 0.52)",
        maxWidth: 'fit-content',
    },

    roundPaper: {
        backgroundColor: "rgba(255, 255, 255, 0.75)",
    },

    rootDiv: {
        display: 'flex',
        flexDirection: 'column',
    },
}));


export default ({ round, leagueId, fixtures/* , users */ }) => {
    const classes = useStyles();

    const [users, setUsers] = useState([]);

    const [top10OfLeague, setTop10OfLeague] = useState([]);
    const [top10OfRound, setTop10OfRound] = useState([]);

    // error()
    useEffect(() => {

        round && getUsers().then(users => (setUsers(users = Object.entries(users).filter(([username, user]) => user.predictions)), console.log(users), users))
            .then(users => {
                users.forEach(([predictorName, predictor]) => {
                    Object.entries(predictor.predictions).forEach(([leagueId, league]) => {

                        firebase.database().ref(`points/roundPoints/${predictorName}/${leagueId}`).on('value', snap => {
                            firebase.database().ref(`points/leaguePoints/${predictorName}/${leagueId}`)
                                .set(Object.values(snap.val()).reduce((sum, roundPoints) => {
                                    return sum + roundPoints;
                                }, 0))
                        })


                        Object.entries(league).forEach(([roundId, round]) => {

                            console.log(round, 'round');
                            firebase.database().ref(`/users/${predictorName}/predictions/${leagueId}/${roundId}`).on('value', snap => {
                                firebase.database().ref(`points/roundPoints/${predictorName}/${leagueId}/${roundId}`)
                                    .set(Object.values(snap.val()).reduce((sum, fix) => {
                                        return sum + (typeof fix === 'object' ? fix.fixturePoints : 0);
                                    }, 0))
                            })

                            Object.entries(round).forEach(([fixtureId, fixture]) => {
                                firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}/${roundId}/${fixtureId}`).on('value', snap => {
                                    snap.exists() && snap.val().statusShort === 'FT' &&
                                        firebase.database().ref(`/users/${predictorName}/predictions/${leagueId}/${roundId}/${fixtureId}/fixturePoints`)
                                            .set(calculateMatchPoints(snap.val().score.fulltime, fixture.homeGoals + '-' + fixture.awayGoals, fixture.x2)).then(points => console.log(points, 'points'))
                                })

                            })
                        })
                    })
                })
                return users;
            })
            .then(users => {
                let roundTop = users.filter(([username, user]) => user.predictions[leagueId] && user.predictions[leagueId][round]);
                Promise.all(roundTop.map(([username, user]) => 
                    new Promise(resolve =>
                        firebase.database().ref(`/points/roundPoints/${username}/${leagueId}/${round}`).once('value')
                            .then(snap => resolve({ ...user, points : snap.val() || 0, username }))
                    )
                ))
                    .then(arrOfUsers => {
                        console.log(arrOfUsers, 'arrOfUsers');
                        round && setTop10OfRound(arrOfUsers.sort((user1, user2) => user2.points - user1.points).slice(0, 10))
                    })
            })
    }, [leagueId, round])

    return (
        <div className={classes.rootDiv}>
            <Paper square className={classes.roundPaper}>
                <Grid container justify="center" className={classes.prevNextDiv}>
                    <Grid item>Top 10 Users</Grid>
                </Grid>
            </Paper>
            <TableContainer component={Paper} className={classes.paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" />
                            <TableCell align="center" colSpan={2}>
                                users
                            </TableCell>
                            <TableCell align="center">points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {top10OfRound.map((user, i) => (
                            <TableRow key={user.username}>
                                <TableCell align="center">{i + 1}</TableCell>
                                <TableCell align="right"><Avatar alt="Av" src={user.avatar} /></TableCell>
                                <TableCell align="left">{user.username}</TableCell>
                                <TableCell align="center">{user.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
