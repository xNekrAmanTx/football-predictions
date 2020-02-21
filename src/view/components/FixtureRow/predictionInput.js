import React from 'react';
import { makeStyles } from '@material-ui/core';
import './predictionInput.css'

const useStyles = makeStyles({
    inputNum: {
        width: '2em',
        textAlign: 'center',
        WebkitAppearance: 'none',
    },

});

export default ({ value, setValue }) => {
    const classes = useStyles();

    return (
        <input
            type='number'
            min='0'
            className={classes.inputNum}
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
            width={10}
        />
    )
}