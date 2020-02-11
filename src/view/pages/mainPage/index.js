import React from 'react';

import LeagueNavTab from './leagueNavTab'

import Top10UsersPerLeagueList from './top10UsersPerLeagueList'
import PredictionTable from "./predictionTable";
import { makeStyles } from '@material-ui/core';
import TournamentTable from './tournamentTable'

const useStyles = makeStyles({
    tablesContainer: {
        display: 'flex',
    }
})

export default function MainPage({ leagues, leagueid }) {
    const classes = useStyles();

    return (
            <section>
                <LeagueNavTab leagues={leagues} />

                <div className={classes.tablesContainer}>
                    <Top10UsersPerLeagueList />
                    <PredictionTable />
                    <TournamentTable />
                </div>

            </section>
    )
}