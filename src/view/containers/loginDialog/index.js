import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {validateUser} from '../../helpers/validation/loginValidation'
import {paths} from '../../constants'
import {Link} from 'react-router-dom'

export default ({open, handleClose}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dis = !(username && password);

    function handleChange(e, handler) {
        handler(e.target.value)
    }


    function handleLogin() {
        validateUser(username, password) ? handleClose() : alert('error');
    }


    return (
            <Dialog
                open={open}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={(e) => handleChange(e, setUsername)}
                        margin="dense"
                        label="Username"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={(e) => handleChange(e, setPassword)}
                        margin="dense"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={dis} onClick={handleLogin} color="primary">
                        Login
                    </Button>
                </DialogActions>
                <Link onClick={handleClose} to={paths.signup}>Don't have an account? Sign up</Link>
            </Dialog>
    );
}
