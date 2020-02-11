import React from 'react';
// import LeagueList from '../../components/LeagueList'

import LeagueNavTab from './leagueNavTab'

import Top10UsersPerLeagueList from './top10UsersPerLeagueList'
import PredictionTable from "./predictionTable";
import {makeStyles} from '@material-ui/core';
import TournamentTable from './tournamentTable'

const useStyles = makeStyles({
    tablesContainer: {
        display: "flex",
        justifyContent: "space-between"
    }
})

export default function MainPage({leagueid}) {
    const classes = useStyles();

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Main Page</h1>
            <div>
                <LeagueNavTab/>

                <div className={classes.tablesContainer}>
                    <Top10UsersPerLeagueList/>
                    <PredictionTable/>
                    <TournamentTable/>
                </div>

            </div>
        </>
    )
}
