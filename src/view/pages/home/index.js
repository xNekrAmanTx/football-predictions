import React from 'react';
import { Typography,
    Divider,
    Box,
} from "@material-ui/core";
import LeagueCard from "../../components/leagueCard";
import {Link} from "react-router-dom";
import {paths} from '../../constants/';
import CL from '../../images/CL.png';
import PL from '../../images/PL.png';

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
                <LeagueCard leagueName={'Champions League'} image={CL}  link={paths.main} {...props}/>
                <LeagueCard leagueName={'Europa League'} image={CL} link={paths.main} {...props}/>
                <LeagueCard leagueName={'English Premier League'} image={PL} link={paths.main} {...props}/>
                <LeagueCard leagueName={'Serie A'} image={PL} link={paths.main} {...props}/>
                <LeagueCard leagueName={'La Liga'} image={PL} link={paths.main} {...props}/>
                <LeagueCard leagueName={'BundesLiga'} image={PL} link={paths.main} {...props}/>
                <LeagueCard leagueName={'Ligue 1'} image={PL} link={paths.main} {...props}/>
            </Box>
        </>
    );
}