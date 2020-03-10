import React, { useState, useEffect } from "react";

import { Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Select, MenuItem } from "@material-ui/core";

import firebase from 'firebase/app';
import 'firebase/database';
import getUsers from "../../../../helpers/databaseGets/getUsers";
import { calculateMatchPoints } from "../../../../helpers/calculatePoints";

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: "rgba(255, 255, 255, 0.52)",
        minWidth: '17rem',

    },

    roundPaper: {
        backgroundColor: "rgba(255, 255, 255, 0.75)",
    },

    rootDiv: {
        display: 'flex',
        flexDirection: 'column',
    },
  
    avatar: {
        width: "30px",
        height: "30px",
        margin: "5px 0"
    },
  
    /* noFocus:{
        '&:active': {
            outline: 'none',
          },
    } */
}));


export default ({ round, leagueId, fixtures/* , users */ }) => {

    const classes = useStyles();


    const [users, setUsers] = useState([]);

    const [typeOfTop, setTypeOfTop] = useState('leaguePoints');

    const [top10, setTop10] = useState([]);

    // error()
    useEffect(() => {

        round && getUsers().then(users => (setUsers(users = Object.entries(users).filter(([username, user]) => user.predictions)), /*console.log(users),*/ users))
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

                            firebase.database().ref(`/users/${predictorName}/predictions/${leagueId}/${roundId}`).on('value', snap => {
                                firebase.database().ref(`points/roundPoints/${predictorName}/${leagueId}/${roundId}`)
                                    .set(Object.values(snap.val()).reduce((sum, fix) => {
                                        return sum + (typeof fix === 'object' ? fix.fixturePoints : 0);
                                    }, 0))
                            })

                            Object.entries(round).forEach(([fixtureId, fixture]) => {
                                firebase.database().ref(`/fixturesPerLeaguePerRound/${leagueId}/${roundId}/${fixtureId}`).on('value', snap => {
                                    snap.exists() && snap.val().statusShort === 'FT' && firebase.database().ref(`/users/${predictorName}/predictions/${leagueId}/${roundId}/${fixtureId}/fixturePoints`)
                                        .set(calculateMatchPoints(snap.val().score.fulltime, fixture.homeGoals + '-' + fixture.awayGoals, fixture.x2))
                                })

                            })
                        })
                    })
                })
                return users;
            })
            .then(users => {
                let top = users.filter(([username, user]) => user.predictions[leagueId] && (typeOfTop === 'leaguePoints' || user.predictions[leagueId][round]));
                Promise.all(top.map(([username, user]) =>
                    new Promise(resolve =>
                        firebase.database().ref(`/points/${typeOfTop}/${username}/${leagueId}/${typeOfTop === 'roundPoints' ? round : ''}`).once('value')
                            .then(snap => resolve({ ...user, points: snap.val() || 0, username }))
                    )
                ))
                    .then(arrOfUsers => {
                        // console.log(arrOfUsers, 'arrOfUsers');
                        round && setTop10(arrOfUsers.sort((user1, user2) => user2.points - user1.points).slice(0, 10))
                    })
            })
    }, [fixtures, typeOfTop])

    // error()
    return (
        <div className={classes.rootDiv}>
            <Paper square className={classes.roundPaper}>
                <Grid container justify="center" className={classes.prevNextDiv}>
                    <Grid item>Top 10 Users of&nbsp;
                        <Select
                            // className={classes.noFocus}
                            variant='outlined'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={typeOfTop}
                            onChange={e => setTypeOfTop(e.target.value)}
                        >
                            <MenuItem value={'leaguePoints'}>league</MenuItem>
                            <MenuItem value={'roundPoints'}>round</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Paper>
            <TableContainer square component={Paper} className={classes.paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="center" className="tableCell" padding="none"/>
                            <TableCell align="center" colSpan={2} className="tableCell" padding="none">
                                user
                            </TableCell>
                            <TableCell align="center" className="tableCell" padding="none">points</TableCell>

                        </TableRow>
                    </TableHead>


                    <TableBody>

                        {top10.map((user, i) => (
                            <TableRow key={user.username}>
                                <TableCell align="center" className="tableCell" padding="none">{i + 1}</TableCell>
                                <TableCell align="right" className="tableCell" padding="none"><Avatar>{user.avatar}</Avatar></TableCell>
                                <TableCell align="left" className="tableCell" padding="none">{user.username}</TableCell>
                                <TableCell align="center" className="tableCell" padding="none">{user.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
