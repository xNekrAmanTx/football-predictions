import React, {useEffect} from 'react';
import topThree from './../../images/top/top.png'
import {
    Avatar,
    makeStyles,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    rootDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flexStart',
        color: 'white'
    },

    top3usr: {
        display: 'flex',
    },

    top3: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    paper: {
        backgroundColor: 'transparent',
        color: 'white'
     },

     avUsr: {
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'
     },

    txtColor: {
        color: 'white'
    }
}));

export default function Rules() {
    const classes = useStyles();

    useEffect(() => {});

    return (
        <div className={classes.rootDiv}>
            <h1>Top Users</h1>
            <div className={classes.top3usr}>
                <div className={classes.top3}>
                    <Avatar alt="User2" src='src'/>
                    <Typography variant="overline" display="block" gutterBottom>
                        User2
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        55
                    </Typography>
                </div>
                <div className={classes.top3}>
                    <Avatar alt="User1" src="src"/>
                    <Typography variant="overline" display="block" gutterBottom>
                        User1
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        111
                    </Typography>
                </div>
                <div className={classes.top3}>
                    <Avatar alt="User3" src="src"/>
                    <Typography variant="overline" display="block" gutterBottom>
                        User3
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        22
                    </Typography>
                </div>
            </div>
            <img src={topThree} alt='top three'/>
            <TableContainer component={Paper} className={classes.paper}>
                <Table aria-label="customized table">
                    <TableBody>
                        {[{username:'user4', points: 10, avatar:'U'},{username:'user5', points: 5, avatar:'U'}].map((user, i) => (
                            <TableRow key={user.username}>
                                <TableCell align="center" className={classes.txtColor}>{i + 4}</TableCell>
                                <TableCell align="center" className={classes.txtColor}>
                                    <div className={classes.avUsr}>
                                        <Avatar alt={'User' + i} src={user.avatar} />
                                        <Typography variant="overline" display="block" gutterBottom>
                                            &emsp;{user.username}
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell align="center" className={classes.txtColor}>{user.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}