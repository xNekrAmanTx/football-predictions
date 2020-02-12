import React from 'react';
import { makeStyles } from '@material-ui/core';
import './predictionInput.css'

const useStyles = makeStyles({
    inputNum: {
        width: '2em',
        textAlign: 'center',
        WebkitAppearance: 'none',
    },

})

export default () => {
    const classes = useStyles()

    return <input className={classes.inputNum} type='number' min='0'/>;
}