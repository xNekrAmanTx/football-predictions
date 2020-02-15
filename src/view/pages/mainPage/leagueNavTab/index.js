import React, { useEffect } from 'react'
import { useHistory, useLocation, useRouteMatch, useParams } from 'react-router-dom';
import {makeStyles, Paper, Tabs, Tab} from '@material-ui/core';
import LeagueLogo from '../../../components/leagueLogo';
import { paths } from '../../../../constants';

const useStyles = makeStyles({
    root: {
        backgroundColor: "transparent",

    },
    tabBlock: {
        backgroundColor: "#fff",
        overflow: "inherit",
    },
});

const tabIndex = {
    gridGap: "10px",
    display: 'grid',
    gridTemplateColumns: "repeat(5, 1fr)",
};

export default ({ leagues/* , setValue, value */ }) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();
    const { id } = useParams();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        Object.keys(leagues).length && setValue(Object.keys(leagues).indexOf(id));
    }
    , [leagues, id]);

    const handleChange = (e, newValue) => {
        setValue(newValue);
        console.log(e.target)
    };

    function handleTabClick(id) {
        history.push(paths.main + '/' + id);
        console.log(match, id)
    }

    return (<Paper square className={classes.root}>
        <Tabs
            centered={true}
            value={value}
            onChange={handleChange}
            // variant="scrollable"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="leagues tab"
        >
            {Object.entries(leagues).map(([id, liga]) => (
                <Tab
                    style={tabIndex}
                    onClick={() => handleTabClick(id)}
                    key={id}
                    label={liga.name}
                    icon={<LeagueLogo 
                        src={liga.logo} 
                        alt={id} 
                        className={classes.tabIndex}
                    />}
                />
            ))}
        </Tabs>
    </Paper>
    )
}

