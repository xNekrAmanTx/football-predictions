import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {Card, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    link: {
        textDecoration: 'none'
    }
});

function LeagueCard(props) {
    const classes = useStyles();
    const {leagueName, image, link } = props;
    return (
        <Link to={link} className={classes.link}>
            <Card className={classes.card}>
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
        </Link>
    );
}

LeagueCard.propTypes = {
    leagueName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default LeagueCard;