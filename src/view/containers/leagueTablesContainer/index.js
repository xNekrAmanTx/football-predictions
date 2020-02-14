import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';
import PredictionTable from '../../pages/mainPage/predictionTable';
import Top10UsersPerLeagueList from '../../pages/mainPage/top10UsersPerLeagueList';
import TournamentTable from '../../pages/mainPage/tournamentTable';



const useStyles = makeStyles({
    tablesContainer: {
        display: 'flex',
    }
})

export default (props) => {
    const classes = useStyles();
    const [currentRound, setCurrentRound] = useState(1);
    

    useEffect(() => {

    }, [])

    return (
        < div className={classes.tablesContainer} >
            <Top10UsersPerLeagueList {...props} />
            <PredictionTable {...props} />
            <TournamentTable {...props} />
        </div >
    )
}