import React from 'react'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import { makeStyles, Paper, Tabs, Tab } from '@material-ui/core';

import LeagueLogo from '../../../components/leagueLogo';
import { leaguesList, paths } from '../../../../constants'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default ({leagues}) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        console.log(leaguesList, 'local')
        setValue(newValue);
    };

    function handleTabClick(id) {
        history.push(paths.main + '/' + id);
        console.log(location)
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
                    onClick={() => handleTabClick(id)}
                    key={id}
                    label={liga.name}
                    icon={<LeagueLogo src={liga.logo} alt={id} />}
                />
            ))}

        </Tabs>
    </Paper>

    )
}

