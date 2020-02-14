// <<<<<<< main-ui
import React from 'react'
import {useHistory} from 'react-router-dom';
// =======
import React, { useEffect } from 'react'
import { useHistory, useLocation, useRouteMatch, useParams } from 'react-router-dom';
// >>>>>>> master

import {makeStyles, Paper, Tabs, Tab} from '@material-ui/core';

import LeagueLogo from '../../../components/leagueLogo';
// <<<<<<< main-ui
import {leaguesList, paths} from '../../../constants'
// =======
import { paths } from '../../../../constants'
// >>>>>>> master

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
    , [leagues]);

    const handleChange = (e, newValue) => {
        setValue(newValue);
        console.log(e.target)
    };

// <<<<<<< main-ui
//     function handleTabClick(leagueName) {
//         /* getLeagueId(leagueName).then(id =>  */
//         history.push(paths.main/* + `/${id}`*/)/* ) */;
//     }

//     return (<Paper square className={classes.root}>
//             <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 textColor="secondary"
//                 aria-label="leagues tab"
//                 className={classes.tabBlock}
//             >
//                 {Object.entries(leaguesList).map(([key, liga]) => (
//                     <Tab
//                         style={tabIndex}
//                         onClick={() => handleTabClick(liga.name)}
//                         key={liga.id}
//                         label={liga.name}
//                         icon={<LeagueLogo src={liga.logo} alt={key}
//                                           className={classes.tabIndex}
//                         />}
//                     />
//                 ))}

//             </Tabs>
//         </Paper>
// =======
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
                    onClick={() => handleTabClick(id)}
                    key={id}
                    label={liga.name}
                    icon={<LeagueLogo src={liga.logo} alt={id} />}
                />
            ))}

        </Tabs>
    </Paper>
// >>>>>>> master

    )
}

