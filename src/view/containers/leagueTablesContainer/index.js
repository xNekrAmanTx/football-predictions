import React, {useEffect, useState} from 'react';

import {makeStyles} from '@material-ui/core';
import PredictionTable from '../../pages/mainPage/predictionTable';
import Top10UsersPerLeagueList from '../../pages/mainPage/top10UsersPerLeagueList';
import TournamentTable from '../../pages/mainPage/tournamentTable';

import getCurrentRound from '../../../helpers/databaseSetsGets/getCurrentRound'
import getFixturesOfCurrentLeagueAndRound from '../../../helpers/databaseGets/getFixturesOfCurrentLeagueAndRound';

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

export default (props) => {

    const { user, leagueId, users } = props;

    const classes = useStyles();
    const [round, setRound] = useState(0);
    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {
        /* let canselled = false;
        !canselled &&  */getCurrentRound(leagueId)
            .then(round => (setRound(round), round))
        return () => {
            // canselled = true;
            setRound(0);
        };
    }, [leagueId])

    const handler = snapshot => {
        setFixtures(Object.values(snapshot.val() || fixtures).filter(el => typeof el === 'object').sort((m1, m2) => m1.event_timestamp - m2.event_timestamp))
    }

    useEffect(() => {
        let cancelled = false;
        !cancelled && round && getFixturesOfCurrentLeagueAndRound(handler, leagueId, round)
        return () => {
            cancelled = true;
        }
    }, [leagueId, round]);

    return (

        < div className={classes.tablesContainer} >
            <Top10UsersPerLeagueList users={users} round={round} leagueId={leagueId} fixtures={fixtures} />
            <PredictionTable setRound={setRound} round={round} leagueId={leagueId} user={user} fixtures={fixtures} />
            <TournamentTable round={round} leagueId={leagueId} />
        </div >
    )
}
