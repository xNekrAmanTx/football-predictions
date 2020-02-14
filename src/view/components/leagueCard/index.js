import React from "react";
import {Link} from "react-router-dom";
import {Card, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import {paths} from '../../../constants'

const useStyles = makeStyles({
    card: {
// <<<<<<< main-ui
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.61)",
        '&:hover':{
            cursor:'pointer',
        }

// =======
//         // maxWidth: 345,
//         // '&:hover':{
//         //     cursor:'pointer',
//         // }
// >>>>>>> master
    },

    media: {
        height: 140,
        width: "70%",
        backgroundSize: "contain"
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
// <<<<<<< main-ui

// LeagueCard.propTypes = {
//     leagueName: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
// };

// export default LeagueCard;
// =======
export default LeagueCard;
// >>>>>>> master
