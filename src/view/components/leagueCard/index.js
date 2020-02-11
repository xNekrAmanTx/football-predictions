import React from "react";
import {useHistory} from "react-router-dom";
import PropTypes from 'prop-types';
import {Card, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import {paths} from '../../constants'

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.61)",
        '&:hover':{
            cursor:'pointer',
        }

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

function LeagueCard(props) {
    const classes = useStyles();
    const history = useHistory();
    const {leagueName, image, getLeagueId } = props;

    function handleCardClick(leagueName){
        getLeagueId(leagueName).then(id => history.push(paths.main/* + `/${id}`*/));
    }

    return (
        // <Link to={link} className={classes.link}>
            <Card onClick={() => handleCardClick(leagueName)} className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {leagueName}
                    </Typography>
                </CardContent>
            </Card>
        // </Link>
    );
}

LeagueCard.propTypes = {
    leagueName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default LeagueCard;
