// import React from 'react'
// import { useHistory } from 'react-router-dom';
//
// import { makeStyles, Paper, Tabs, Tab } from '@material-ui/core';
//
// import LeagueLogo from '../../../components/leagueLogo';
// import { leaguesList, paths } from '../../../constants'
//
// const useStyles = makeStyles({
//     root: {
//         flexGrow: 1,
//         maxWidth: 400,
//     },
// });
//
// export default (props) => {
//     const classes = useStyles();
//     const history = useHistory()
//     const [value, setValue] = React.useState(0);
//
//     const handleChange = (e, newValue) => {
//         setValue(newValue);
//     };
//
//     function handleTabClick(leagueName){
//         /* getLeagueId(leagueName).then(id =>  */history.push(paths.main/* + `/${id}`*/)/* ) */;
//     }
//
//     return (<Paper square className={classes.root}>
//         <Tabs
//             value={value}
//             onChange={handleChange}
//             variant="fullWidth"
//             indicatorColor="secondary"
//             textColor="secondary"
//             aria-label="leagues tab"
//         >
//             {Object.entries(leaguesList).map(([key,liga]) => (
//                 <Tab
//                     onClick={()=>handleTabClick(liga.name)} key={liga.id} label={liga.name} icon={<LeagueLogo src={liga.logo} alt={key}/>} />
//             ))}
//
//         </Tabs>
//     </Paper>
//
//     )
// }
//
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

function createData(avatar, user, point) {
    return { avatar, user, point };
}

const rows = [
    createData("av", "user 1", 25),
    createData("av", "user 2", 20),
    createData("av", "user 3", 15),
    createData("av", "user 4", 10),
    createData("av", "user 5", 5),
    createData("av", "user 1", 25),
    createData("av", "user 2", 20),
    createData("av", "user 3", 15),
    createData("av", "user 4", 10),
    createData("av", "user 5", 5),
];

export default () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={2}>
                            users
                        </TableCell>
                        <TableCell align="center">points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.user}>
                            <TableCell align="right"><Avatar alt="Av" src={row.avatar}/></TableCell>
                            <TableCell align="left">{row.user}</TableCell>
                            <TableCell align="center">{row.point}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}