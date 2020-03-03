// <<<<<<< table-ui
// import React, {useEffect} from 'react'
// import {useHistory, useLocation, useRouteMatch, useParams} from 'react-router-dom';
// =======
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
// >>>>>>> master
import {makeStyles, Paper, Tabs, Tab} from '@material-ui/core';
import LeagueLogo from '../../../components/leagueLogo';
import {paths} from '../../../../constants';

const useStyles = makeStyles({
    root: {
        backgroundColor: "transparent",
        paddingTop: "10px"

    },
    tabBlock: {
        backgroundColor: "#fff",
        overflow: "inherit",
    },
    tabIndex: {}
});

const tabIndex = {
    minWidth: 200,
    backgroundColor: "#fff",
    borderRadius: "10px",
    margin: "10px"
};

// <<<<<<< table-ui


// export default ({leagues/* , setValue, value */}) => {
//     const classes = useStyles();
//     const history = useHistory();
//     const location = useLocation();
//     const match = useRouteMatch();
//     const {id} = useParams();
//     const [value, setValue] = React.useState(0);

//     useEffect(() => {
//             Object.keys(leagues).length && setValue(Object.keys(leagues).indexOf(id));
//         }
//         , [leagues, id]);
// =======
export default ({ leagues, leagueId }) => {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        leagues.length && setValue(leagues.map(liga=>liga.league_id).indexOf(leagueId));
    }
    , [leagues, leagueId]);
// >>>>>>> master

    const handleChange = (e, newValue) => {
        setValue(newValue);
        console.log(e.target)
    };

    function handleTabClick(id) {
        console.log(leagues, id)
        history.push(paths.main + '/' + id);
    }

    return (<Paper square className={classes.root}>
// <<<<<<< table-ui
//             <Tabs
//                 centered={true}
//                 value={value}
//                 onChange={handleChange}
//                 // variant="scrollable"
//                 indicatorColor="secondary"
//                 textColor="secondary"
//                 aria-label="leagues tab"
//             >
//                 {Object.entries(leagues).map(([id, liga]) => (
//                     <Tab
//                         style={tabIndex}
//                         onClick={() => handleTabClick(id)}
//                         key={id}
//                         label={liga.name}
//                         icon={<LeagueLogo
//                             src={liga.logo}
//                             alt={id}
//                         />}
//                         className="tabIndex"
//                     />
//                 ))}
//             </Tabs>
//         </Paper>
// =======
        <Tabs
            centered={true}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="leagues tab"
        >
            {leagues.map(liga => (
                <Tab
                    style={tabIndex}
                    onClick={() => handleTabClick(liga.league_id)}
                    key={liga.league_id}
                    label={liga.name}
                    icon={<LeagueLogo 
                        src={liga.logo} 
                        alt={liga.league_id} 
                        className={classes.tabIndex}
                    />}
                />
            ))}
        </Tabs>
    </Paper>
// >>>>>>> master
    )
}

