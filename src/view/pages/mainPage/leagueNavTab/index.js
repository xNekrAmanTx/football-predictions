import React from 'react'
import {useHistory} from 'react-router-dom';

import {makeStyles, Paper, Tabs, Tab} from '@material-ui/core';

import LeagueLogo from '../../../components/leagueLogo';
import {leaguesList, paths} from '../../../constants'

const useStyles = makeStyles({
    root: {
        backgroundColor: "transparent",

    },
    tabBlock: {
        backgroundColor: "#fff",
        overflow: "inherit",
    },
    tabIndex: {

        div: {

        }
    }

});
const tabIndex = {
    gridGap: "10px",
    display: 'grid',
    gridTemplateColumns: "repeat(5, 1fr)",
}

export default (props) => {
    const classes = useStyles();
    const history = useHistory()
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    function handleTabClick(leagueName) {
        /* getLeagueId(leagueName).then(id =>  */
        history.push(paths.main/* + `/${id}`*/)/* ) */;
    }

    return (<Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                aria-label="leagues tab"
                className={classes.tabBlock}
            >
                {Object.entries(leaguesList).map(([key, liga]) => (
                    <Tab
                        style={tabIndex}
                        onClick={() => handleTabClick(liga.name)}
                        key={liga.id}
                        label={liga.name}
                        icon={<LeagueLogo src={liga.logo} alt={key}
                                          className={classes.tabIndex}
                        />}
                    />
                ))}

            </Tabs>
        </Paper>

    )
}

