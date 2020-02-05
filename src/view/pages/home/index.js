import React from 'react';
import { Typography,
    Divider,
    Box,
} from "@material-ui/core";
import LeagueCard from "../../components/leagueCard";
import {Link} from "react-router-dom";
import {paths, leaguesList} from '../../constants';



export default function Home(props){
    return (
        <>
            <Typography variant="h3">Predictor Homepage</Typography>
            <Divider/>
            <Typography variant="body2">
                About our website
                <Link to={paths.rules}>rules</Link>
            </Typography>
            <Typography variant="h4">Leagues</Typography>
            <Divider/>
            <Box display="flex">
                {Object.values(leaguesList).map(liga => (
                    <LeagueCard key={liga.id} leagueName={liga.name} image={liga.logo} link={paths.main} {...props}/>
                    )
                )}
            </Box>
        </>
    );
}