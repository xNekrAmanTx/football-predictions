import React, {useEffect, useState} from 'react';

import {makeStyles} from '@material-ui/core';
import PredictionTable from '../../pages/mainPage/predictionTable';
import Top10UsersPerLeagueList from '../../pages/mainPage/top10UsersPerLeagueList';
import TournamentTable from '../../pages/mainPage/tournamentTable';

import getCurrentRound from '../../../helpers/databaseSetsGets/getCurrentRound'

const useStyles = makeStyles({
    tablesContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        gridGap: "20px"
    }
});

export default ({leagueId}) => {
    const classes = useStyles();
    const [round, setRound] = useState(0);

    useEffect(() => {
        getCurrentRound(leagueId)
            .then(round => (setRound(round), round))
            .then(console.log)
    }, [leagueId])

    return (
        < div className={classes.tablesContainer}>
            <Top10UsersPerLeagueList round={round} leagueId={leagueId}/>
            <PredictionTable setRound={setRound} round={round} leagueId={leagueId}/>
            <TournamentTable round={round} leagueId={leagueId}/>
        </div>
    )
}
