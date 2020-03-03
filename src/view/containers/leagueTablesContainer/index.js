import React, {useEffect, useState} from 'react';

import {makeStyles} from '@material-ui/core';
import PredictionTable from '../../pages/mainPage/predictionTable';
import Top10UsersPerLeagueList from '../../pages/mainPage/top10UsersPerLeagueList';
import TournamentTable from '../../pages/mainPage/tournamentTable';

import getCurrentRound from '../../../helpers/databaseSetsGets/getCurrentRound'

const useStyles = makeStyles({
    tablesContainer: {
        display: "grid",
        gridTemplateColumns: "0.5fr 2fr 0.5fr",
        gridGap: "20px"
    },
    td:{
        padding: 0,
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
