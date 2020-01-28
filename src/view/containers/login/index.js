import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default ({open, onClose}) => {
    const [isPassValid, setisPassValid] = useState(true)
    // const [step, setStep] = useState(1)
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dis = !(username && password);


    function checkPassword(p) {
        return (
            p.length > 7 && /[a-z]/.test(p) && /[A-Z]/.test(p) && /\d/.test(p)
        )
    }

    function handleChange(e, handler) {
        handler(e.target.value)
    }


    function handleLogin() {
        setisPassValid(checkPassword(password))
        // if (checkPassword()) setStep(2)
    }


    return (
        // <div>
            <Dialog
                open={open}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                <DialogContent>
                    {/* <TextField
                        onChange={(e) => handleChange(e, setFirstName)}
                        margin="dense"
                        // id="firstName"
                        label="First Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={(e) => handleChange(e, setLastName)}
                        margin="dense"
                        // id="lastName"
                        label="Last Name"
                        type="text"
                        fullWidth
                    /> */}
                    <TextField
                        required
                        onChange={(e) => handleChange(e, setUsername)}
                        margin="dense"
                        // id="userName"
                        label="Username"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        required
                        error={!isPassValid}
                        onChange={(e) => handleChange(e, setPassword)}
                        margin="dense"
                        // id="password"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={dis} onClick={handleLogin} color="primary">
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        // </div>
    );
}
