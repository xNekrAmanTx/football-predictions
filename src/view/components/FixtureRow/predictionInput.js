import React from 'react';
import { makeStyles } from '@material-ui/core';
import './predictionInput.css'

const useStyles = makeStyles({
    inputNum: {
        width: '2em',
        textAlign: 'center',
        WebkitAppearance: 'none',
        outline: "none"
    },

});

export default ({ prediction, setPrediction, which }) => {
    const classes = useStyles();

// <<<<<<< table-ui
//     return <input className={classes.inputNum} type='number' min='0'/>;
// }
// =======
    return (
        <input
            type='number'
            min='0'
            className={classes.inputNum}
            value={prediction[which]}
            onChange={(e) => {
                const newPrediction = {...prediction};
                newPrediction[which] = e.target.value;
                setPrediction(newPrediction);
            }}
            width={10}
        />
    )
}
// >>>>>>> master
