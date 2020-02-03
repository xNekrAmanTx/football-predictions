import React from 'react'
import { useHistory } from 'react-router-dom';

import { makeStyles, Paper, Tabs, Tab } from '@material-ui/core';

import LeagueLogo from '../../../components/leagueLogo';
import { leaguesList, paths } from '../../../constants'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 400,
    },
});

export default (props) => {
    const classes = useStyles();
    const history = useHistory()
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    function handleTabClick(leagueName){
        /* getLeagueId(leagueName).then(id =>  */history.push(paths.main/* + `/${id}`*/)/* ) */;
    }

    return (<Paper square className={classes.root}>
        <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="leagues tab"
        >
            {Object.entries(leaguesList).map(([key,liga]) => (
                <Tab 
                    onClick={()=>handleTabClick(liga.name)} key={liga.id} label={liga.name} icon={<LeagueLogo src={liga.logo} alt={key}/>} />
            ))}
            
        </Tabs>
    </Paper>

    )
}

