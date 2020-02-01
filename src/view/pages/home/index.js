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
                {/* <LeagueCard leagueName={'Champions League'} image={leaguesList.CL.logo}  link={paths.main} {...props}/>
                <LeagueCard leagueName={'Europa League'} image={leaguesList.EL.logo} link={paths.main} {...props}/>
                <LeagueCard leagueName={'English Premier League'} image={leaguesList.PL.logo} link={paths.main} {...props}/>
                <LeagueCard leagueName={'Serie A'} image={leaguesList.SA.logo} link={paths.main} {...props}/>
                <LeagueCard leagueName={'La Liga'} image={leaguesList.LL.logo} link={paths.main} {...props}/>
                <LeagueCard leagueName={'BundesLiga'} image={leaguesList.BL.logo} link={paths.main} {...props}/>
                <LeagueCard leagueName={'Ligue 1'} image={leaguesList.L1.logo} link={paths.main} {...props}/> */}

                {Object.values(leaguesList).map(liga => (
                    <LeagueCard key={liga.id} leagueName={liga.name} image={liga.logo} link={paths.main} {...props}/>
                    )
                )}

            </Box>
        </>
    );
}