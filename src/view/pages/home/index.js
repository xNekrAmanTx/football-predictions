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

export default function Home(){
    return (
        <>
            <Typography variant="h3">Predictor Homepage</Typography>
            <Divider/>
            <Typography variant="body2">
                About our website
                <Link to={paths[3]}>rules</Link>
            </Typography>
            <Typography variant="h4">Leagues</Typography>
            <Divider/>
            <Box display="flex">
                <LeagueCard leagueName={'Champions League'} image={CL}  link={''}/>
                <LeagueCard leagueName={'Europa League'} image={''} link={''}/>
                <LeagueCard leagueName={'English Premier League'} image={PL} link={''}/>
                <LeagueCard leagueName={'Serie A'} image={''} link={''}/>
                <LeagueCard leagueName={'La Liga'} image={''} link={''}/>
                <LeagueCard leagueName={'BundesLiga'} image={''} link={''}/>
                <LeagueCard leagueName={'Ligue 1'} image={''} link={''}/>
            </Box>
        </>
    );
}