import React from 'react';

import LeagueNavTab from './leagueNavTab'

import Top10UsersPerLeagueList from './top10UsersPerLeagueList'
import PredictionTable from "./predictionTable";
import { makeStyles } from '@material-ui/core';
import TournamentTable from './tournamentTable'
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
    tablesContainer: {
        display: 'flex',
    }
})

export default function MainPage(props) {
    const classes = useStyles();
    const {id} = useParams();

    return (
        <section>
            <LeagueNavTab {...props} />

            {Object.keys(props.leagues).includes(id) ?
                <div className={classes.tablesContainer}>
                    <Top10UsersPerLeagueList />
                    <PredictionTable />
                    <TournamentTable />
                </div>
                :
                <h1 style={{textAlign:'center'}}>There is no such league id</h1>
            }

        </section>
    )
}