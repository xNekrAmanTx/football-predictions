import React from "react";
import {Link} from "react-router-dom";
import {Card, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import {paths} from '../../../constants'

const useStyles = makeStyles({
    card: {
        // maxWidth: 345,
        // '&:hover':{
        //     cursor:'pointer',
        // }
    },
    
    media: {
        height: 140,
    },
    link: {
        textDecoration: 'none'
    }
});

function LeagueCard({liga}) {
    const classes = useStyles();

    return (
        <Link to={paths.main + '/' + liga.league_id} className={classes.link}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={liga.logo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {liga.name}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
export default LeagueCard;