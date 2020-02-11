import React from 'react';
import { Typography, Box} from "@material-ui/core";
import LeagueCard from "../../components/leagueCard";
import {Link} from "react-router-dom";
import {paths, leaguesList} from '../../constants';

import './home.css';


export default function Home(props){
    return (
        <>


            <Box className="box">
                {Object.values(leaguesList).map(liga => (
                    <LeagueCard key={liga.id} leagueName={liga.name} image={liga.logo} link={paths.main} {...props}/>
                    )
                )}
            </Box>
            <Typography className="league-title">Leagues</Typography>
        </>
    );
}
