import React from 'react';

import LeagueNavTab from './leagueNavTab'

import Top10UsersPerLeagueList from './top10UsersPerLeagueList'
import PredictionTable from "./predictionTable";
import {makeStyles} from '@material-ui/core';
import TournamentTable from './tournamentTable'
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
    tablesContainer: {
// <<<<<<< main-ui
        display: "flex",
        justifyContent: "space-between"
    }
})

// export default function MainPage({leagueid}) {
// =======
//         display: 'flex',
//     }
// })

export default function MainPage(props) {
// >>>>>>> master
    const classes = useStyles();
    const {id} = useParams();

    const isValidId = Object.keys(props.leagues).includes(id);

    return (
// <<<<<<< main-ui
//         <>
//             <h1 style={{textAlign: 'center'}}>Main Page</h1>
//             <div>
//                 <LeagueNavTab/>
// =======
        <section>
            <LeagueNavTab {...props} />
// >>>>>>> master

            { isValidId ?
                <div className={classes.tablesContainer}>
// <<<<<<< main-ui
//                     <Top10UsersPerLeagueList/>
//                     <PredictionTable/>
//                     <TournamentTable/>
// =======
                    <Top10UsersPerLeagueList leagueId={id}/>
                    <PredictionTable leagueId={id}/>
                    <TournamentTable leagueId={id}/>
// >>>>>>> master
                </div>
                :
                <h1 style={{textAlign:'center'}}>There is no such league id</h1>
            }

// <<<<<<< main-ui
//             </div>
//         </>
// =======
        </section>
// >>>>>>> master
    )
}
