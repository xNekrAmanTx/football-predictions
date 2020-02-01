import React from 'react';
// import LeagueList from '../../components/LeagueList'

import LeagueNav from './leagueNav'

// import TopPerLeagueList from './topPerLeagueList'
import PredictionTable from "./predictionTable";
// import TournamentList from './tournamentList'


export default function MainPage({ leagueid }) {
    return (
        <>
            <h1>Main Page</h1>
            <section>
                <LeagueNav />

                <div className='tablesContainer'>
                    {/* <TopPerLeagueList /> */}
                    <PredictionTable />
                    {/* <TournamentList /> */}
                </div>

            </section>
        </>
    )
}