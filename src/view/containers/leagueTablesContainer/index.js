import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';
import PredictionTable from '../../pages/mainPage/predictionTable';
import Top10UsersPerLeagueList from '../../pages/mainPage/top10UsersPerLeagueList';
import TournamentTable from '../../pages/mainPage/tournamentTable';

import getCurrentRound from '../../../helpers/databaseSetsGets/getCurrentRound'

const useStyles = makeStyles({
    tablesContainer: {
        display: "flex",
        justifyContent: "space-between",
    }
});

export default ({ leagueId, user }) => {
    const classes = useStyles();
    const [round, setRound] = useState(0);

    useEffect(() => {
        getCurrentRound(leagueId)
            .then(round => (setRound(round), round))
            .then(console.log)
        return () => setRound(0);
    }, [leagueId])

    return (
        < div className={classes.tablesContainer} >
            <Top10UsersPerLeagueList round={round} leagueId={leagueId} />
            <PredictionTable setRound={setRound} round={round} leagueId={leagueId} user={user} />
            <TournamentTable round={round} leagueId={leagueId} />
        </div >
    )
}