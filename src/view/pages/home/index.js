import React from 'react';
import { Typography, Box} from "@material-ui/core";
import LeagueCard from "../../components/leagueCard";
import {Link} from "react-router-dom";
import {paths} from '../../../constants';

import './home.css';


export default function Home({leagues}){
    return (
        <>
// <<<<<<< main-ui


//             <Box className="box">
//                 {Object.values(leaguesList).map(liga => (
//                     <LeagueCard key={liga.id} leagueName={liga.name} image={liga.logo} link={paths.main} {...props}/>
// =======
//             <Typography variant="h3">Predictor Homepage</Typography>
//             <Divider/>
//             <Typography variant="body2">
//                 About our website
//                 <Link to={paths.rules}>rules</Link>
//             </Typography>
//             <Typography variant="h4">Leagues</Typography>
//             <Divider/>
            <Box className="box">
                {Object.values(leagues).map(liga => (
                    <LeagueCard key={liga.league_id} liga={liga}/>
// >>>>>>> master
                    )
                )}
            </Box>
            <Typography className="league-title">Leagues</Typography>
        </>
    );
}
